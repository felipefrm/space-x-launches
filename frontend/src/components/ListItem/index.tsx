import { format } from "date-fns";

import { Launch } from "../../types/Launch";
import { ButtonDetails } from "../ButtonDetails";
import { CardAttribute } from "../Card/CardAttribute";
import { Countdown } from "../Countdown";
import { Links } from "../Links";
import { Patch } from "../Patch";

interface ListItemProps {
  type: "upcoming" | "past";
  data: Launch;
}

export function ListItem({ data, type }: ListItemProps) {
  const formattedDate = format(new Date(data.date_utc), 'PPpp')

  return (
    <div className="bg-opacity-30 bg-black rounded-xl shadow-md p-6">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <Patch image={data.links.patch.small} />
          <div className="flex justify-center">
            <Links items={data.links} />
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex gap-8">
            <CardAttribute title="Mission name" description={data.name} />
            <CardAttribute title="Flight Number" description={data.flight_number} />
          </div>
          <CardAttribute title="Date" description={formattedDate} />
          {
            type === 'past' ? (
              <CardAttribute title="Success" description={data.success ? "Yes" : "No"} />
            ) : (
              <div>
                <p className="font-bold uppercase text-neutral-400">Countdown</p>
                <Countdown deadline={new Date(data.date_utc)} />
              </div>
            )
          }
          {data.details && <CardAttribute title="Details" description={data.details} />}


        </div>
      </div>
      <div className="self-end text-end mt-4">
        <ButtonDetails launchId={data.id} text="Show more details" />
      </div>
    </div>
  )
}