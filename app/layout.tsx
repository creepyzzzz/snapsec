import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    display: 'swap',
    variable: '--font-space',
});

export const metadata: Metadata = {
    title: "Synapse Suite - Centralize your Application with Snapsec",
    description: "Synapse Suite is a unified security platform that centralizes your application security with six integrated modules, protecting the world's most innovative companies.",
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/favicon-32x32.png', type: 'image/png' },
            { url: '/favicon-16x16.png', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png' },
        ],
    },
    manifest: '/site.webmanifest',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${spaceGrotesk.className} antialiased overflow-x-hidden`}>{children}</body>
        </html>
    );
}
