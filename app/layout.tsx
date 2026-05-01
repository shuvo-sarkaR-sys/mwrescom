import type { Metadata } from 'next'
import './globals.css';

export const metadata: Metadata = {
    icons: {
    icon: '/logo-2.avif', // Point to a file in your /public folder
     
  },
  title: 'M.W Residential & Commercial | Snow Removal & Outdoor Services',
  description: 'Halifax\'s most trusted snow removal, ice control, and landscaping service. Residential and commercial. Available 24/7.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
