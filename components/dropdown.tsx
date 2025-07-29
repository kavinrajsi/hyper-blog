"use client";

import { useRef, useState } from "react";
import { Transition } from "@headlessui/react";

type DropdownProps = {
  children: React.ReactNode;
  title: React.ReactNode;
  isMega?: boolean;
  align?: "left" | "right" | "center";
};

export default function Dropdown({
  children,
  title,
  isMega = false,
  align = "left",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const alignClass = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 -translate-x-1/2",
  }[align];

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black"
      >
        {title}
        <svg
          className="h-4 w-4 transform transition-transform group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div
          className={`absolute z-50 mt-2 w-screen max-w-6xl px-4 sm:px-6 ${alignClass}`}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            {children}
          </div>
        </div>
      </Transition>
    </div>
  );
}
