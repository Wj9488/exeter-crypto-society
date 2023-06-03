"use client";

import {motion as anim} from "framer-motion"
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

interface CryptoData {
  id: string;
  symbol: string;
  price_change_percentage_24h: number;
}

interface CustomError extends Error {
  message: string;
}

const fetchCryptoData = async (): Promise<CryptoData[]> => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&price_change_percentage=24h"
  );
  const data = await response.json();
  return data;
};
interface CarouselProps {
  carbg: string
}
const PriceCarousel = ({carbg} : CarouselProps): JSX.Element => {
  const { data, isLoading, error } = useQuery<CryptoData[], CustomError>(
    "cryptoData",
    fetchCryptoData,
    {
      staleTime: 300000, // Cache for 5 minutes
    }
  );

  if (isLoading) {
    return <div className={`min-h-[4vh] bg-[${carbg}]`}></div>;
  }

  if (error) {
    console.log(error.message)
    return <></>;
  }

  return (
    <anim.div className={`overflow-x-hidden p-2 min-h-[4vh] flex items-center bg-[${carbg}]`}
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    transition={{ delay: 0.05 }}>
        <div className="price__carousel price__carousel_animation">
        {data?.map((crypto) => (
            <div key={crypto.id} className="price__carousel_item">
            <span className="uppercase dark:text-[#fafafa]">{crypto.symbol} </span>
            <span
                className={
                crypto.price_change_percentage_24h < 0
                    ? "px-3 py-1 dark:text-red-400 text-[#EF476F] rounded-2xl"
                    : "px-3 py-1 dark:text-emerald-400 text-emerald-500 rounded-2xl"
                }
            >
                {crypto.price_change_percentage_24h.toFixed(2)}%
            </span>
            </div>
        ))}
        </div>
    </anim.div>
  );
};

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <PriceCarousel carbg=""/>
      </>
    </QueryClientProvider>
  );
}
