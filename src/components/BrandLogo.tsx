import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  priority?: boolean;
  className?: string;
  /** light = logo on dark header/footer (default white plate) */
  variant?: "light" | "dark";
};

export function BrandLogo({
  href = "/",
  priority = false,
  className = "",
  variant = "light",
}: BrandLogoProps) {
  const plate =
    variant === "light"
      ? "bg-white shadow-[0_2px_10px_rgba(0,0,0,0.18)]"
      : "bg-white border border-[var(--line)]";

  const content = (
    <span
      className={`inline-flex items-center rounded-sm px-2 py-1.5 sm:px-2.5 sm:py-2 ${plate} ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Ingenio Consulting"
        width={60}
        height={30}
        priority={priority}
        className="h-8 w-auto object-contain object-left sm:h-10 lg:h-11"
      />
    </span>
  );

  if (!href) return content;
  return (
    <Link href={href} className="inline-flex shrink-0" aria-label="Ingenio Consulting — Accueil">
      {content}
    </Link>
  );
}
