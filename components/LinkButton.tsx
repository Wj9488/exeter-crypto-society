import Link from "next/link";
import { motion as anim, useAnimation } from "framer-motion";

interface LinkButtonProps {
  href: string;
  text: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, text }) => {
  
  const controls = useAnimation();

  function handleMouseEnter () {
    controls.start({ rotate: 45 });
  };

  function handleMouseLeave () {
    controls.start({ rotate: 0 });
  };
  return (
    <button className="hover__button px-4 mt-4 py-2 bg-neutral-900 dark:bg-neutral-200 dark:text-black rounded-lg text-white flex justify-around gap-2
    items-center"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      {/* <Link href={href} legacyBehavior><a target="_blank">{text}</a></Link> */}
      <Link href={href}>{text}</Link>
      <anim.svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={controls}
        initial={{ rotate: 0 }}
        transition={{ type: "linear" }}
      >
        <circle cx="11" cy="11" r="10.5" className="stroke-[#fafafa] dark:stroke-black" />
        <path
          d="M15.5 7C15.5 6.72386 15.2761 6.5 15 6.5L10.5 6.5C10.2239 6.5 10 6.72386 10 7C10 7.27614 10.2239 7.5 10.5 7.5L14.5 7.5L14.5 11.5C14.5 11.7761 14.7239 12 15 12C15.2761 12 15.5 11.7761 15.5 11.5L15.5 7ZM7.35355 15.3536L15.3536 7.35355L14.6464 6.64645L6.64645 14.6464L7.35355 15.3536Z"
          className="fill-[#fafafa] dark:fill-black"
        />
      </anim.svg>
    </button>
  );
};

export default LinkButton;
