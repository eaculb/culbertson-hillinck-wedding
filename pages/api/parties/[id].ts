import type { NextApiRequest, NextApiResponse } from "next";

import db from "@/utils/db";
import { Party } from "@/utils/types";

// @ts-ignore
export async function getPartyDeep(party) {
  const data = party.data();
  const guestA = data.guestA && (await data.guestA.get());
  const guestB = data.guestB && (await data.guestB.get());
  return {
    id: party.id,
    guestA: guestA?.data(),
    guestB: guestB?.data(),
  };
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
      updateParty(id, data, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function updateParty(id: string, data: Party, res: NextApiResponse) {
  await db
    .collection("parties")
    .doc(id)
    .update({
      ...data,
      updated: new Date().toISOString(),
    });
}
