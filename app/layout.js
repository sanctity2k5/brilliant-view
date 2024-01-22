import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brilliant View Ventures',
  description: 'Brilliant View Ventures is a highly skilled and proficient company specializing in Information Technology and Communication solutions. With expertise in a diverse range of services, the company excels in the installation and maintenance of advanced communication equipment, including intercom systems and security cameras.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
