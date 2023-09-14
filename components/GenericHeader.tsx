"use client";
import Image from "next/image";
import LinkButton from "./LinkButton";
import { motion as anim } from "framer-motion"

interface HeaderProps {
  headingOne: string;
  subheadingPreText: string;
  subheading: string;
  imageSource: string;
  imageAlt: string;
  buttonText: string;
  buttonHref: string;
}

const GenericHeader = ({
  headingOne,
  subheadingPreText,
  subheading,
  imageSource,
  imageAlt,
  buttonText,
  buttonHref,
}: HeaderProps) => {

  const bannerAnimation = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      }
    }
  }

  const letterAnimation = {
    initial: {
      y: 125,
      // opacity: 0,
      rotate: "2deg"
    },
    animate: {
      y: 0,
      // opacity: 1,
      rotate: "0deg",
      transition: {
        ease: "easeIn",
        duration: 0.5,
      }
    }
  }
  
  return (
    <anim.header className="pt-16 pb-16 lg:pt-20 lg:pb-20 n__width dark:text-neutral-200"
    variants={bannerAnimation}
    animate="animate"
    initial="initial"
    >
      <div className="relative overflow-hidden pb-2">
      {/* <anim.h1 className="text-5xl lg:text-7xl xl:text-8xl 2xl:text-[6.25rem] font-[500] relative block"
      variants={letterAnimation}
      animate="animate"
      initial="initial"
      >
      { headingOne }
      </anim.h1> */}
      <h1 className="text-5xl lg:text-7xl xl:text-8xl 2xl:text-[6.25rem] font-[500]">{headingOne}</h1>
      </div>
      <div className="lg:ml-[0%]">
        <p className="mt-20 uppercase text-xs">{subheadingPreText}</p>
        <p className="text-lg lg:text-xl mt-4">{subheading}</p>
        <div className="flex items-center gap-2 justify-between">
          <LinkButton text={buttonText} href={buttonHref} />
          <div className="flex items-center gap-2 px-4 mt-4 py-2">
            <p className="text-sm">Scroll </p>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 11.6673C3.84171 11.8625 4.15829 11.8625 4.35355 11.6673L7.53553 8.48528C7.7308 8.29002 7.7308 7.97344 7.53553 7.77817C7.34027 7.58291 7.02369 7.58291 6.82843 7.77817L4 10.6066L1.17157 7.77817C0.976311 7.58291 0.659728 7.58291 0.464466 7.77817C0.269204 7.97344 0.269204 8.29002 0.464466 8.48528L3.64645 11.6673ZM3.5 0L3.5 11.3137H4.5L4.5 0L3.5 0Z"
                className="dark:fill-neutral-200 fill-black"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="pt-20 w-[100%] h-[100%]">
        <Image
          src={`${imageSource}`}
          alt={`${imageAlt}`}
          width={1500}
          height={1000}
          className="rounded-xl w-full mr-auto ml-auto"
          quality={60}
          loading="eager"
        />
      </div>
    </anim.header>
  );
};

export default GenericHeader;

// NON GENERIC HEADER BELOW:

{
  /* <header className="pt-16 pb-16 lg:pt-20 lg:pb-20 n__width bg-[#eff7f6]">
<h1 className="text-5xl lg:text-7xl xl:text-8xl font-[500]">
  Find out more about the society.
</h1>
<div className="lg:ml-[0%]">
  <p className="mt-20 uppercase text-xs">ABOUT</p>
  <p className="text-xl mt-4">
    We're creating a hub where traders, entrepreneurs and developers of all types can 
    join together. 
    We have a diverse group of motivated individuals who are constantly seeking 
    improvement. If you're passionate about trading you'll fit right in - no matter
    how obscure the asset.
  </p>
  <LinkButton text="Get membership" href="/"/>
</div>
<div className="pt-20">
  <Image 
  src="/cryptoSoc_img_office.webp"
  alt="Office Building"
  width={1500}
  height={1000}
  className="rounded-xl w-full"
  />
</div>
</header> */
}
