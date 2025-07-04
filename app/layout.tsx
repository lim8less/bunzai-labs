import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Bunzai Labs - We Engineer Ideas into Reality',
  description: 'Modern freelance development firm specializing in web development, mobile apps, API design, and UI/UX consulting.',
  keywords: ['web development', 'mobile apps', 'API design', 'UI/UX', 'freelance', 'consulting'],
  authors: [{ name: 'Bunzai Labs' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#00D9FF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
