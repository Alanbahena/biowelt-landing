import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './styles/globals.scss'
import clasess from './layout.module.scss'

export const metadata: Metadata = {
  title: 'Biowelt',
  description: 'Una nueva forma de administrar tu negocio, lean restaurant tu ventaja',
}

const nunito = Nunito({
  weight: ['300', '600', '700', '800'],
  display: 'swap',
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={clasess.container} style={nunito.style}>
        {children}
      </body>
    </html>
  )
}
