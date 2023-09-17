import './globals.css'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import PriceCarousel from "../components/PriceCarousel";

export const metadata = {
  title: 'Exeter Crypto Society',
  description: 'Exeter Crypto Society website',
  icons: {
      icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#f1fffa] dark:bg-[#08170e] overflow-x-hidden transition-colors duration-350' id='exeterCryptoSociety__appWrap_v1'>
        <Nav/>
        <PriceCarousel />
        {children}
        <Footer />
      </body>
    </html>
  )
}
