import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import AuthProvider from "../context/AuthProvider";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

const js = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "inkognitOh!",
  description: "Deliver your messages staying inkognitOh!",
  icons: {
    icon: "/web-favicon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AuthProvider>
        <body className={js.className}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
