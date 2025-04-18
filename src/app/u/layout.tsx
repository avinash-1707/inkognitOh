import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Drop your message 🤫",
  description: "send the message to your favourite person here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
