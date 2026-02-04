"use client";

import { useState, useEffect } from "react";
import SlideMenu from "./SlideMenu";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function SidebarRight() {
  const [open, setOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Thin Right Vertical Bar - Hidden on mobile */}
      <aside
        className="hidden md:flex fixed right-0 top-0 h-full w-[60px] bg-body-bg flex-col items-center pt-8 z-40 shadow-[-6px_0_20px_var(--shadow-outer-dark)]"
      >
        {/* Hamburger Icon */}
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center text-text-secondary bg-body-bg shadow-[4px_4px_8px_var(--shadow-outer-dark),_-4px_-4px_8px_var(--shadow-outer-light)] hover:text-primary hover:shadow-[inset_2px_2px_4px_var(--shadow-inner-dark),inset_-2px_-2px_4px_var(--shadow-inner-light)] transition-all duration-300"
          onClick={() => setOpen(true)}
        >
          <i className="bi bi-list text-xl"></i>
        </button>

        {/* Theme Toggle */}
        <button
          className="mt-6 w-10 h-10 rounded-full flex items-center justify-center text-text-secondary bg-body-bg shadow-[4px_4px_8px_var(--shadow-outer-dark),_-4px_-4px_8px_var(--shadow-outer-light)] hover:text-primary hover:shadow-[inset_2px_2px_4px_var(--shadow-inner-dark),inset_-2px_-2px_4px_var(--shadow-inner-light)] transition-all duration-300"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {mounted && (resolvedTheme === "dark" ? <i className="bi bi-sun-fill"></i> : <i className="bi bi-moon-fill"></i>)}
        </button>

        {/* Rotated Page Title */}
        <div className="mt-auto mb-20 rotate-180 writing-vertical-rl text-xs font-bold tracking-[0.2em] text-text-secondary uppercase">
          {pathname === "/"
            ? "HOME"
            : pathname.startsWith("/experience")
            ? "EXPERIENCE"
            : pathname.split("/")[1]}
        </div>
      </aside>

      {/* Mobile Menu Button (Top Right) */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center text-primary bg-body-bg shadow-[4px_4px_8px_var(--shadow-outer-dark),_-4px_-4px_8px_var(--shadow-outer-light)] active:shadow-[inset_2px_2px_4px_var(--shadow-inner-dark),inset_-2px_-2px_4px_var(--shadow-inner-light)] transition-all duration-300"
        onClick={() => setOpen(true)}
      >
        <i className="bi bi-list text-xl"></i>
      </button>

      {/* Slide-out Menu */}
      {open && <SlideMenu close={() => setOpen(false)} />}
    </>
  );
}
