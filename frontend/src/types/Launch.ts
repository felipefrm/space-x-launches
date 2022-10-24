import { Links } from "./Links";

export type Launch = {
  id: string;
  name: string;
  details: string | null;
  date_utc: string;
  flight_number: number;
  success: boolean;
  links: Links 
}