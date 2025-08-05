import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Provider as ChakraThemeProvider } from "@/components/ui/provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Achados e Perdidos",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ChakraThemeProvider forcedTheme="light">
          {children}
        </ChakraThemeProvider>
      </body>
    </html>
  );
}
