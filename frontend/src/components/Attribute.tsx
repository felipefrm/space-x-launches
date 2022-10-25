interface CardAttributeProps {
  title?: string;
  description?: string | number;
  theme?: 'light' | 'dark';
}

export function CardAttribute({ title, description, theme }: CardAttributeProps) {
  if (description === undefined || description === null) {
    return null;
  }

  const style = {
    light: {
      title: 'text-neutral-800',
      description: 'text-neutral-500',
    },
    dark: {
      title: 'text-neutral-400',
      description: 'text-white',
    }
  }
  
  theme = theme || 'dark';

  return (
    <div className="font-bold">
      <p className={`uppercase ${style[theme].title}`}>{title}</p>
      <p className={`${style[theme].description} text-lg`}>{description}</p>
    </div>
  )
}