class OpeningTimes {
  days: string;
  opening: string;
  closing: string;
  closed: boolean;
}

export class Review {
  author: string;
  rating: number;
  reviewText: string;
}

export class Location {
  name: string;
  address: string;
  rating: number;
  facilities: [string];
  _id: string;
  images: [string];
  position: [number];
  reviews:[Review];
  openingTimes: [OpeningTimes];
}
