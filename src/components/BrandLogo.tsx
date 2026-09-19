import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  priority?: boolean;
  className?: string;
  /** light = logo on dark header/footer (default white plate) */
  variant?: "light" | "dark";
  size?: "header" | "footer";
};

const sizeConfig = {
  header: {
    plate: "px-1.5 py-1 sm:px-2.5 sm:py-1.5",
    image: "h-7 w-auto max-w-[120px] sm:h-10 sm:max-w-[168px]",
  },
  footer: {
    plate: "px-2 py-1.5 sm:px-3 sm:py-2.5",
    image: "h-9 w-auto max-w-[150px] sm:h-12 sm:max-w-[200px]",
  },
} as const;

export function BrandLogo({
  href = "/",
  priority = false,
  className = "",
  variant = "light",
  size = "header",
}: BrandLogoProps) {
  const config = sizeConfig[size];
  const plate =
    variant === "light"
      ? "bg-white shadow-[0_2px_10px_rgba(0,0,0,0.18)]"
      : "bg-white border border-[var(--line)]";

  const content = (
    <span
      className={`inline-flex items-center rounded-sm ${config.plate} ${plate} ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Ingenio Consulting"
        width={100}
        height={100}
        priority={priority}
        className={`object-contain object-left ${config.image}`}
      />
    </span>
  );

  if (!href) return content;
  return (
    <Link
      href={href}
      className="inline-flex shrink-0"
      aria-label="Ingenio Consulting — Accueil"
    >
      {content}
    </Link>
  );
}
