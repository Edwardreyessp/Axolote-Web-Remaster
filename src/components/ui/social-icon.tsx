import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
};

export const SocialIcon = ({ children, href }: Props) => {
  return (
    <Link
      href={href}
      className="rounded bg-slate-200 hover:bg-slate-300 w-6 h-6 flex items-center justify-center"
    >
      {children}
    </Link>
  );
};
