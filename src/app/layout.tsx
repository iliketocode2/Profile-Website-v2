import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import BackgroundAnimation from '@/components/BackgroundAnimation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'William Goldman',
  description: 'Personal portfolio of William Goldman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundAnimation />
        <div className="min-h-screen pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <main className="mt-4 bg-white/90 dark:bg-gray-900/90 rounded-lg shadow p-8">
              <Navbar />
              {children}
            </main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}