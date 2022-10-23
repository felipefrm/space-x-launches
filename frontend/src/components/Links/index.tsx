import colors from 'tailwindcss/colors'
import { FaYoutube, FaReddit, FaWikipediaW } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";

import { Links as LinksType } from "../../types/Links"

import { LinkItem } from "./LinkItem";

interface LinksProps {
  items: LinksType
}

export function Links({ items }: LinksProps) {
  return (
    <div className="flex flex-row gap-1">
      <LinkItem link={items.webcast} title="Watch on Youtube">
        <FaYoutube size={24} color={colors.neutral['400']} />
      </LinkItem>

      <LinkItem link={items.reddit.campaign} title="Follow the Reddit thread">
        <FaReddit size={24} color={colors.neutral['400']} />
      </LinkItem>

      <LinkItem link={items.wikipedia} title="Read the Wikipedia article">
        <FaWikipediaW size={24} color={colors.neutral['400']} />
      </LinkItem>

      <LinkItem link={items.article} title="Read related article">
        <BsNewspaper size={24} color={colors.neutral['400']} />
      </LinkItem>
    </div >
  )
}