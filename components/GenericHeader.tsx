"use client";
import Image from "next/image";
import LinkButton from "./LinkButton";

interface HeaderProps {
  headingOne: string;
  subheadingPreText: string;
  subheading: string;
  imageSource: string;
  imageAlt: string;
  buttonText: string;
}

const GenericHeader = ({
  headingOne,
  subheadingPreText,
  subheading,
  imageSource,
  imageAlt,
  buttonText
}: HeaderProps) => {
  return (
    <header className="pt-16 pb-16 lg:pt-20 lg:pb-20 n__width dark:text-neutral-200">
      <h1 className="text-5xl lg:text-7xl xl:text-8xl 2xl:text-[6.25rem] font-[500]">
        {headingOne}
      </h1>
      <div className="lg:ml-[0%]">
        <p className="mt-20 uppercase text-xs">{subheadingPreText}</p>
        <p className="text-lg lg:text-xl mt-4">{subheading}</p>
        <LinkButton text={buttonText} href="https://my.exeterguild.com/groups/H6VXP/blockchain-and-crypto-society/memberships" />
      </div>
      <div className="pt-20 w-[100%] h-[100%]">
        <Image
          src={`${imageSource}`}
          alt={`${imageAlt}`}
          width={1500}
          height={1000}
          className="rounded-xl w-full mr-auto ml-auto"
          quality={60}
          loading= "eager"
        />
      </div>
    </header>
  );
};

export default GenericHeader;

// NON GENERIC HEADER BELOW: 

{/* <header className="pt-16 pb-16 lg:pt-20 lg:pb-20 n__width bg-[#eff7f6]">
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
</header> */}
