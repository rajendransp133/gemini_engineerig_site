import Image from "next/image";
import Link from "next/link";

const LogoIcon = () => {
  return (
    <Link href="/" className="flex items-start gap-1 animate-logo-reveal">
      <Image
        src="/logo.webp"
        alt="Gemini Engineering Works Logo"
        width={300}
        height={300}
        priority
        className="object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
};

export default LogoIcon;
