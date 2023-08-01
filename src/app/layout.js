import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'MTS Travel',
  description: 'MTS Travel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <Script
          src="/data.js?1"
          strategy="beforeInteractive"
        />
      </head>
      <body className="font-sans antialiased text-black max-w-screen overflow-x-hidden">{children}</body>
    </html>
  )
}
