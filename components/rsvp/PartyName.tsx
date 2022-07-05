import { Party } from "@/utils/types";

export default function PartyName({ party }: { party: Party }) {
  const string1 = party.guestA.name;
  const string2 = party.guestB ? ` & ${party.guestB.name}` : "";
  return <>{`${string1}${string2}`}</>;
}
