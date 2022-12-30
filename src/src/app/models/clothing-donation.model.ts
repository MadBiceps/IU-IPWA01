export interface ClothingDonation {
  id: string;
  localDropOff: boolean;
  address: Address | undefined;
  clothingType: ClothingType[];
}

export interface Address {
  name: string;
  street: string;
  zipCode: number;
  city: string;
  email: string;
}

export interface ClothingType {
  type: string;
  count: number;
}
