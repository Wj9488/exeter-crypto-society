"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion as anim } from "framer-motion";
import Image from "next/image";
import SelfDevIcon from "../public/selfDev__icon.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }
  function handleMenuClick() {
    setMenuOpen(false);
  }
  function handleDarkClick() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToTop = () => {
    console.log(window.scrollX)
    window.scrollTo({
      top: 0,
    })
  }

  const menuVariants = {
    open: {
      y: -0,
      //   borderTopLeftRadius: "10%",
      //   borderTopRightRadius: "10%",
      borderRadius: "20px",
      opacity: 1,
      zIndex: "10",
      minHeight: "40vh",
      transition: {
        // type: "spring",
        ease: "easeInOut",
        stiffness: 50,
      },
    },
    closed: {
      y: "-100%",
      borderRadius: "40px",
      opacity: 0,
      zIndex: "-10",
      minHeight: "0vh",
      transition: {
        // type: "spring",
        ease: "easeInOut",
        stiffness: 50,
      },
    },
  };

  return (
    <nav className="sticky py-1 top-0 z-10 bg-[#f1fffa] dark:bg-[#08170e] transition-colors duration-250">
      <anim.div
        className="flex items-center justify-between pl-[2.5%] pr-[2.5%] min-h-[6vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <div className="flex items-center" onClick={handleMenuClick}>
          <div className="flex items-center gap-2">
            {/* <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="5"
                width="3"
                height="16"
                className="fill-black dark:fill-neutral-200"
              />
              <line
                x1="1.5"
                y1="3"
                x2="1.5"
                y2="24"
                className="stroke-black dark:stroke-neutral-200"
              />
              <rect
                x="5"
                y="6"
                width="3"
                height="12"
                className="fill-black dark:fill-neutral-200"
              />
              <line
                x1="6.5"
                y1="2"
                x2="6.5"
                y2="20"
                className="stroke-black dark:stroke-neutral-200"
              />
              <rect
                x="10"
                y="4"
                width="3"
                height="10"
                className="fill-black dark:fill-neutral-200"
              />
              <line
                x1="11.5"
                y1="1"
                x2="11.5"
                y2="16"
                className="stroke-black dark:stroke-neutral-200"
              />
              <rect
                x="15"
                y="2"
                width="3"
                height="9"
                className="fill-black dark:fill-neutral-200"
              />
              <line
                x1="16.5"
                x2="16.5"
                y2="12"
                className="stroke-black dark:stroke-neutral-200"
              />
            </svg> */}
              <Link
                href="/"
                role="Logo"
                className="text-xl font-semibold dark:text-neutral-200"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <Image
                  src={SelfDevIcon}
                  alt="Society Logo"
                  width={55}
                  height={55}
                  className="rounded-full lg:w-[55px] lg:h-[55px] w-[45px] h-[45px]"
                />
              </Link>
          </div>
        </div>
        <ul className="flex items-center justify-around lg:gap-5 gap-2 dark:text-neutral-200">
          <li className="desktop__view_only">
            <Link className="" href={"/events"}>
              <span className="hover__link">
                Events <sup>(x3)</sup>
              </span>
            </Link>
          </li>
          <li className="desktop__view_only">
            <Link className="" href={"/about"} onClick={scrollToTop}>
              <span className="hover__link">About</span>
            </Link>
          </li>
          {/* <li className="desktop__view_only">
            <Link className="" href="/bootcamp">
              <span className="hover__link">Trading Bootcamp</span>
            </Link>
          </li> */}
          <li className="desktop__view_only">
            <Link className="" href={"/committee"} onClick={scrollToTop}>
              <span className="hover__link">Committee</span>
            </Link>
          </li>
          <button className="px-3 py-1 rounded-lg text-[#fafafa] bg-[#1F6752] hover__button">
            <Link
              href="https://my.exeterguild.com/groups/33WXC/self-development-society/memberships"
              legacyBehavior
            >
              <a target="_blank">Join us</a>
            </Link>
          </button>
          <p
            className="dark:text-neutral-200 hover:cursor-pointer min-w-[1.5rem] bg-neutral-100 dark:bg-neutral-800 rounded-lg p-2 hover__button"
            onClick={handleDarkClick}
          >
            <span className="sr-only sr-only-focusable">
              Click to change colour theme
            </span>
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="fill-neutral-200"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                  className="fill-neutral-200"
                ></path>{" "}
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="fill-black"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />{" "}
                <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z" />{" "}
              </svg>
            )}
          </p>
          <div
            className="text-xl mobile__view_only hover:cursor-pointer"
            role="Menu toggle"
            onClick={handleMenu}
          >
            <span className="sr-only sr-only-focusable">
              Click to toggle navigation menu
            </span>
            {menuOpen ? (
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-[0.5rem] text-xs">
                {/* <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="14.8491"
                    width="21"
                    height="2"
                    rx="0.75"
                    transform="rotate(-45 1 14.8491)"
                    className="fill-black dark:fill-neutral-200"
                  />
                  <rect
                    x="2.0459"
                    y="0.131348"
                    width="21"
                    height="2"
                    rx="0.75"
                    transform="rotate(45 2.0459 0.131348)"
                    className="fill-black dark:fill-neutral-200"
                  />
                </svg> */}
                Close
              </div>
            ) : (
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-[0.5rem] text-xs">
                {/* <svg
                  width="21"
                  height="12"
                  viewBox="0 0 21 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="21"
                    height="2"
                    rx="0.75"
                    className="fill-black dark:fill-neutral-200"
                  />
                  <rect
                    y="5"
                    width="21"
                    height="2"
                    rx="0.75"
                    className="fill-black dark:fill-neutral-200"
                  />
                  <rect
                    y="10"
                    width="21"
                    height="2"
                    rx="0.75"
                    className="fill-black dark:fill-neutral-200"
                  />
                </svg> */}
                Menu
              </div>
            )}
          </div>
        </ul>
      </anim.div>
      <anim.div
        className="text-neutral-100 flex ml-[2.5%] mr-[2.5%] flex-col items-start pl-[5%] justify-center absolute top-[8.5vh] xsm:top-[8.5vh] bg-[#1F6752] w-[95%]"
        role="Mobile Navigation Menu"
        variants={menuVariants}
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
      >
        {menuOpen && (
          <div>
            <ul>
              <anim.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={handleMenuClick}
                className="mt-5 text-4xl"
              >
                <Link href="/#events">
                  Events <sup>(x3)</sup> &#8594;
                </Link>
              </anim.li>
              <anim.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={handleMenuClick}
                className="mt-5 text-4xl"
              >
                <Link href="/about">About &#8594;</Link>
              </anim.li>
              {/* <anim.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={handleMenuClick}
                className="mt-5 mb-5 text-4xl"
              >
                <Link href="/bootcamp">Crypto Bootcamp &#8594;</Link>
              </anim.li> */}
              <anim.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={handleMenuClick}
                className="mt-5 mb-5 text-4xl"
              >
                <Link href="/committee">Committee &#8594;</Link>
              </anim.li>
            </ul>
          </div>
        )}
      </anim.div>
    </nav>
  );
};

export default Nav;
