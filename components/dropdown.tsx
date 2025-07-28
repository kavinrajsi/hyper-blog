"use client";

import { useRef, useState } from "react";
import { Transition } from "@headlessui/react";

type DropdownProps = {
  children: React.ReactNode;
  title: React.ReactNode;
  isMega?: boolean;
  align?: 'left' | 'right' | 'center';
};



export default function Dropdown({ children, title, isMega = false, align = 'left' }: DropdownProps) {
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const handleFocusOut = (e: React.FocusEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.relatedTarget as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  return (
    <li
      className="group relative flex items-center gap-0.5 px-3 py-1"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <span className="flex cursor-pointer items-center transition group-hover:text-[#ED811F]">
        {title}
      </span>
      <button
        className="shrink-0 p-1"
        aria-expanded={dropdownOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Show submenu for "{title}"</span>
        <svg
          className="h-3 w-3 fill-[#ED811F]"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
        >
          <path d="m1.06.19 3.5 3.5 3.5-3.5 1.061 1.06-4.56 4.56L0 1.25 1.06.19Z" />
        </svg>
      </button>
      <span className={`absolute ${align === 'center' ? 'left-1/2 -translate-x-1/2' : align === 'right' ? 'right-0' : 'left-0'} top-full origin-top-left`}>        
        <Transition
          ref={dropdownRef}
          show={dropdownOpen}
          as="ul"
          className={`
            relative mt-5 
            ${isMega ? 'w-screen max-w-6xl' : 'w-48'} 
            rounded-lg bg-white p-4 shadow-xl 
            backdrop-blur-sm 
            before:pointer-events-none before:absolute before:inset-0 
            before:rounded-[inherit] before:border before:border-gray-200/20
            transform transition-all duration-200 ease-out 
            data-[enter]:data-[closed]:-translate-y-2 data-[closed]:opacity-0
          `}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200 transform"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-2"
          onBlur={handleFocusOut}
        >
          {children}
        </Transition>
      </span>
    </li>
  );
}
