// app/layout.tsx

import { ThemeProvider } from "next-themes"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.scheddy.us"
  ),
  title: "Scheddy",
  description: "Vendor scheduling and job management platform",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (

    <html
      lang="en"
      suppressHydrationWarning
      className={inter.variable}
    >

      <body
        className="
        min-h-screen
        bg-background
        text-foreground
        font-sans
        antialiased
        transition-colors
        duration-300
        "
      >

        <ThemeProvider

          attribute="class"

          defaultTheme="dark"

          enableSystem

          disableTransitionOnChange

        >

          <div className="min-h-screen">

            {children}

          </div>

        </ThemeProvider>


      </body>

    </html>

  )

}