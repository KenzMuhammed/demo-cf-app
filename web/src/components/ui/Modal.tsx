import clsx from "clsx";
import type { ReactNode } from "react";
import { CgClose } from "react-icons/cg";

type ModalSize = "sm" | "md" | "lg";
type ModalProps = {
  open: boolean;
  onClose: () => void;
  size?: ModalSize;
  children: ReactNode;
};
const sizeClasses: Record<ModalSize, string> = {
  sm: "max-w-md",
  md: "max-w-3xl",
  lg: "max-w-5xl",
};
export function Modal({ open, onClose, size = "md", children }: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={clsx(
          "relative flex max-h-[90vh] w-full flex-col overflow-hidden rounded-2xl bg-white text-slate-900 shadow-xl",
          sizeClasses[size]
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-4 z-10 text-white/70 hover:text-white lg:top-6"
        >
          {/* <X className="h-6 w-6" /> */}
          <CgClose size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}
export function ModalTitle({ children }: { children: ReactNode }) {
  return (
    <div className="bg-primary font-heading px-6 py-5 font-semibold text-white lg:text-lg xl:text-xl">
      {children}
    </div>
  );
}
export function ModalBody({ children }: { children: ReactNode }) {
  return <div className="flex-1 overflow-y-auto px-6 py-6">{children}</div>;
}
export function ModalFooter({ children }: { children: ReactNode }) {
  return <div className="border-t border-slate-200 px-6 py-5">{children}</div>;
}
