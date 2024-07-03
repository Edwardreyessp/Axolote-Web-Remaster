import { Content } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";

export const Banner = () => {
  return (
    <section className="bg-gradient-to-tr from-primary to-indigo-800 text-primary-foreground px-5 py-8 xl:p-20 flex flex-col items-center gap-5 text-center">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-4xl xl:text-6xl font-bold">
          Build faster websites
        </h2>
        <Content className="text-primary-foreground">
          Pull content from anywhere and serve it fast with Astro&apos;s
          next-gen island architecture.
        </Content>
      </div>
      <Button
        variant="outline"
        className="rounded-full text-primary hover:text-primary"
      >
        Sign up for a 14-day Trial
      </Button>
    </section>
  );
};
