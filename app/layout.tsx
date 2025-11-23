import type { Metadata } from "next";
import "./globals.css";
import { Georama } from "next/font/google";

const georama = Georama({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-georama",
});

export const metadata: Metadata = {
  title: "Both's Portfolio",
  description: "Porfolio",
  icons: {
    icon: "/macbook.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning suppressHydrationWarning>
      <body className={` ${georama.variable} antialiased`}>{children}</body>
    </html>
  );
}
