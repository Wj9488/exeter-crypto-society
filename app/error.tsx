"use client";

import Link from "next/link"

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
  <main className="min-h-[100svh] flex items-center justify-center">
    <section className="ml-[2.5%] mr-[2.5%]">
        <h1 className="text-xl dark:text-neutral-200 text-center">{error.message}</h1>
        <div className="flex items-center justify-center gap-5 mt-5">
            <button className="py-1 px-2 border rounded-lg text-sm bg-neutral-200 text-neutral-900 border-neutral-500" onClick={reset}>Try again &#10226;</button>
            <button className="py-1 px-2 border rounded-lg text-sm bg-neutral-900 text-neutral-100"><Link href="/">Home page</Link></button>
        </div>
    </section>
  </main>
  )
};

export default error;
