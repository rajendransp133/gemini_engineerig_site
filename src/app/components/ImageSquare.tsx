import Image from "next/image";

const ImageSquare = ({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) => {
  return (
    <div className="relative">
      {/* Top-left decorative square */}
      <div
        className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 z-10"
        style={{ backgroundColor: "#eba10e" }}
      />

      {/* Main image container */}
      <div className="relative z-20">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-110   object-cover shadow-lg"
        />
      </div>

      {/* Bottom-right decorative square */}
      <div
        className="absolute -bottom-4 -right-4 w-12 h-12 md:w-16 md:h-16"
        style={{ backgroundColor: "#eba10e" }}
      />
    </div>
  );
};

export default ImageSquare;
