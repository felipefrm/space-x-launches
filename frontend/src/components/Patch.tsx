interface PatchProps {
  image: string | null
}

import spaceXLogo from '../assets/images/space-x.png'

export function Patch({ image }: PatchProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold uppercase text-neutral-400">Mission Patch</p>
      <div className="flex w-36 h-36 bg-black bg-opacity-20 rounded-xl p-4">
        <img src={image ?? spaceXLogo} alt="Mission patch" />
      </div>
    </div>
  )
}