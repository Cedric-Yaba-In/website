import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nguendap Bedjama Cédric - Architecte Cloud & Développeur Full-Stack',
  description: 'Portfolio professionnel de Nguendap Bedjama Cédric, Architecte Cloud et Développeur Full-Stack passionné par l\'innovation technologique au Cameroun.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}