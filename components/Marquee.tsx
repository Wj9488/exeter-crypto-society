// interface MarqueeProps {}

// const Marquee: React.FC<MarqueeProps> = () => {
  // const marqueeOneData = ["STOCKS", "CRYPTO", "COMMODITIES", "OPTIONS", "FUTURES","STOCKS", "CRYPTO", "COMMODITIES", "OPTIONS", "FUTURES"];
//   const marqueeTwoData = ["BITCOIN", "ETHEREUM", "S&P500", "NASDAQ", "NFT", "SOLANA","BITCOIN", "ETHEREUM", "S&P500", "NASDAQ", "NFT", "SOLANA"];

//   return (
//     <div className='lg:pt-20 pt-10 pb-10 overflow-hidden' aria-hidden="true">
//       <ul id="marquee__top" className="shrink-0 min-w-full relative flex gap-2 justify-around">
//         {marqueeOneData.map((word, index) => (
//           <li className="dark:text-neutral-200 text-5xl lg:text-7xl xl:text-[7.25rem] ml-20 font-[200]" key={index}>{word}</li>
//         ))}
//         {marqueeTwoData.map((word, index) => (
//           <li className="dark:text-neutral-200 text-5xl lg:text-7xl xl:text-[7.25rem] ml-20 font-[200]" key={index}>{word}</li>
//         ))}
//       </ul>
//       <ul id="marquee__bottom" className="shrink-0 pt-2 min-w-full relative flex items-center gap-2 justify-around">
//         {marqueeOneData.map((word, index) => (
//           <li className="dark:text-neutral-200 text-5xl lg:text-7xl xl:text-[7.25rem] ml-20 font-[200]" key={index}>{word}</li>
//         ))}
//         {marqueeTwoData.map((word, index) => (
//           <li className="dark:text-neutral-200 text-5xl lg:text-7xl xl:text-[7.25rem] ml-20 font-[200]" key={index}>{word}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Marquee;

import Marquee from "react-fast-marquee"

interface MarqueeProps {
  listStyle: string
  arrayData: string[]
}

const MarqueeComponent = ({listStyle, arrayData}: MarqueeProps) => {
  return (
    <div className="mt-10 mb-10 lg:py-10 py-5">
      <Marquee
      speed={100}>
        <div className={`flex items-center justify-around overflow-hidden ${listStyle}`}>
          {arrayData.map((word, index) => (
            <li className="dark:text-neutral-200 text-3xl lg:text-4xl xl:text-5xl ml-20 font-[500]" key={index}>{word}</li>
          ))}
        </div>
      </Marquee>
    </div>
  )
}

export default MarqueeComponent


