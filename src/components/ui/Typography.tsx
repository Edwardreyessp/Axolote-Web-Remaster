import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export function H1(props: Props) {
  const { children, className, ...rest } = props;

  return (
    <h1 className={cn("font-bold text-3xl xl:text-6xl", className)} {...rest}>
      {children}
    </h1>
  );
}

export function H2(props: Props) {
  const { children, className, ...rest } = props;

  return (
    <h2 className={cn("font-bold text-4xl xl:text-5xl", className)} {...rest}>
      {children}
    </h2>
  );
}

export function H3(props: Props) {
  const { children, className, ...rest } = props;

  return (
    <h3 className={cn("font-bold text-2xl", className)} {...rest}>
      {children}
    </h3>
  );
}

const contentVariants = cva("text-content-foreground", {
  variants: {
    variant: {
      extraLarge: "text-xl",
      large: "text-lg",
      medium: "text-base",
    },
  },
  defaultVariants: {
    variant: "medium",
  },
});

export function Content(
  props: Props & { variant?: "extraLarge" | "large" | "medium" }
) {
  const { children, className, variant, ...rest } = props;

  return (
    <p className={cn(contentVariants({ variant, className }))} {...rest}>
      {children}
    </p>
  );
}
