"use client"
import GenericHeader from "@/components/GenericHeader"
import Head from "next/head"
import Transition from "@/components/Transition"

// const session = null

const About = () => {

  // if (!session) throw new Error("An unexpected error occured with this page")

  return (
    <Transition>
    <main>
    <GenericHeader 
        headingOne="Find out more about the society."
        subheadingPreText="About"
        subheading="
        If you trade crypto, stocks, commodities, futures, options or you're just curious about trading, 
        we'll give you a warm welcome. We're a society that unites those who are passionate about 
        the financial markets. If you're someone who's passionate about self improvement and learning then 
        you'll fit right in.
        "
        buttonText="Get your membership"
        imageSource="/cryptoSoc__img_about.webp"
        imageAlt="Busy people"
        />
        <section className="pt-10 pb-10 pl-[2.5%] pr-[2.5%]  lg:grid lg:grid-cols-2 lg:grid-rows-1 dark:text-neutral-200">
          <h2 className="font-medium text-3xl lg:text-4xl">Our values</h2>
          <p className="lg:text-xl lg:mt-0 mt-4">
            We are committed to fostering an inclusive and supportive
            environment that encourages growth, learning, and collaboration.
            Whether you're a student, faculty member, or simply have a keen
            interest in crypto, we welcome you to join our thriving society and
            embark on an extraordinary journey of discovery and personal
            development.
          </p>
        </section>
    </main>
    </Transition>
  )
}

export default About