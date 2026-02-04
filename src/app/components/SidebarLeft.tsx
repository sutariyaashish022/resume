"use client";

import Image from "next/image";
import LanguageCircle from "./LanguageCircle";
import { useState } from "react";

export default function SidebarLeft() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-[60] p-2 rounded-full bg-body-bg shadow-md text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`}></i>
      </button>

      {/* Sidebar Container */}
      <aside
        className={`
          fixed left-0 top-0 h-full w-[300px] bg-body-bg text-body-text overflow-y-auto flex flex-col px-8 py-7 
          shadow-[6px_0_20px_var(--shadow-outer-dark)] z-50
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Profile */}
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-body-bg shadow-[10px_10px_20px_var(--shadow-outer-dark),_-10px_-10px_20px_var(--shadow-outer-light)]">
            <Image
              src="/profile.png"
              alt="Ashish Sutariya profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h2 className="mt-6 text-xl font-bold text-primary">
            Ashish Sutariya
          </h2>
          <p className="text-text-secondary text-sm text-center mt-2">
            Senior Java Developer
          </p>
          
        </div>

        {/* Basic Info */}
        <div className="mt-1 space-y-1 text-xs">
          <Info label="Email" value="sutariyaashish3@gmail.com" />
          <Info label="Phone" value="646-339-1635" />
          <Info label="Location" value="Hartford, CT" />
        </div>

        <div className="my-4 h-0.5 rounded-full bg-body-bg shadow-[inset_2px_2px_4px_var(--shadow-inner-dark),inset_-2px_-2px_4px_var(--shadow-inner-light)]" />

        {/* Languages */}
        <div className="flex justify-between px-0">
          <LanguageCircle percent={100} label="English" />
          <LanguageCircle percent={100} label="Gujarati" />
          <LanguageCircle percent={95} label="Hindi" />
        </div>

        <div className="my-4 h-0.5 rounded-full bg-body-bg shadow-[inset_2px_2px_4px_var(--shadow-inner-dark),inset_-2px_-2px_4px_var(--shadow-inner-light)]" />

        {/* Core Skills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {["Java", "Spring Boot", "SQL", "OpenShift", "Kubernetes", "AWS", "Kafka", "Spark", "Hibernate", "Docker", "Jenkins", "PostgreSQL", "Oracle", "MongoDB"].map((skill) => (
            <SkillTag key={skill} name={skill} />
          ))}
        </div>

        <div className="my-4 h-0.5 rounded-full bg-body-bg shadow-[inset_2px_2px_4px_var(--shadow-inner-dark),inset_-2px_-2px_4px_var(--shadow-inner-light)]" />

        {/* Resume */}
        <a
          href="/Sutariya Ashish Resume.pdf"
          download="Sutariya Ashish Resume.pdf"
          className="mt-1 px-6 py-1 rounded-full text-primary font-bold flex items-center justify-center gap-3 uppercase tracking-wider text-sm bg-body-bg shadow-[6px_6px_12px_var(--shadow-outer-dark),-6px_-6px_12px_var(--shadow-outer-light)] hover:shadow-[inset_4px_4px_8px_var(--shadow-inner-dark),inset_-4px_-4px_8px_var(--shadow-inner-light)] active:scale-95 transition-all duration-300"
        >
          Download Resume <i className="bi bi-download"></i>
        </a>

        {/* Social Links */}
        <div className="mt-auto flex gap-6 justify-center pt-10 pb-4">
          <SocialButton href="https://linkedin.com/in/ashish-sutariya" icon="bi-linkedin" label="LinkedIn" />
        </div>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

/* ---------- Helper Components ---------- */

function SocialButton({ href, icon, label }: { href: string; icon: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 rounded-full text-text-secondary bg-body-bg shadow-[6px_6px_12px_var(--shadow-outer-dark),_-6px_-6px_12px_var(--shadow-outer-light)] hover:text-primary hover:shadow-[inset_4px_4px_8px_var(--shadow-inner-dark),inset_-4px_-4px_8px_var(--shadow-inner-light)] transition-all duration-300"
      aria-label={label}
    >
      <i className={`bi ${icon} text-xl`}></i>
    </a>
  );
}

function Info({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-center text-text-secondary text-sm">
      <span className="text-center font-semibold text-body-text">
        {value}
      </span>
    </div>
  );
}

function Tool({ text }: { text: string }) {
  return (
    <li className="flex gap-2 text-text-secondary">
      <span className="text-primary">✔</span> {text}
    </li>
  );
}

function SkillTag({ name }: { name: string }) {
  return (
    <span className="px-3 py-1 text-xs font-bold text-text-secondary bg-body-bg rounded-xl shadow-[4px_4px_8px_var(--shadow-outer-dark),_-4px_-4px_8px_var(--shadow-outer-light)] hover:shadow-[inset_2px_2px_4px_var(--shadow-inner-dark),inset_-2px_-2px_4px_var(--shadow-inner-light)] hover:text-primary transition-all duration-300 cursor-default">
      {name}
    </span>
  );
}
