import type { NextApiRequest, NextApiResponse } from "next";

import db from "@/utils/db";
import { Guest } from "@/utils/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const id = req.query.id as string;
  const data = req.body;

  switch (method) {
    case "GET":
      const guest = await db.collection("guests").doc(id).get();
      if (!guest.exists) {
        res.status(404).end();
      } else {
        const data = guest.data();
        res.status(200).json(data);
      }
      break;
    case "PUT":
      try {
        await updateGuest(id, data);
        // This is dumb but I'm getting an error sending an empty response
        res.status(200).json({ success: true });
      } catch (err) {
        console.error(err);
        res.status(400).json({ error: err });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function updateGuest(id: string, data: Guest) {
  await db
    .collection("guests")
    .doc(id)
    .update({
      ...data,
      updated: new Date().toISOString(),
    });
}
