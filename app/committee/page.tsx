"use client"

import Transition from "@/components/Transition"
import LinkButton from "@/components/LinkButton"
import Image from "next/image"

// const session = null

const Committee = () => {

  // if (!session) throw new Error("An unexpected error occured with this page")

  return (
    <Transition>
    <main>
      <header className="pt-16 pb-16 lg:pt-20 lg:pb-20 n__width dark:text-neutral-200">
        <h1 className="text-5xl lg:text-7xl xl:text-8xl 2xl:text-[6.25rem] font-[500]">
          Crypto Society committee 2023/2024.
        </h1>
        <div className="lg:ml-[0%]">
          <p className="mt-20 uppercase text-xs">COMMITTEE</p>
          <p className="text-lg lg:text-xl mt-4">Get to know the committee members for this year and what each of them wants to bring to the society.</p>
          <LinkButton text="We're recruiting" href="/committee/#" />
        </div>
        <div className="pt-20 w-[100%] h-[100%]">
          <Image
            src="/cryptoSoc__img_committee.webp"
            alt="Crypto Society Committee"
            width={1500}
            height={1000}
            className="rounded-xl w-full mr-auto ml-auto"
            quality={60}
            loading= "eager"
          />
        </div>
      </header>
    </main>
    </Transition>
  )
}

export default Committee