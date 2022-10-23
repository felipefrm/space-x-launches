import { Links as LinksType } from "../../types/Links"
import colors from 'tailwindcss/colors'
import { FaYoutube, FaReddit, FaWikipediaW } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";

import { LinkItem } from "./LinkItem";

interface LinksProps {
  items: LinksType
}

export function Links({ items }: LinksProps) {
  return (
    <div className="flex flex-row gap-1 justify-end">
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
        <GrArticle size={24} color={colors.neutral['400']} />
      </LinkItem>
    </div >
  )
}