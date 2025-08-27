import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
/**
 * relative container mx-0 flex h-full w-full items-center justify-center bg-stone-50 shadow-sm md:mx-auto
 *
 */
export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-stone-50 shadow-sm sm:mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}
