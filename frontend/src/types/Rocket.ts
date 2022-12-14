export type Rocket = {
  id: string;
  active: boolean;
  company: string;
  country: string;
  description: string;
  name: string;
  mass: { kg: number };
  flickr_images: string[];
  wikipedia: string;
}