import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MenuContextProvider from '@/context/MenuContext'
import MenuBar from '@/components/common/ui/menuBar/MenuBar'
import ThemeContextProvider from '@/context/ThemeContext'
import { Menu } from '@/hooks/useMenu.hook'
import Footer from '@/features/ui/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Juan Velozo | Front end Engineer',
  description: 'Juan Velozo is a software developer based in Buenos Aires, Argentina, who has more than 3 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <MenuContextProvider>
        <body className={`${inter.className} bg-stone-100 dark:bg-neutral-950 text-neutral-950 dark:text-slate-100 transition-colors duration-500 relative no-scrollbar min-h-screen overflow-auto`}>
          <ThemeContextProvider>
            <MenuBar />
            {children}
            <Menu />
            <Footer/>
          </ThemeContextProvider>
        </body>
      </MenuContextProvider>
    </html>
  )
}
