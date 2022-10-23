import { MdMoreVert } from "react-icons/md";

import { useModal } from "../contexts/modal";

interface ButtonDetailsProps {
  text: string;
}

export function ButtonDetails({ text }: ButtonDetailsProps) {
  const { openModal } = useModal();

  return (
    <button
      className="bg-black bg-opacity-30 rounded-md p-2 hover:opacity-80 transition-opacity self-start"
      onClick={openModal}
    >
      <span className="text-neutral-400 font-bold flex items-center gap-1">
        <MdMoreVert size={22} />
        {text}
      </span>
    </button>
  )
}