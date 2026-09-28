import { ReactNode } from "react";

interface BadgeProps {
  text: string;
  icon?: ReactNode;
  color?: "success" | "danger" | "info" | "dark" | "secondary" | string;
  className?: string;
}

const colorClasses: Record<string, string> = {
  success: "bg-green-500/20 text-green-800",
  danger: "bg-red-500/10 text-red-800",
  info: "bg-slate-200 text-slate-700",
  secondary: "bg-secondary/50 text-white",
  dark: "bg-neutral-700 text-white",
};

export default function Badge({ text, icon, color = "info", className = "" }: BadgeProps) {
  const badgeColorClass = colorClasses[color] || color;

  return (
    <span
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-md ${badgeColorClass} ${className}`}
    >
      {icon && <span className="flex shrink-0 items-center">{icon}</span>}
      {text}
    </span>
  );
}
