import { cn } from "@/lib/utils";

type H1Props = {
  children: React.ReactNode;
  className?: string;
};

const H1 = ({ children, className }: H1Props) => {
  return (
    <h1
      className={cn("font-bold tracking-tight text-3xl lg:text-6xl", className)}
    >
      {children}
    </h1>
  );
};

export default H1;
