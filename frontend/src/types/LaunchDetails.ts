import { Crew } from "./Crew";
import { Launch } from "./Launch";
import { Launchpad } from "./Launchpad";
import { Payload } from "./Payload"
import { Rocket } from "./Rocket";

export type LaunchDetails = {
  launch: Launch;
  launchpads?: Launchpad[];
  rockets?: Rocket[];
  payloads?: Payload[];
  crew?: Crew[];
}