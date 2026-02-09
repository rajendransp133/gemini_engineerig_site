"use client";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className = "", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-amber-500 hover:bg-amber-600 text-white text-sm px-4 py-2 rounded-md transition-colors duration-300  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
