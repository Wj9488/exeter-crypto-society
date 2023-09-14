import './globals.css'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import PriceCarousel from "../components/PriceCarousel";

export const metadata = {
  title: 'Exeter Crypto Society',
  description: 'Exeter Crypto Society website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#fafafa] dark:bg-[#1b1b1b] overflow-x-hidden transition-colors duration-250' id='exeterCryptoSociety__appWrap_v1'>
        <Nav/>
        <PriceCarousel />
        {children}
        <Footer />
      </body>
    </html>
  )
}
