import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "inkognitOh!",
  description: "This is the user dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
