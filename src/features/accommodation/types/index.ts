export interface Amenity {
  key: string;
  name: string;
}

export interface Bed {
  amount: number;
  type: string;
}

export interface Ratings {
  sum: number;
  count: number;
  average: number;
}

export interface Offer {
  hasOffer: boolean;
  discountPercentage: number;
}

export interface Room {
  id: number;
  title: string;
  description: string;
  bed: Bed;
  meters: number;
  people: number;
  amenities: Amenity[];
  value: number;
  gallery: string[];
  thumb: string;
  ratings: Ratings;
  Offer: Offer;
}
