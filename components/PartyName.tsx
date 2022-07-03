import { Party } from "@/utils/types";

export default function PartyName({ party }: { party: Party }) {
  return (
    <>{`${party.guestA?.name}${
      party.guestA && party.guestB && ` & `
    }${`${party.guestB?.name}`}`}</>
  );
}
