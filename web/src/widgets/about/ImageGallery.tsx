import { useState, useEffect, useRef, useCallback } from "react";

interface ImageData {
  title: string;
  url: string;
}

const images: ImageData[] = [
  { title: "highlight 1", url: "/about/highlights/hl1.webp" },
  { title: "highlight 2", url: "/about/highlights/hl2.webp" },
  { title: "highlight 3", url: "/about/highlights/hl3.webp" },
  { title: "highlight 4", url: "/about/highlights/hl4.webp" },
  { title: "highlight 5", url: "/about/highlights/hl6.webp" },
  { title: "highlight 6", url: "/about/highlights/hl10.webp" },
  { title: "highlight 7", url: "/about/highlights/hl8.webp" },
  { title: "highlight 8", url: "/about/highlights/hl9.webp" },
];

export function ImageGallery() {
  const [active, setActive] = useState(0);

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) clearTimeout(autoplayRef.current);

    autoplayRef.current = setTimeout(() => {
      setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3500);
  }, []);

  useEffect(() => {
    resetAutoplay();

    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
    };
  }, [active, resetAutoplay]);

  const next = () => {
    setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goTo = (i: number) => {
    setActive(i);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;

    const distance = startX.current - e.clientX;

    if (distance > 60) next();
    else if (distance < -60) prev();

    isDragging.current = false;
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div
        className="relative h-65 w-full touch-pan-y select-none sm:h-80 md:h-95"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => (isDragging.current = false)}
      >
        {images.map((img, i) => {
          const offset = i - active;

          if (Math.abs(offset) > 2) return null;

          return (
            <div
              key={i}
              onClick={() => {
                if (offset === 1) next();
                else if (offset === -1) prev();
                else goTo(i);
              }}
              className="absolute top-1/2 left-1/2 cursor-pointer transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `
                  translate(-50%, -50%)
                  translateX(${offset * 70}px)
                  scale(${1 - Math.abs(offset) * 0.12})
                `,
                zIndex: 10 - Math.abs(offset),
              }}
            >
              <div
                className={`relative aspect-video w-[320px] overflow-hidden rounded-2xl border bg-white/5 shadow-lg backdrop-blur-xl transition-all duration-500 sm:w-105 md:w-130 ${
                  active === i
                    ? "border-primary/70 scale-105"
                    : "border-white/10 hover:border-white/40"
                }`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="absolute inset-0 h-full w-full object-contain"
                  sizes="(max-width:768px) 100vw, 900px"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              active === i ? "bg-primary w-12" : "w-3 bg-gray-500 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
