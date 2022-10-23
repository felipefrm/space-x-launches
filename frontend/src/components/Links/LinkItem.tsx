interface LinkItemProps {
  link: string | null;
  title: string;
  children: React.ReactNode;
}

export function LinkItem({ link, title, children }: LinkItemProps) {
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        title={title}
        className="bg-black bg-opacity-30 rounded-md p-2 hover:opacity-80 transition-opacity"
      >
        {children}
      </a>
    )
  }

  return null;
}