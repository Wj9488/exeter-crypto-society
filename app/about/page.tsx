"use client";
import GenericHeader from "@/components/GenericHeader";
import Transition from "@/components/Transition";

// const session = null

const About = () => {
  // if (!session) throw new Error("An unexpected error occured with this page")

  return (
    <Transition>
      <main className="">
        <GenericHeader
          headingOne="Find out more about the society."
          subheadingPreText="About"
          subheading="
        If you trade crypto, stocks, commodities, futures, options or you're just curious about trading, 
        we'll give you a warm welcome. We're a society that unites those who are passionate about 
        the financial markets. 
        "
          buttonText="Get your membership"
          buttonHref="https://my.exeterguild.com/groups/H6VXP/blockchain-and-crypto-society/memberships"
          imageSource="/cryptoSoc__img_about.webp"
          imageAlt="Busy people"
        />
        <section className="pt-10 pb-10 pl-[2.5%] pr-[2.5%]  lg:grid lg:grid-cols-2 lg:grid-rows-1 dark:text-neutral-200">
          <h2 className="font-medium text-3xl lg:text-4xl">Our values</h2>
          <p className="lg:text-xl lg:mt-0 mt-4">
            Our society is open to all, beginners and experienced traders alike, and we invite you to join a
            welcoming community of passionate traders.
            <br />
            <br />
            We are committed to fostering an environment that embraces diversity
            and encourages collaboration. We believe in the power of collective
            learning and personal development. 
            <br />
            <br />
            We recognise the value of having a strong network and provide extensive 
            opportunities for you to meet traders from all asset classes. 
          </p>
        </section>
      </main>
    </Transition>
  );
};

export default About;
