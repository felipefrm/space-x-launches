import { CardAttribute } from "../Attribute";

interface LabeledImageProps {
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  labels: Array<{
    title: string;
    description: string;
  }>;
}

export function LabeledImage({ image, labels }: LabeledImageProps) {
  return (
    <div className='relative'>
      <img
        className={`rounded-md h-[${String(image.height)}px] max-w-[${String(image.width)}px] object-cover`}
        src={image.src}
        alt={image.alt}
        referrerPolicy="no-referrer"
      />
      <div className='absolute bottom-2 left-2 bg-black bg-opacity-40 backdrop-blur-sm p-2 rounded-lg'>
        {labels.map((label) => (
          <CardAttribute key={label.title} title={label.title} description={label.description} />
        ))}
      </div>
    </div>
  )
}