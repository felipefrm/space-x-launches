import { MdMoreVert } from "react-icons/md";

interface ButtonDetailsProps {
  text: string;
}

export function ButtonDetails({ text }: ButtonDetailsProps) {
  return (
    <button
      className="bg-black bg-opacity-30 rounded-md p-2 hover:opacity-80 transition-opacity self-start"
    >
      <span className="text-neutral-400 font-bold flex items-center gap-1">
        <MdMoreVert size={22} />
        {text}
      </span>
    </button>
  )
}