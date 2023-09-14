import Link from "next/link"

const ErrorPage = () => {
  return (
    <div className='min-h-[60vh] flex items-center justify-center'>
        <div>
            <h1 className='text-8xl mb-10 mt-10 text-center'>404</h1>
            <p className='font-[500] mb-10 text-center'>
                This page could not be found. <Link href={"/?user=got_lost"} className="underline">Go Home</Link>
            </p>
        </div>
    </div>
  )
}

export default ErrorPage