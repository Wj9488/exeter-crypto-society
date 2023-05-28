"use client";

import Link from "next/link";
import { motion as anim, useAnimation } from "framer-motion";

const Footer = () => {
  const controls = useAnimation();
  const handleMouseEnter = () => {
    controls.start({ rotate: -45 });
  };

  const handleMouseLeave = () => {
    controls.start({ rotate: 0 });
  };
  return (
    <footer className="n__width mt-10 dark:text-neutral-200 ">
      <Link href="https://my.exeterguild.com/groups/H6VXP/blockchain-and-crypto-society/memberships" className="cta__section">
        <section
          className="border__top pt-10 pb-10 flex items-center justify-between"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p className="text-4xl lg:text-6xl font-[500]">Join us</p>
          <anim.svg
            className="lg:w-[83px] lg:h-[59px] w-[54.78px] h-[38.94px]"
            viewBox="0 0 83 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={controls}
            initial={{ rotate: 0 }}
            transition={{ type: "linear" }}
          >
            <path
              d="M80.8552 32.3284C82.4173 30.7663 82.4173 28.2337 80.8552 26.6716L55.3993 1.21573C53.8372 -0.346368 51.3046 -0.346368 49.7425 1.21573C48.1804 2.77783 48.1804 5.31049 49.7425 6.87258L72.3699 29.5L49.7425 52.1274C48.1804 53.6895 48.1804 56.2222 49.7425 57.7843C51.3046 59.3464 53.8372 59.3464 55.3993 57.7843L80.8552 32.3284ZM0.996582 33.5H78.0268V25.5H0.996582V33.5Z"
              className="fill-black dark:fill-neutral-200"
            />
          </anim.svg>
        </section>
      </Link>
      <section className="border__top pt-10 pb-10 lg:flex justify-between">
        <div className="flex items-start gap-2 lg:mb-0 mb-10">
          <svg
            width="29"
            height="40"
            viewBox="0 0 29 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.000183105"
              y="9"
              width="5"
              height="27"
              className="fill-black dark:fill-neutral-200"
            />
            <line
              x1="2.50018"
              y1="5"
              x2="2.50018"
              y2="40"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="8.00018"
              y="10"
              width="5"
              height="20"
              className="fill-black dark:fill-neutral-200"
            />
            <line
              x1="10.5002"
              y1="3"
              x2="10.5002"
              y2="33"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="16.0002"
              y="7"
              width="5"
              height="16"
              className="fill-black dark:fill-neutral-200"
            />
            <line
              x1="18.5002"
              y1="2"
              x2="18.5002"
              y2="27"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="24.0002"
              y="3"
              width="5"
              height="16"
              className="fill-black dark:fill-neutral-200"
            />
            <line
              x1="26.5002"
              x2="26.5002"
              y2="20"
              className="stroke-black dark:stroke-neutral-200"
            />
          </svg>
          <p className="text-xl font-semibold">Exeter Crypto</p>
        </div>
        <div className="flex gap-10">
          <ul className="text-2xl">
            <li className="hover__link">
              <Link href="/#events">Events</Link>
            </li>
            <li className="hover__link">
              <Link href="/about">About</Link>
            </li>
            <li className="hover__link">
              <Link href="/committee">Committee</Link>
            </li>
            <li className="hover__link">
              <Link legacyBehavior href="/">
                <a target="_blank">Membership</a>
              </Link>
            </li>
          </ul>
          <ul className="text-sm">
            <li className="hover:opacity-[75%] flex gap-2">
              <Link legacyBehavior href="/#events">
                <a target="_blank">Discord</a>
              </Link>
            </li>
            <li className="hover:opacity-[75%] flex gap-2">
              <Link legacyBehavior href="/about">
                <a target="_blank">Instagram</a>
              </Link>
            </li>
            <li className="hover:opacity-[75%] flex gap-2">
              <Link legacyBehavior href="/committee">
                <a target="_blank">Fixr</a>
              </Link>
            </li>
            <li className="hover:opacity-[75%] flex gap-2">
              <Link legacyBehavior href="/">
                <a target="_blank">Guild Page</a>
              </Link>
            </li>
            <li className="hover:opacity-[75%] flex gap-2">
              <Link legacyBehavior href="/">
                <a target="_blank">LinkedIn</a>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="lg:pb-4 pb-8 pt-4 lg:flex gap-2 lg:text-base text-xs">
        <p className="lg:mb-0 mb-2">
          Copyright © Exeter Blockchain and Crypto Society
        </p>
        <div className="lg:block hidden">|</div>
        <Link href="https://willjonesdev.co.uk/" legacyBehavior>
          <a target="_blank">
            Built by <span className="underline">Will Jones</span>
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
