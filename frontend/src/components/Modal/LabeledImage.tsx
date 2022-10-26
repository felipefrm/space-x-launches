import { CardAttribute } from "../Attribute";

interface LabeledImageProps {
  image: {
    src: string;
    alt: string;
    size: 'small' | 'medium';
  };
  labels: Array<{
    title: string;
    description: string;
  }>;
}

export function LabeledImage({ image, labels }: LabeledImageProps) {
  return (
    <div className='relative'>
      {image.size === 'medium' && (
        <img
          className="rounded-md h-[400px] max-w-[300px] object-cover"
          src={image.src}
          alt={image.alt}
          referrerPolicy="no-referrer"
        />
      )}
      {image.size === 'small' && (
        <img
          className="rounded-md h-[300px] max-w-[200px] object-cover"
          src={image.src}
          alt={image.alt}
          referrerPolicy="no-referrer"
        />
      )}
      <div className='absolute bottom-2 left-2 bg-black bg-opacity-40 backdrop-blur-sm p-2 rounded-lg'>
        {labels.map((label) => (
          <CardAttribute key={label.title} title={label.title} description={label.description} />
        ))}
      </div>
    </div>
  )
}