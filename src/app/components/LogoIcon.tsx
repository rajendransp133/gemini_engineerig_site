import Image from "next/image";
import Link from "next/link";

const LogoIcon = () => {
  return (
    <Link href="/" className="flex items-start gap-1">
      <Image
        src="/GEMINI ENGINEERING WORKS.png"
        alt="Gemini Engineering Works Logo"
        width={300}
        height={300}
        className="object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
};

export default LogoIcon;
