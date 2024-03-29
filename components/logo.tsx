import Link from "next/link";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Icon from '@/../../public/icon.svg'

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center justify-center gap-x-2 hidden md:flex">
        <p className={cn(
          "text-lg text-neutral-700 py-auto my-auto",
          headingFont.className,
          )}>
          TaskMe
        </p>
      </div>
    </Link>
  );
};
