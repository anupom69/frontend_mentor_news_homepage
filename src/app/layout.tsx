import {Inter} from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({subsets: ["latin"], weight: ["400", "700", "800"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} mx-auto antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
