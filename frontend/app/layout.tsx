"use client";
import MyContextProvider from "@/context/MyContextProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { CssBaseline } from "../lib/mui";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { cache } from "@emotion/css";
import { theme } from "@/theme";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Sugar Cosmetics Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <CacheProvider value={cache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MyContextProvider>{children}</MyContextProvider>
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
