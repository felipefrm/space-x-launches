import { Payload } from "../../types/Payload";
import { CardAttribute } from "../Attribute";

interface PayloadCardProps {
  payload: Payload;
  index: number;
}

export function PayloadCard({ payload, index }: PayloadCardProps) {
  return (
    <div key={payload.id} className='p-6 border-4 rounded-xl'>
      <h2 className="text-neutral-900 text-2xl font-bold mb-4">Payload #{index}</h2>
      <div className="flex gap-8 flex-wrap">
        <CardAttribute theme="light" title='Name' description={payload.name} />
        <CardAttribute theme="light" title='Type' description={payload.type} />
        <CardAttribute theme="light" title='Orbit' description={payload.orbit} />
        <CardAttribute theme="light" title='Nationality' description={payload.nationalities[0]} />
        <CardAttribute theme="light" title='Manufacturer' description={payload.manufacturers[0]} />
        <CardAttribute theme="light" title='Customer' description={payload.customers[0]} />
      </div>
    </div>
  )
}