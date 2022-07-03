import db from "@/utils/db";
import { Party } from "@/utils/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { getPartyDeep } from "./parties/[id]";

var stringSimilarity = require("string-similarity");

const THRESHOLD = 0.5;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const filtered = await lookupParty(req);
        res.status(200).json(filtered);
      } catch (e) {
        res.status(400).end();
      }

      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function lookupParty(req: NextApiRequest) {
  const {
    query: { partial },
  } = req;
  const allParties = await db.collection("parties").get();
  // @ts-ignore
  const allData = await Promise.all(
    allParties.docs.map(async (party) => await getPartyDeep(party))
  );

  const filtered = allData.filter(
    (party) =>
      stringSimilarity.compareTwoStrings(party.guestA.name, partial) >
        THRESHOLD ||
      (party.guestB &&
        stringSimilarity.compareTwoStrings(party.guestB.name, partial) >
          THRESHOLD)
  );
  return filtered;
}
