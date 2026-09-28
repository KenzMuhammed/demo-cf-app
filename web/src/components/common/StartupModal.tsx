import { useEffect, useState } from "react";

export default function StartupModal() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-event-modal", handler);
    return () => window.removeEventListener("open-event-modal", handler);
  }, []);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 backdrop-blur-md">
      <div className="flex w-full max-w-250 items-center justify-center p-25 max-md:h-[90vh]">
        <div className="relative md:w-full">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-sm text-white backdrop-blur-sm"
          >
            ✕
          </button>
          <img
            src="/event-01.webp"
            alt="Event"
            width={1536}
            height={1024}
            className="hidden w-full object-cover md:block"
          />
          <img
            src="/event-01-sm.webp"
            alt="Event"
            width={1536}
            height={1024}
            className="mx-auto w-full md:hidden"
          />
        </div>
      </div>
    </div>
  );
}
