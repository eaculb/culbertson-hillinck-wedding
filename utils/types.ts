export interface Status {
  picnic?: boolean | null;
  wedding?: boolean | null;
  bagels?: boolean | null;
}

export interface Guest {
  id: string;
  name: string;
  status?: Status;
  updated?: string;
}

export interface Party {
  id: string;
  email?: string;
  guestA: Guest;
  guestB: Guest;
  dietaryRestriction?: boolean;
  dietaryRestrictionDetail?: string;
  hotelHelp?: boolean;
  other?: string;
  updated?: string;
}
