import Link from "next/link";
import Image from "next/image";
import backArrow from "@/app/clients/assets/back-arrow.svg"

interface HeaderProps {
  linkHref: string;
  text: string;
}

export default function Header({ linkHref, text}: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-2">
      <Link href={linkHref}>
        <Image src={backArrow} alt={"Back arrow"} className="mr-2 cursor-pointer" />
      </Link>
      <h2 className="text-3xl text-center flex-grow">{text}</h2>
      <div className="w-[24px]"></div>
    </header>
  );
}