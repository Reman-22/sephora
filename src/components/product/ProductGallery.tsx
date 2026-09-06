"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import type { ProductMedia } from "@/lib/product-data";

interface ProductGalleryProps {
  media: ProductMedia[];
  activeImage?: string;
}

export function ProductGallery({ media, activeImage }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const imageRef = useRef<HTMLDivElement>(null);

  const currentMedia = activeImage
    ? media.find((m) => m.url === activeImage) ?? media[activeIndex]
    : media[activeIndex];

  const handlePrev = () => {
    setActiveIndex((i) => (i === 0 ? media.length - 1 : i - 1));
  };

  const handleNext = () => {
    setActiveIndex((i) => (i === media.length - 1 ? 0 : i + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <div className="flex gap-3 md:gap-5">
      {/* Vertical Thumbnails */}
      <div className="flex flex-col gap-2 overflow-y-auto max-h-[600px] no-scrollbar pr-1">
        {media.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`View image ${index + 1} of ${media.length}`}
            aria-current={index === activeIndex && !activeImage}
            className={clsx(
              "relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 transition-all",
              index === activeIndex && !activeImage
                ? "border-black scale-105"
                : "border-transparent hover:border-neutral-300",
            )}
          >
            <Image
              src={item.url}
              alt={item.alt}
              fill
              sizes="64px"
              className="object-cover"
            />
            {item.type === "video" && (
              <span
                aria-hidden
                className="absolute inset-0 flex items-center justify-center bg-black/30"
              >
                <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            )}
          </button>
        ))}

        {/* See All button */}
        <button
          type="button"
          className="mt-2 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-[10px] font-bold uppercase tracking-wider text-neutral-900 transition-colors hover:border-black"
          aria-label={`See all ${media.length} images and videos`}
        >
          See all {media.length}
        </button>
      </div>

      {/* Main Image Viewport */}
      <div className="flex-1">
        <div
          ref={imageRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Product images"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          onMouseEnter={() => setZoomed(true)}
          onMouseLeave={() => setZoomed(false)}
          onMouseMove={handleMouseMove}
          className="relative aspect-square w-full overflow-hidden rounded-xl bg-white cursor-zoom-in focus:outline-2 focus:outline-black"
        >
          <Image
            src={currentMedia.url}
            alt={currentMedia.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className={clsx(
              "object-contain transition-transform duration-500 ease-out",
              zoomed && "scale-[1.8]",
            )}
            style={
              zoomed
                ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` }
                : undefined
            }
          />

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-md transition-all hover:bg-white hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-md transition-all hover:bg-white hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900 shadow-md">
            {activeIndex + 1} / {media.length}
          </div>

          {/* Zoom hint */}
          {!zoomed && (
            <div className="pointer-events-none absolute top-4 right-4 rounded-full bg-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
              Hover to zoom
            </div>
          )}
        </div>

        {/* Dot indicators */}
        <div className="mt-4 flex items-center justify-center gap-1.5" aria-hidden>
          {media.map((_, index) => (
            <span
              key={index}
              className={clsx(
                "h-1.5 rounded-full transition-all",
                index === activeIndex
                  ? "w-8 bg-black"
                  : "w-1.5 bg-neutral-300",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
