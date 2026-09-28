import { useEffect } from "react";
import { FiX, FiCheckCircle, FiAlertCircle, FiAlertTriangle, FiInfo } from "react-icons/fi";
import { IconType } from "react-icons";

export type ToastVariant = "success" | "danger" | "error" | "warning" | "info" | "default";

interface ToastProps {
  show: boolean;
  onClose: () => void;
  icon?: IconType;
  title?: string;
  description: string;
  duration?: number;
  variant?: ToastVariant;
}

const variantConfig: Record<
  ToastVariant,
  { wrapper: string; icon: React.ReactNode; titleCls: string; descCls: string; barColor: string }
> = {
  success: {
    wrapper: "border-green-200 bg-white shadow-lg shadow-green-100/60",
    icon: <FiCheckCircle className="h-5 w-5 text-green-500" />,
    titleCls: "text-green-800",
    descCls: "text-green-700",
    barColor: "#22c55e",
  },
  danger: {
    wrapper: "border-red-200 bg-white shadow-lg shadow-red-100/60",
    icon: <FiAlertCircle className="h-5 w-5 text-red-500" />,
    titleCls: "text-red-800",
    descCls: "text-red-700",
    barColor: "#ef4444",
  },
  error: {
    wrapper: "border-red-200 bg-white shadow-lg shadow-red-100/60",
    icon: <FiAlertCircle className="h-5 w-5 text-red-500" />,
    titleCls: "text-red-800",
    descCls: "text-red-700",
    barColor: "#ef4444",
  },
  warning: {
    wrapper: "border-amber-200 bg-white shadow-lg shadow-amber-100/60",
    icon: <FiAlertTriangle className="h-5 w-5 text-amber-500" />,
    titleCls: "text-amber-800",
    descCls: "text-amber-700",
    barColor: "#f59e0b",
  },
  info: {
    wrapper: "border-blue-200 bg-white shadow-lg shadow-blue-100/60",
    icon: <FiInfo className="h-5 w-5 text-blue-500" />,
    titleCls: "text-blue-800",
    descCls: "text-blue-700",
    barColor: "#3b82f6",
  },
  default: {
    wrapper: "border-slate-200 bg-white shadow-lg shadow-slate-100/60",
    icon: <FiInfo className="h-5 w-5 text-slate-500" />,
    titleCls: "text-slate-800",
    descCls: "text-slate-700",
    barColor: "#64748b",
  },
};

export default function Toast({
  show,
  onClose,
  icon: IconOverride,
  title,
  description,
  duration = 4000,
  variant = "success",
}: ToastProps) {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  if (!show) return null;

  const config = variantConfig[variant];

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`fixed top-6 right-6 z-[9999] w-80 rounded-2xl border p-4 ${config.wrapper}`}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0">
          {IconOverride ? (
            <IconOverride className="h-5 w-5" style={{ color: config.barColor }} />
          ) : (
            config.icon
          )}
        </span>

        <div className="min-w-0 flex-1">
          {title && (
            <h4 className={`text-sm leading-tight font-semibold ${config.titleCls}`}>{title}</h4>
          )}
          <p className={`text-sm leading-relaxed ${title ? "mt-0.5" : ""} ${config.descCls}`}>
            {description}
          </p>
        </div>

        <button
          onClick={onClose}
          className="rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
          aria-label="Close notification"
        >
          <FiX className="h-4 w-4" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full"
          style={{
            backgroundColor: config.barColor,
            width: "100%",
            animation: `toast-shrink ${duration}ms linear forwards`,
          }}
        />
      </div>
    </div>
  );
}
