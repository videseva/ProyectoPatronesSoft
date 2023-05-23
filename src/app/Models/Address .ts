import { GeoLocation } from "./GeoLocation";

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoLocation;
  }