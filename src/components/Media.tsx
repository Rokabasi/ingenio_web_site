import Image from "next/image";

type MediaBandProps = {
  src: string;
  alt: string;
  className?: string;
};

/** Bandeau image plein largeur pour ancrer le visuel entreprise. */
export function MediaBand({ src, alt, className = "" }: MediaBandProps) {
  return (
    <div className={`relative h-48 w-full overflow-hidden sm:h-64 lg:h-72 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/25" />
    </div>
  );
}

type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
};

export function MediaFrame({ src, alt, className = "" }: MediaFrameProps) {
  return (
    <div className={`relative aspect-[4/3] overflow-hidden bg-navy ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
