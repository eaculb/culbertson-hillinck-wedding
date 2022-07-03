export interface Guest {
  id: string;
  name: string;
  email?: string;
  picnic?: boolean;
  wedding?: boolean;
  bagels?: boolean;
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
