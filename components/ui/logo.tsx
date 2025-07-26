import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <img src="/images/logo.png" width={150} height={150} className="max-w-full fill-gray-300" alt="logo" />
      {/* <Image src={logo} alt="Cruip Logo" width={150} height={150} /> */}
    </Link>
  );
}
