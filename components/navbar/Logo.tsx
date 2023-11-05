"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {};

const Logo = (props: Props) => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      alt="StayInn Logo"
      height={100}
      width={100}
      src="/images/Logo.png"
      className="hidden md:block cursor-pointer"
    />
  );
};

export default Logo;
