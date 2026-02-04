import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SlideMenu({ close }: { close: () => void }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={close}
      />
      
      {/* Menu */}
      <div
        className="fixed right-0 top-0 h-full w-[260px] bg-body-bg text-body-text border-l border-card-border shadow-[-10px_0_30px_rgba(0,0,0,0.5)] animate-slideLeft z-50 flex flex-col"
      >
        <div className="flex justify-between items-center p-6 border-b border-card-border">
          <span className="font-bold text-xl text-primary">Menu</span>
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center text-text-secondary bg-body-bg shadow-[4px_4px_8px_var(--shadow-outer-dark),_-4px_-4px_8px_var(--shadow-outer-light)] active:shadow-[inset_2px_2px_4px_var(--shadow-inner-dark),inset_-2px_-2px_4px_var(--shadow-inner-light)] transition-all duration-300"
            onClick={close}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <nav className="px-6 py-8 space-y-6 text-lg flex-1 overflow-y-auto">
          <MenuItem href="/" label="Home" close={close} icon="bi-house-door" />
          <MenuItem href="/about" label="About" close={close} icon="bi-person" />
          <MenuItem href="/skills" label="Skills" close={close} icon="bi-code-slash" />
          <MenuItem href="/education" label="Education" close={close} icon="bi-mortarboard" />
          <MenuItem href="/experience" label="Experience" close={close} icon="bi-briefcase" />
          <MenuItem href="/projects" label="Projects" close={close} icon="bi-folder" />
        </nav>

        {/* Mobile Theme Toggle */}
        <div className="p-6 border-t border-card-border md:hidden">
          <button
            className="flex items-center justify-center gap-3 w-full py-3 rounded-xl text-text-secondary bg-body-bg shadow-[4px_4px_8px_var(--shadow-outer-dark),_-4px_-4px_8px_var(--shadow-outer-light)] active:shadow-[inset_2px_2px_4px_var(--shadow-inner-dark),inset_-2px_-2px_4px_var(--shadow-inner-light)] transition-all duration-300"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {mounted && (resolvedTheme === "dark" ? <i className="bi bi-sun-fill text-xl text-primary"></i> : <i className="bi bi-moon-fill text-xl text-primary"></i>)}
            <span className="font-semibold">{mounted && (resolvedTheme === "dark" ? "Light Mode" : "Dark Mode")}</span>
          </button>
        </div>
      </div>
    </>
  );
}

function MenuItem({
  label,
  href,
  close,
  icon
}: {
  label: string;
  href: string;
  close: () => void;
  icon: string;
}) {
  return (
    <Link
      href={href}
      onClick={close}
      className="flex items-center gap-4 py-2 text-text-secondary hover:text-primary transition-colors group"
    >
      <i className={`bi ${icon} text-xl group-hover:scale-110 transition-transform`}></i>
      <span className="font-medium">{label}</span>
    </Link>
  );
}
