import { useState, type ButtonHTMLAttributes, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface RippleSpot {
  id: number;
  x: number;
  y: number;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  children: ReactNode;
}

/**
 * Nút dùng chung toàn site. Hiệu ứng ripple xuất phát từ điểm click thật,
 * không phải animation cố định ở giữa nút — cảm giác phản hồi vật lý hơn.
 */
export function Button({
  variant = "primary",
  className,
  children,
  onClick,
  ...rest
}: ButtonProps) {
  const [ripples, setRipples] = useState<RippleSpot[]>([]);

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const spot: RippleSpot = {
      id: Date.now(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setRipples((prev) => [...prev, spot]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== spot.id));
    }, 650);

    onClick?.(e);
  }

  return (
    <button
      {...rest}
      onClick={handleClick}
      className={cn(
        "relative isolate overflow-hidden rounded-full px-7 py-3.5",
        "text-sm font-medium tracking-wide transition-all duration-300 ease-silk",
        variant === "primary" &&
          "bg-bone text-ink hover:bg-champagne-bright hover:-translate-y-0.5",
        variant === "ghost" &&
          "surface-glass text-bone hover:bg-white/10 hover:-translate-y-0.5",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden="true"
          style={{
            left: r.x,
            top: r.y,
            position: "absolute",
            width: 10,
            height: 10,
            marginLeft: -5,
            marginTop: -5,
            borderRadius: "50%",
            background: "currentColor",
            opacity: 0.35,
            animation: "dynk-ripple 650ms ease-out forwards",
            pointerEvents: "none",
          }}
        />
      ))}
    </button>
  );
}
