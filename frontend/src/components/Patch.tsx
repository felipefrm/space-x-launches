interface PatchProps {
  image: string | null
}

export function Patch({ image }: PatchProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold uppercase text-neutral-400">Mission</p>
      <div className="flex w-40 h-40 bg-black bg-opacity-20 rounded-xl p-4">
        {
          image
            ? <img src={image} alt="Mission patch" />
            : (
              <p className="text-white flex justify-center items-center flex-1">
                No patch available
              </p>
            )
        }
      </div>
    </div>
  )
}