import { FaArrowRight } from "react-icons/fa";

import { Card } from "./Card";

interface CardButtonProps {
  title: string;
}

export function CardButton({ title }: CardButtonProps) {
  return (
    <button className="hover:opacity-80 transition-opacity">
      <Card>
        <div className="flex items-center justify-between gap-6">
          <p className="text-white font-semibold text-2xl">{title}</p>
          <div className="bg-black bg-opacity-20 rounded-xl p-4">
            <FaArrowRight color="white" />
          </div>
        </div>
      </Card>
    </button>
  )
}