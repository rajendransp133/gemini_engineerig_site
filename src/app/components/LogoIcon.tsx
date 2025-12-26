import Image from "next/image";
import React from "react";
import Link from "next/link";

const LogoIcon = () => {
  return (
    <Link href="/" className="flex items-start gap-1">
      <Image
        src="/images/logo.svg"
        alt="Gemini Engineering Works Logo"
        width={40}
        height={40}
        className="object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex flex-col gap-0.5 ">
        <div className="text-base/4 tracking-[0.1em] font-medium transition-colors duration-300 text-amber-600 pt-1">
          Gemini Engineering Works
        </div>
        <div className="text-base font-bold tracking-wide transition-colors duration-300 quintessential-regular italic">
          - Planting the seeds of light
        </div>
      </div>
    </Link>
  );
};

export default LogoIcon;
