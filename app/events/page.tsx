"use client";
import Image from "next/image";
import GenericHeader from "@/components/GenericHeader";
import LinkButton from "@/components/LinkButton";
import Transition from "@/components/Transition";

const EventsPage = () => {
  return (
    <Transition>
    <main>
        <GenericHeader 
            headingOne="All upcoming events"
            subheadingPreText="EVENTS"
            subheading="We run events often. You'll need a membership to participate."
            buttonText="Get your membership"
            buttonHref="https://my.exeterguild.com/groups/33WXC/self-development-society/memberships"
            imageSource="/cryptoSoc__img_bitcoin.webp"
            imageAlt="Busy people"
        />
      <section
        className="pt-10 pb-10 pl-[2.5%] pr-[2.5%]  dark:text-neutral-200"
      >
        <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-4 lg:gap-8 pt-5">
          <div className="pt-6 lg:pt-0">
            <div className="w-full">
              <Image
                width={400}
                height={800}
                src="/cryptoSoc__img_bitcoin.webp"
                alt="Crypto Society Course"
                className="w-full rounded-xl"
              />
            </div>
            <p className="text-2xl  font-[500] mt-4">
              First weekly trading session - 09/09/2023
            </p>
            <p className="mt-2 lg:text-xl">
              Join us for our first ever trade night, we’ll be tackling anything
              related to crypto and NFTs. You’ll be able to share your ideas and
              network with other traders.
            </p>
            <LinkButton text="Get tickets here" href="#" />
          </div>
          <div className="pt-6 lg:pt-0">
            <div className="w-full">
              <Image
                width={400}
                height={800}
                src="/cryptoSoc__img_about.webp"
                alt="Crypto Society Course"
                className="w-full rounded-xl"
              />
            </div>
            <p className="text-2xl font-[500] mt-4">
              First weekly social at The Ram - 14/09/2023
            </p>
            <p className="mt-2 lg:text-xl">
              Come meet the committee and other likeminded individuals to talk
              about everything trading.
            </p>
            <LinkButton text="Get tickets here" href="#" />
          </div>
          <div className="pt-6 lg:pt-0">
            <div className="w-full">
              <Image
                width={400}
                height={800}
                src="/cryptoSoc__img_course.webp"
                alt="Crypto Society Course"
                className="w-full rounded-xl"
              />
            </div>
            <p className="text-2xl font-[500] mt-4">
              Trading Bootcamp Lesson 1 - 24/09/2023
            </p>
            <p className="mt-2 lg:text-xl">
              The first lesson of the 8 week bootcamp. You'll learn the basics
              of what trading is and some of the advantages of knowing how to
              trade.
            </p>
            <LinkButton text="Enroll for free" href="#" />
          </div>
        </div>
      </section>
    </main>
    </Transition>
  );
};

export default EventsPage;
