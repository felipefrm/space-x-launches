interface CardAttributeProps {
  title?: string;
  description?: string | number;
}

export function CardAttribute({ title, description }: CardAttributeProps) {
  if (description === undefined || description === null) {
    return null;
  }

  return (
    <div className="font-bold">
      <p className="uppercase text-neutral-400">{title}</p>
      <p className="text-white text-lg">{description}</p>
    </div>
  )
}