import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"
import Footer from '@/components/footer'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Int+",
  description: "Software Solutions For Your Business Growth",
  icons: {
    icon: "/icons/logo.svg",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        "min-h-screen font-sans antialiased bg-background",
        inter.className
      )}>
        <SiteHeader />
        <div className='min-h-screen'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

