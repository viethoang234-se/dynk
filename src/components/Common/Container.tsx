import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Bọc nội dung trong max-width canvas + padding ngang nhất quán toàn site. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-canvas px-6 md:px-10 lg:px-16", className)}>
      {children}
    </div>
  );
}
