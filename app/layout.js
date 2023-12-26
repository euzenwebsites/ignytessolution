import { Arima, Bitter, Bree_Serif, DM_Serif_Display, Inter, Merriweather, Mochiy_Pop_One, Modak, Montserrat, Noto_Serif, Noto_Serif_Armenian, Open_Sans, PT_Serif, Playfair_Display, Poppins, Roboto } from 'next/font/google'
import './globals.css'
import Footer from './components/ui/Footer'
import NavBarHeader from './components/ui/NavBarHeader'
import Animation from './components/ui/Animation'
import CustomCursor from './components/animations/CustomCursor'
import { Providers } from './providers'
const mont = Open_Sans({ subsets: ['latin'] })
// const mont = Montserrat({ subsets: ['latin'] })
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ignytes Solution',
  description: 'The software   solution company ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>
     
        <CustomCursor/>
        <Animation/>
      <NavBarHeader/>
      
        {children}
        <Footer/>
      

        </body>
    </html>
  )
}
