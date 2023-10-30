import { Navbar } from "@/components/navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ClientOnly from "@/components/ClientOnly";
import { Modal } from "@/components/modals";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "StayInn",
  description: "Where Every Stay Feels Like Home.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal actionLabel="Submit" title="Login Modal" isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
