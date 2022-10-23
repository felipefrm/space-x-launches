import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Card } from ".";

interface CardButtonProps {
  type: 'upcoming' | 'past';
  title: string;
}

export function CardButton({ type, title }: CardButtonProps) {
  return (
    <button className="hover:opacity-80 transition-opacity">
      <Link to={`launches/${type}`}>
        <Card>
          <div className="flex items-center justify-between gap-6">
            <p className="text-white font-semibold text-2xl">{title}</p>
            <div className="bg-black bg-opacity-20 rounded-xl p-4">
              <FaArrowRight color="white" />
            </div>
          </div>
        </Card>
      </Link>
    </button>
  )
}