import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { CartProvider } from "@/contexts/cart-context"
import { LanguageProvider } from "@/contexts/language-context"
import AIChatbot from "@/components/ai-chatbot"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "EasyConstruct - Your One Stop-Shop for Construction Materials",
  description:
    "Professional construction ecommerce platform for the Indian market. Find cement, paint, furniture, electrical, plumbing and more.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${sourceSans.variable} antialiased`}>
      <body className="font-sans">
        <LanguageProvider>
          <CartProvider>
            {children}
            <AIChatbot />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
