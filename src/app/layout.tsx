import './globals.css'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import { AuthProvider } from '../context/auth-context'
import { RecoilRootWrapper } from '@/config/RecoilRootWrapper'

const quicksand = Quicksand({ 
  weight: ["400", "500", "600", "700"],
  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UniExchange',
  description: 'Generated by create UniExchange app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <AuthProvider>
          <RecoilRootWrapper>
            {children}
          </RecoilRootWrapper>
        </AuthProvider>
      </body>
    </html>
  )
}
