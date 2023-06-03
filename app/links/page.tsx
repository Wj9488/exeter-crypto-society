"use client"

import { motion as anim } from "framer-motion"
import Link from "next/link"

const allLinks = [
  { name: "Website", url: "/?lp" },
  { name: "Discord", url: "https://discord.gg/BjWj7rVw" },
  { name: "Events", url: "/#events" },
  { name: "Instagram", url: "https://www.instagram.com/blockcryptosoc/" },
  { name: "Fixr", url: "/" },
  { name: "Guild Page", url: "https://my.exeterguild.com/groups/H6VXP/blockchain-and-crypto-society" },
]

const LinksPage = () => {
  return (
    <main className="min-h-[50vh] pl-[2.5%] pr-[2.5%]">
        <ul className="lg:flex items-start justify-start flex-wrap">
          {allLinks.map((link, index) => (
            <anim.li
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="mt-5 lg:ml-5 text-3xl lg:text-4xl border border-black px-4 py-2 lg:px-9 lg:py-3 rounded-2xl dark:text-neutral-200 dark:border-neutral-200"
              key={index}
            >
              <Link href={link.url}>
                {link.name} &#8594;
              </Link>
            </anim.li>
          ))}
        </ul>
    </main>
  )
}

export default LinksPage