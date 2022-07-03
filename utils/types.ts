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
  dietaryRestrictionsBool?: boolean;
  dietaryRestrictionsDetail?: string;
  hotelHelp?: string;
  notes?: string;
}

export interface Party {
  id: string;
  guestA: Guest;
  guestB: Guest;
  updated?: string;
}
