interface MarqueeProps {}

const Marquee: React.FC<MarqueeProps> = () => {
  const marqueeOneData = ["STOCKS", "CRYPTO", "COMMODITIES", "OPTIONS", "FUTURES","STOCKS", "CRYPTO", "COMMODITIES", "OPTIONS", "FUTURES"];
  const marqueeTwoData = ["BITCOIN", "ETHEREUM", "S&P500", "NASDAQ", "NFT", "SOLANA","BITCOIN", "ETHEREUM", "S&P500", "NASDAQ", "NFT", "SOLANA"];

  return (
    <div className='lg:pt-20 pt-10 pb-10 overflow-hidden' aria-hidden="true">
      <ul id="marquee__top" className="shrink-0 min-w-full relative flex gap-2 justify-around">
        {marqueeOneData.map((word) => (
          <li className="dark:text-neutral-200 text-5xl lg:text-7xl xl:text-[7.25rem] ml-4 font-[200]" key={word}>{word}</li>
        ))}
        {marqueeTwoData.map((word) => (
          <li className="dark:text-neutral-200 text-5xl lg:text-7xl xl:text-[7.25rem] ml-4 font-[200]" key={word}>{word}</li>
        ))}
      </ul>
      <ul id="marquee__bottom" className="shrink-0 pt-2 min-w-full relative flex items-center gap-2 justify-around">
        {marqueeOneData.map((word) => (
          <li className="dark:text-neutral-200 text-5xl lg:text-7xl xl:text-[7.25rem] ml-4 font-[200]" key={word}>{word}</li>
        ))}
        {marqueeTwoData.map((word) => (
          <li className="dark:text-neutral-200 text-5xl lg:text-7xl xl:text-[7.25rem] ml-4 font-[200]" key={word}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;
