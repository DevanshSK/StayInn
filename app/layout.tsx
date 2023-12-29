import { Navbar } from "@/components/navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ClientOnly from "@/components/ClientOnly";
import ToasterProvider from "@/app/providers/ToasterProvider";
import { LoginModal, RentModal, RegisterModal } from "@/components/modals/";
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
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
