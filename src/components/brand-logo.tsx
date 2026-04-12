import Image from "next/image";

type BrandLogoProps = {
  compact?: boolean;
  small?: boolean;
};

export function BrandLogo({ compact = false, small = false }: BrandLogoProps) {
  const width = small ? 108 : compact ? 132 : 184;
  const height = small ? 38 : compact ? 46 : 66;

  return (
    <div className="flex items-center">
      <Image
        src="/logo.png"
        alt="Virtus"
        width={width}
        height={height}
        className="h-auto w-auto object-contain"
        priority={compact}
      />
    </div>
  );
}
