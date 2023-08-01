import './globals.css'
import type { Metadata } from 'next'
import { NTR as NTRFont } from 'next/font/google'
import { Footer } from '@/components/navigation/footer'
import { NavigationBar } from '@/components/navigation/navigationBar'

const NTR = NTRFont({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'uhhhdetective.com',
    description: 'My Personal Website',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={NTR.className}>
                <NavigationBar />
                <main className="flex min-h-screen flex-col p-5 md:p-24">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
