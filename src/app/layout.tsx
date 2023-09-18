import { Menu, MenuButton } from '@/hooks/useMenu.hook'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MenuContextProvider from '@/context/MenuContext'

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
        <body className={`${inter.className} bg-stone-100 dark:bg-neutral-950 text-neutral-950 dark:text-slate-100 relative`}>
          {children}
          <MenuButton />
          <Menu />
        </body>
      </MenuContextProvider>
    </html>
  )
}
