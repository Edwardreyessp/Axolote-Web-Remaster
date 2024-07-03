import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="text-lg font-semibold text-content-foreground">
      <span className="text-primary">Axolote</span>
      <span className="text-content-foreground">Web</span>
    </Link>
  );
};
