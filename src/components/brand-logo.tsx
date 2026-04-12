import Image from "next/image";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  const width = compact ? 150 : 210;
  const height = compact ? 54 : 76;

  return (
    <div className="flex items-center">
      <Image
        src="/logo.png"
        alt="Virtus"
        width={width}
        height={height}
        className="h-auto w-auto"
        priority={compact}
      />
    </div>
  );
}
