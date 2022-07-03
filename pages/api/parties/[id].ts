import type { NextApiRequest, NextApiResponse } from "next";

import db from "@/utils/db";
import { Party } from "@/utils/types";

// @ts-ignore
export async function getPartyDeep(party) {
  const data = party.data();
  const guestA = data.guestA && (await data.guestA.get());
  const guestB = data.guestB && (await data.guestB.get());
  const result = {
    id: party.id,
    guestA: { id: data.guestA.id, ...guestA?.data() },
    guestB: guestB && { id: data.guestB.id, ...guestB.data() },
  };
  return result;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const id = req.query.id as string;
  const data = req.body;

  switch (method) {
    case "GET":
      const party = await db.collection("parties").doc(id).get();
      if (!party.exists) {
        res.status(404).end();
      } else {
        const data = await getPartyDeep(party);
        res.status(200).json(data);
      }
      break;
    case "PUT":
      updateParty(id, data);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function updateParty(id: string, data: Party) {
  await db
    .collection("parties")
    .doc(id)
    .update({
      ...data,
      updated: new Date().toISOString(),
    });
}
