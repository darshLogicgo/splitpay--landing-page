import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QueryProvider from "@/query-providers/QueryProvider";

export const metadata: Metadata = {
  title: "SplitPay – Group Expenses",
  description:
    "SplitPay is a simple and easy way to split expenses with your friends and family.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <QueryProvider>{children}</QueryProvider>
        <Footer />
      </body>
    </html>
  );
}
