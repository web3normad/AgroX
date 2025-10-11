import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'AgriVault - Nigeria\'s Blockchain-Powered Commodity Exchange',
  description: 'Trade agricultural commodities with unprecedented transparency, security, and efficiency. Built on Hedera Hashgraph with USDC settlements.',
  keywords: ['agriculture', 'commodity trading', 'blockchain', 'Nigeria', 'farmers', 'USDC', 'Hedera'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}