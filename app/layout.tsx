import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Superops - Spartans Sports Team",
  description: "Sport Is Our Second Language - Dominating every arena with the spirit of ancient warriors",
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sport Is Our Second Language - Dominating every arena with the spirit of ancient warriors" />
        <meta name="author" content="Superops" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />  
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=New+Rocker&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/badge-spartan.png"></link>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SuperOps – Arena of the Spartans" />
        <meta property="og:description" content="Sports is our second language - Dominating every arena with the spirit of ancient warriors" />
        <meta  property="og:image" content="/images/team-spartans.png" />
        <meta  property="og:url" content="https://spartans-sports-team.vercel.app" />
        <meta  property="og:site_name" content="SuperOps – Arena of the Spartans" />
        <meta  property="og:locale" content="en_US" />
        <meta  property="og:image:width" content="1200" />
        <meta  property="og:image:height" content="630" />
        <meta  property="og:image:alt" content="SuperOps – Arena of the Spartans" />
        <meta  property="og:image:type" content="image/png" />
        <meta  property="og:image:secure_url" content="https://spartans-sports-team.vercel.app/images/team-spartans.png" />
        <meta  property="og:image:width" content="1200" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
