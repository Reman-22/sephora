"use client";

import { useState, type ReactNode } from "react";
import { clsx } from "clsx";

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(items.filter((i) => i.defaultOpen).map((i) => i.id)),
  );

  const toggle = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="divide-y divide-neutral-200 border-y border-neutral-200">
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        const panelId = `panel-${item.id}`;
        const triggerId = `trigger-${item.id}`;
        return (
          <div key={item.id}>
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-3 py-5 text-left text-sm font-bold uppercase tracking-wider text-neutral-900 transition-colors hover:text-neutral-700 focus-visible:outline-2 focus-visible:outline-black"
              >
                <span>{item.title}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  className={clsx(
                    "h-4 w-4 shrink-0 transition-transform duration-[var(--duration-fast)]",
                    isOpen && "rotate-180",
                  )}
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={clsx(
                "grid transition-all duration-[var(--duration-fast)] ease-[var(--ease-out)]",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-6 text-sm leading-relaxed text-neutral-700">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
