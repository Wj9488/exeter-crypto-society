"use client"

import Transition from "@/components/Transition"
import GenericHeader from "@/components/GenericHeader"

// const session = null

const Committee = () => {

  // if (!session) throw new Error("An unexpected error occured with this page")

  return (
    <Transition>
    <main>
      <GenericHeader 
            headingOne="Crypto Society committee 2023/2024. "
            subheadingPreText="Committee"
            subheading="
            Get to know the committee members for this year and what each of them wants to bring to the society.
            "
            buttonText="We're recruiting"
            buttonHref="/"
            imageSource="/cryptoSoc__img_committee.webp"
            imageAlt="Crypto Society Committee"
      />
    </main>
    </Transition>
  )
}

export default Committee