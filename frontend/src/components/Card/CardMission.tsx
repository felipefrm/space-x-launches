import { Card } from "./Card";
import { CardAttribute } from "./CardAttribute";
import { Patch } from "../Patch";

interface CardMissionProps {
  title: string;
}

export function CardMission({ title }: CardMissionProps) {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <h2 className="text-white font-bold text-3xl">{title}</h2>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <CardAttribute />
            <CardAttribute />
            <CardAttribute />
            <CardAttribute />
          </div>
          <div>
            <Patch />
          </div>
        </div>
      </div>
    </Card>
  )
}