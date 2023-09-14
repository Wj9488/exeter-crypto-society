"use client";

import Transition from "@/components/Transition";
import GenericHeader from "@/components/GenericHeader";
import Link from "next/link"
import { motion as anim, useAnimation } from "framer-motion";

// const session = null

const Committee = () => {
  // if (!session) throw new Error("An unexpected error occured with this page")

  const controls = useAnimation();
  const handleMouseEnter = () => {
    controls.start({ rotate: -45 });
  };

  const handleMouseLeave = () => {
    controls.start({ rotate: 0 });
  };

  // type with underscore and no caps between words for better UX
  const availableRole = "social_sec"
  const availableRoleYear = "2023_2024"

  return (
    <Transition>
      <main>
        <GenericHeader
          headingOne="Crypto Society committee 2023/2024. "
          subheadingPreText="Committee"
          subheading="
            Get to know the committee members for this year and what each of them wants to bring to the society.
            "
          buttonText="Social sec role available"
          buttonHref={`/committee/application?position=${availableRole}&year=${availableRoleYear}`}
          imageSource="/cryptoSoc__img_committee.webp"
          imageAlt="Crypto Society Committee"
        />
      </main>
      <h2 className="dark:text-neutral-200 text-4xl pl-[2.5%] pb-10 font-[500]">Committee Members</h2>
      <section className="pl-[2.5%] pr-[2.5%] pb-10 pt-10 dark:text-neutral-200">
        <div className="">
          <div className="flex items-center justify-between border__top_bottom pb-4 pt-4 border-black dark:border-neutral-200">
            <p className="text-3xl">President</p>
            <svg
              width="34"
              height="23"
              viewBox="0 0 48 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.3241 12.3243C47.9099 11.7385 47.9099 10.7888 47.3241 10.203L37.7781 0.65707C37.1924 0.0712837 36.2426 0.0712837 35.6568 0.65707C35.071 1.24286 35.071 2.1926 35.6568 2.77839L44.1421 11.2637L35.6568 19.749C35.071 20.3347 35.071 21.2845 35.6568 21.8703C36.2426 22.4561 37.1924 22.4561 37.7781 21.8703L47.3241 12.3243ZM0.263428 12.7637L46.2634 12.7637V9.76367L0.263428 9.76367L0.263428 12.7637Z"
                className="fill-black dark:fill-neutral-200"
              />
            </svg>
            <p className="text-3xl">Will</p>
          </div>
          <div className="flex items-start justify-between pt-4 dark:text-neutral-200 pb-10  lg:gap-0 gap-10">
            <p className="text-lg lg:text-xl lg:w-4/12">
              This is where Will's short description about himself should go. 
            </p>
            <ul className="text-sm ">
              <li className="hover:opacity-[75%] flex gap-2">
                <Link legacyBehavior href="https://www.linkedin.com/in/william-jones-450715251/">
                  <a target="_blank">LinkedIn</a>
                </Link>
              </li>
              <li className="hover:opacity-[75%] flex gap-2">
                <Link legacyBehavior href="https://willjonesdev.co.uk/">
                  <a target="_blank">Website</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between border__top_bottom pb-4 pt-4 border-black dark:border-neutral-200">
            <p className="text-3xl">Vice President</p>
            <svg
              width="34"
              height="23"
              viewBox="0 0 48 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.3241 12.3243C47.9099 11.7385 47.9099 10.7888 47.3241 10.203L37.7781 0.65707C37.1924 0.0712837 36.2426 0.0712837 35.6568 0.65707C35.071 1.24286 35.071 2.1926 35.6568 2.77839L44.1421 11.2637L35.6568 19.749C35.071 20.3347 35.071 21.2845 35.6568 21.8703C36.2426 22.4561 37.1924 22.4561 37.7781 21.8703L47.3241 12.3243ZM0.263428 12.7637L46.2634 12.7637V9.76367L0.263428 9.76367L0.263428 12.7637Z"
                className="fill-black dark:fill-neutral-200"
              />
            </svg>
            <p className="text-3xl">Audrey</p>
          </div>
          <div className="flex items-start justify-between pt-4 dark:text-neutral-200  pb-10 lg:gap-0 gap-10">
            <p className="text-lg lg:text-xl lg:w-4/12">
              This is where Audrey's short description 
              about herself should go. 
            </p>
            <ul className="text-sm ">
              <li className="hover:opacity-[75%] flex gap-2">
                <Link legacyBehavior href="https://www.linkedin.com/in/william-jones-450715251/">
                  <a target="_blank">LinkedIn</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between border__top_bottom pb-4 pt-4 border-black dark:border-neutral-200">
            <p className="text-3xl">Treasurer</p>
            <svg
              width="34"
              height="23"
              viewBox="0 0 48 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.3241 12.3243C47.9099 11.7385 47.9099 10.7888 47.3241 10.203L37.7781 0.65707C37.1924 0.0712837 36.2426 0.0712837 35.6568 0.65707C35.071 1.24286 35.071 2.1926 35.6568 2.77839L44.1421 11.2637L35.6568 19.749C35.071 20.3347 35.071 21.2845 35.6568 21.8703C36.2426 22.4561 37.1924 22.4561 37.7781 21.8703L47.3241 12.3243ZM0.263428 12.7637L46.2634 12.7637V9.76367L0.263428 9.76367L0.263428 12.7637Z"
                className="fill-black dark:fill-neutral-200"
              />
            </svg>
            <p className="text-3xl">Jacob</p>
          </div>
          <div className="flex items-start justify-between pt-4 dark:text-neutral-200  pb-10 lg:gap-0 gap-10">
            <p className="text-lg lg:text-xl lg:w-4/12">
              This is where Jacob's short description 
              about himself should go. 
            </p>
            <ul className="text-sm ">
              <li className="hover:opacity-[75%] flex gap-2">
                <Link legacyBehavior href="https://www.linkedin.com/in/william-jones-450715251/">
                  <a target="_blank">LinkedIn</a>
                </Link>
              </li>
            </ul>
          </div>

          <h3 className="dark:text-neutral-200 text-4xl pb-20 pt-10 font-[500]">Roles available</h3>

          <Link href={`/committee/application?position=${availableRole}&year=${availableRoleYear}`}>
            <div className="flex items-center justify-between border__top_bottom pb-4 pt-4 border-black dark:border-neutral-200
            transition-opacity"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id="target__opacity"
            >
              <p className="text-3xl">Social Sec</p>
              <anim.svg
                width="34"
                height="23"
                viewBox="0 0 48 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={controls}
                initial={{ rotate: 0 }}
                transition={{ type: "linear" }}
              
              >
                <path
                  d="M47.3241 12.3243C47.9099 11.7385 47.9099 10.7888 47.3241 10.203L37.7781 0.65707C37.1924 0.0712837 36.2426 0.0712837 35.6568 0.65707C35.071 1.24286 35.071 2.1926 35.6568 2.77839L44.1421 11.2637L35.6568 19.749C35.071 20.3347 35.071 21.2845 35.6568 21.8703C36.2426 22.4561 37.1924 22.4561 37.7781 21.8703L47.3241 12.3243ZM0.263428 12.7637L46.2634 12.7637V9.76367L0.263428 9.76367L0.263428 12.7637Z"
                  className="fill-black dark:fill-neutral-200"
                />
              </anim.svg>
              <p className="text-3xl">Available</p>
            </div>
          </Link>
          <div className="flex items-start justify-between pt-4 dark:text-neutral-200  pb-10 lg:gap-0 gap-10">
            <p className="text-lg lg:text-xl lg:w-4/12">
              We're recruiting a social sec to join 
              us for the 2023/2024 committee.  
            </p>
            <ul className="text-sm ">
              <li className="hover:opacity-[75%] flex gap-2">
                <Link legacyBehavior href="/">
                  <a target="_blank">Apply Here</a>
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
      </section>
    </Transition>
  );
};

export default Committee;
