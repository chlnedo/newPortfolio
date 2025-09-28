import type { Metadata } from "next";
import Script from "next/script"; 
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L7DPVTVLGZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L7DPVTVLGZ');
          `}
        </Script>
      </body>
    </html>
  );
}

