import Image from "next/image";

const SubHeading = ({
  src,
  alt,
  width,
  height,
  leftText = "",
  rightText = "",
  icon = true,
}: {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  leftText?: string;
  rightText?: string;
  icon?: boolean;
}) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      {icon && (
        <Image
          src={src || ""}
          alt={alt || ""}
          width={width || 0}
          height={height || 0}
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
        <span style={{ color: "#343f52" }}>{leftText}</span>
        <span style={{ color: "#eba10e" }} className="italic">
          {rightText}
        </span>
      </h2>
    </div>
  );
};

export default SubHeading;
