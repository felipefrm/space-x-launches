import { Card } from ".";
import { CardAttribute } from "./CardAttribute";
import { Patch } from "../Patch";
import { Launch } from "../../types/Launch";
import { Countdown } from "../Countdown";
import { format } from "date-fns";
import { FaSpinner } from "react-icons/fa";
import { Links } from "../Links";

interface CardMissionProps {
  data: Launch
  title: string;
  isLoading: boolean;
}

export function CardMission({ data, title, isLoading }: CardMissionProps) {
  if (isLoading) {
    return (
      <Card>
        <div className="flex flex-col min-h-[244px]">
          <h2 className="text-white font-bold text-3xl">{title}</h2>
          <div className="flex flex-col flex-1 self-center justify-center animate-spin">
            <FaSpinner color="white" size={32} />
          </div>
        </div>
      </Card>
    )
  }

  const isPast = data.success !== null;
  const formattedDate = format(new Date(data.date_utc), 'PPpp')

  console.log(data.links)

  return (
    <Card>
      <div className="flex flex-col gap-4">
        <h2 className="text-white font-bold text-3xl">{title}</h2>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <CardAttribute title="Mission name" description={data.name} />
            <CardAttribute title="Date" description={formattedDate} />
            {
              isPast ? (
                <CardAttribute title="Success" description={data.success ? "Yes" : "No"} />
              ) : (
                <>
                  <p className="font-bold uppercase text-neutral-400">{title}</p>
                  <Countdown deadline={new Date(data.date_utc)} />
                </>
              )
            }
            {data.details && <CardAttribute title="Details" description={data.details} />}
          </div>
          <div>
            <Patch image={data.links?.patch.small} />
          </div>
        </div>
        <Links items={data.links} />
      </div>
    </Card>
  )
}