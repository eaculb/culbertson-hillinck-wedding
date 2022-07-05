export interface Status {
  picnic?: boolean | null;
  wedding?: boolean | null;
  bagels?: boolean | null;
}

export interface Guest {
  id: string;
  name: string;
  email?: string;
  status?: Status;
  dietaryRestriction?: boolean;
  dietaryRestrictionDetail?: string;
  hotelHelp?: string;
  other?: string;
}

export interface Party {
  id: string;
  guestA: Guest;
  guestB: Guest;
  updated?: string;
}
