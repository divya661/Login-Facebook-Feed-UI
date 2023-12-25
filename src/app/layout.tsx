import type { Metadata } from 'next'
import '../styles/global.css';

export const metadata: Metadata = {
  title: 'Login Feed',
  description: 'Login & Feed UI - Atlys',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
