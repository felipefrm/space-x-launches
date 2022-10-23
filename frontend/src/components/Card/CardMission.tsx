import { format } from "date-fns";
import { FaSpinner } from "react-icons/fa";

import { Card } from ".";
import { CardAttribute } from "./CardAttribute";
import { Patch } from "../Patch";
import { Launch } from "../../types/Launch";
import { Countdown } from "../Countdown";
import { Links } from "../Links";
import { ButtonDetails } from "../ButtonDetails";

interface CardMissionProps {
  type: 'upcoming' | 'past';
  data: Launch
  title: string;
  isLoading: boolean;
}

export function CardMission({ type, data, title, isLoading }: CardMissionProps) {
  if (isLoading) {
    return (
      <Card>
        <div className="flex flex-col min-h-[340px]">
          <h2 className="text-white font-bold text-3xl">{title}</h2>
          <div className="flex flex-col flex-1 self-center justify-center animate-spin">
            <FaSpinner color="white" size={32} />
          </div>
        </div>
      </Card>
    )
  }

  const formattedDate = format(new Date(data.date_utc), 'PPpp')

  return (
    <Card>
      <div className="flex flex-col gap-4">
        <h2 className="text-white font-bold text-3xl">{title}</h2>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <CardAttribute title="Mission name" description={data.name} />
            <CardAttribute title="Flight Number" description={data.flight_number} />
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
          </div>
          <div>
            <Patch image={data.links?.patch.small} />
          </div>
        </div>
        <div className="flex justify-between">
          <ButtonDetails text="Show details" />
          <div className="flex justify-end">
            <Links items={data.links} />
          </div>
        </div>
      </div>
    </Card>
  )
}