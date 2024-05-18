import RainbowKitAndWagmiProvider from "@/app/RainbowKitAndWagmiProvider";

import "./globals.css"
import {Inter as FontSans} from "next/font/google"

import {cn} from "@/lib/utils"
import Layout from "@/components/shared/Layout";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata = {
    title: "WishList DApp",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head />
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}
        >
        <RainbowKitAndWagmiProvider>
            <Layout>
                {children}
            </Layout>
        </RainbowKitAndWagmiProvider>
        </body>
        </html>
    );
}
