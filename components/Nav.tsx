"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion as anim } from "framer-motion";

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
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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
    <nav className="sticky top-0 z-10 bg-[#fafafa] dark:bg-[#070707] ">
      <div className="flex items-center justify-between pl-[2.5%] pr-[2.5%] min-h-[6vh]">
        <div className="flex items-center" onClick={handleMenuClick}>
          <div className="flex items-center gap-2">
            <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="5" width="3" height="16" className="fill-black dark:fill-neutral-200"/>
              <line x1="1.5" y1="3" x2="1.5" y2="24" className="stroke-black dark:stroke-neutral-200"/>
              <rect x="5" y="6" width="3" height="12" className="fill-black dark:fill-neutral-200"/>
              <line x1="6.5" y1="2" x2="6.5" y2="20" className="stroke-black dark:stroke-neutral-200"/>
              <rect x="10" y="4" width="3" height="10" className="fill-black dark:fill-neutral-200"/>
              <line x1="11.5" y1="1" x2="11.5" y2="16" className="stroke-black dark:stroke-neutral-200"/>
              <rect x="15" y="2" width="3" height="9" className="fill-black dark:fill-neutral-200"/>
              <line x1="16.5" x2="16.5" y2="12" className="stroke-black dark:stroke-neutral-200"/>
            </svg>
            <Link href="/" role="Logo" className="text-xl font-semibold dark:text-neutral-200">
              Exeter Crypto
            </Link>
          </div>
        </div>
        <ul className="flex items-center justify-around gap-5 dark:text-neutral-200">
          <li className="desktop__view_only">
            <Link className="" href="#events">
              <span className="hover__link">Events <sup>(x3)</sup></span> 
            </Link>
          </li>
          <li className="desktop__view_only">
            <Link className="" href="/about">
              <span className="hover__link">About</span> 
            </Link>
          </li>
          <li className="desktop__view_only">
            <Link className="" href="/course">
              <span className="hover__link">Trading Course</span> 
            </Link>
          </li>
          <li className="desktop__view_only">
            <Link className="" href="/committee">
              <span className="hover__link">Committee</span> 
            </Link>
          </li>
          <button className="px-3 py-1 bg-neutral-900 rounded-lg text-white dark:text-black dark:bg-neutral-200">
            <Link href="/">Join us</Link>
          </button>
          <p className="dark:text-neutral-200 hover:cursor-pointer min-w-[1.5rem]" onClick={handleDarkClick}>
            <span className="sr-only sr-only-focusable">
              Click to change colour theme
            </span>
            {darkMode ? (
              <span className="text-xl">&#9788;</span>
            ) : (
              <span className="text-xl">&#9790;</span>
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
              <span className="text-4xl dark:text-neutral-200">&#215;</span>
            ) : (
              <span className="text-2xl dark:text-neutral-200">&#9776;</span>
            )}
          </div>
        </ul>
      </div>
      <anim.div
        className="text-neutral-100 dark:text-black flex ml-[2.5%] mr-[2.5%] flex-col items-start pl-[5%] justify-center absolute top-[7.5vh] xsm:top-[7.5vh] dark:bg-neutral-300 bg-neutral-900 w-[95%]"
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
              <anim.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={handleMenuClick}
                className="mt-5 mb-5 text-4xl"
              >
                <Link href="/course">Trading Course &#8594;</Link>
              </anim.li>
              <anim.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
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
