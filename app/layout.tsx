import type { Metadata } from "next"
import { Courier_Prime } from "next/font/google"
import "./globals.css"

const courierPrime = Courier_Prime({ 
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-courier-prime',
})

export const metadata: Metadata = {
  title: "Ranjani Narayanan | PhD Candidate @ Georgia Tech",
  description: "Expanding how agents can become teammates, not just tools.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={courierPrime.variable}>
      <body className={courierPrime.className}>
        {children}
      </body>
    </html>
  )
}

