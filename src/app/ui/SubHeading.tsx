import Image from "next/image";

const SubHeading = ({
  src,
  alt,
  width,
  height,
  leftText = "",
  rightText = "",
  icon = true,
  noWrap = false,
}: {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  leftText?: string;
  rightText?: string;
  icon?: boolean;
  noWrap?: boolean;
}) => {
  return (
    <div className="flex items-center gap-4 mb-6 items-center justify-center">
      {icon && (
        <Image
          src={src || ""}
          alt={alt || ""}
          width={width || 0}
          height={height || 0}
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
      )}
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl font-semibold ${
          noWrap
            ? "flex flex-col items-start gap-2 justify-start w-full"
            : " flex items-center gap-2"
        }`}
      >
        <div style={{ color: "#343f52" }}>{leftText}</div>
        <div style={{ color: "#eba10e" }} className="whitespace-nowrap">
          {rightText}
        </div>
      </h2>
    </div>
  );
};

export default SubHeading;
