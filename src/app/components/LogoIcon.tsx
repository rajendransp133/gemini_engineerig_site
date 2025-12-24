import Image from "next/image";
import React from "react";
import Link from "next/link";

const LogoIcon = () => {
  return (
    <Link href="/" className="flex items-end gap-1 no-underline group">
      <div className="relative">
        <div className="absolute inset-0 bg-amber-500/20 rounded-xl blur-lg transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
        <Image
          src="/images/logo.svg"
          alt="Gemini Engineering Works Logo"
          width={40}
          height={40}
          className="object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col">
        <div className="text-base/4 tracking-[0.1em] font-medium transition-colors duration-300 text-amber-600">
          Gemini Engineering Works
        </div>
        <div className="text-sm font-bold tracking-tight transition-colors duration-300 italic">
          - Planting the seeds of light
        </div>
      </div>
    </Link>
  );
};

export default LogoIcon;
