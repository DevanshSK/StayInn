import { Navbar } from "@/components/navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ClientOnly from "@/components/ClientOnly";
import { RegisterModal } from "@/components/modals";
import ToasterProvider from "@/app/providers/ToasterProvider";
import { LoginModal } from "@/components/modals/";
import getCurrentUser from "./actions/getCurrentUser";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "StayInn",
  description: "Where Every Stay Feels Like Home.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
