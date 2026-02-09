import Image from "next/image";
import Link from "next/link";

interface LogoIconProps {
  variant?: "navbar" | "footer";
}

const LogoIcon = ({ variant = "navbar" }: LogoIconProps) => {
  const sizeClasses =
    variant === "footer"
      ? "h-[80px] sm:h-[90px] md:h-[100px] max-w-[240px] sm:max-w-[260px] md:max-w-[280px]"
      : "h-[40px] sm:h-[50px] md:h-[60px] max-w-[240px] sm:max-w-[260px] md:max-w-[300px]";

  return (
    <Link href="/" className="flex items-start gap-1 animate-logo-reveal">
      <Image
        src="/logo.webp"
        alt="Gemini Engineering Works Logo"
        width={300}
        height={300}
        priority
        className={`object-contain relative z-10 transition-transform duration-300 group-hover:scale-105 w-auto ${sizeClasses}`}
      />
    </Link>
  );
};

export default LogoIcon;
