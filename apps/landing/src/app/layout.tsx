import type { Metadata } from 'next'
import './styles/globals.scss'
import clasess from './layout.module.scss'

export const metadata: Metadata = {
  title: 'Biowelt',
  description: 'Una nueva forma de administrar tu negocio, lean restaurant tu ventaja',
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={clasess.container}>{children}</body>
    </html>
  )
}
