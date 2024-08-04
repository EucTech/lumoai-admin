import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import Wrapper from "@/components/Wrapper";

const inter = Inter({ subsets: ["latin"] });

interface ToasterProps {
  position: "top-right" | "bottom-right" | "top-left" | "bottom-left";
  reverseOrder?: boolean;
  duration?: number;
}

const toastProps: ToasterProps = {
  position: "top-right",
  reverseOrder: true,
  duration: 4000,
};

export const metadata: Metadata = {
  title: "LumoAI",
  description: "Find your desired communities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Wrapper>{children}</Wrapper>
        </ThemeProvider>
        <Toaster {...toastProps} />
      </body>
    </html>
  );
}
