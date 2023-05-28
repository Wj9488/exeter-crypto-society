"use client"

import GenericHeader from "@/components/GenericHeader"
import Transition from "@/components/Transition"

const Course = () => {
  return (
    <Transition>
        <main>
        <GenericHeader 
            headingOne="Learn to trade Crypto and NFTs for free. "
            subheadingPreText="Course"
            subheading="
            We’re running an 8 week program to take you from beginner to being able to navigate and trade the crypto / NFT markets with confidence. This course is taught by the Exeter Crypto Society committee who has a combined 14 years of trading experience to pass on for free. 
            "
            buttonText="Enroll for free"
            imageSource="/cryptoSoc__img_bitcoin.webp"
            imageAlt="Busy people"
            />
        </main>
    </Transition>
  )
}

export default Course