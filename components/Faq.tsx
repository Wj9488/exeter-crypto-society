"use client";

import { useState } from "react";

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggleFaq = (qIndex: any) => {
    if (selected == qIndex) {
      return setSelected(null);
    }

    setSelected(qIndex);
  };

  const faqData = [
    {
      question: "Do you only cover crypto trading?",
      answer:
        "No, the society should really be called the trading society as we welcome all types of traders. We're always looking to learn so whatever you trade you'll be welcomed.",
    },
    // {
    //   question: "?",
    //   answer:
    //     "While I prefer to stick to the pay as you go system that I work on, I would be happy to consider this on a case by case basis. Book your free call so we can discuss this further.",
    // },
    {
      question: "What are the trade nights all about?",
      answer:
        "This is where the society gets together every week for a period of 2 hours to discuss trades and sometimes actively trade.",
    },
    {
      question:
        "I don't know much about trading but I'm interested, can I still get involved?",
      answer:
        "Absolutely, if you're wanting to learn all about how to trade we have an 8 week course that we run every term to give you a good understanding of how it all works. Even if you're a beginner we'll happily welcome you, everyone starts somewhere.",
    },
    {
      question: "I have a great idea, how can I let you know about it?",
      answer:
        "Contact us on here or just come speak to one of the committee members at one of our events and we'll be happy to listen to you!",
    },
  ];

  return (
    <div className="pt-4 lg:pt-0">
      {faqData.map((item, qIndex) => (
        <div className="mt-4 xl:mt-3" key={qIndex}>
          <div
            className="flex items-center justify-between hover:cursor-pointer bg-[#1F6752] text-[#fafafa] rounded-xl py-3 px-4"
            onClick={() => toggleFaq(qIndex)}
          >
            <p className="font-base dark:text-neutral-200">{item.question}</p>
            <p className="font-base text-xl dark:text-neutral-200">
              {selected === qIndex ? "-" : "+"}
            </p>
          </div>
          <p
            className={
              selected === qIndex
                ? "h-fit max-h-96 mt-3 py-3 px-4 dark:text-neutral-200"
                : "max-h-0 overflow-hidden"
            }
          >
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
