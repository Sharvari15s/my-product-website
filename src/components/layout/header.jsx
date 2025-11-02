import React, { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed w-full z-30 transition-all ${scrolled ? "backdrop-blur bg-white/70 shadow-md" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/aserts/logo.png" alt="logo" className="w-10 h-10 object-contain" />
          <span className="font-semibold text-lg">AuraPods Pro</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="hover:text-purple-600">Features</a>
          <a href="#specs" className="hover:text-purple-600">Specs</a>
          <a href="#tech" className="hover:text-purple-600">Technology</a>
          <button className="bg-purple-600 text-white rounded-full px-4 py-2 text-sm hover:opacity-90">Get Started</button>
        </nav>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu(){
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(v => !v)} className="p-2 rounded-md ring-1 ring-gray-200">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"/></svg>
      </button>
      {open && (
        <div className="absolute right-4 mt-14 w-48 bg-white rounded-lg shadow-lg p-4">
          <a className="block py-2" href="#features">Features</a>
          <a className="block py-2" href="#specs">Specs</a>
          <a className="block py-2" href="#tech">Technology</a>
          <button className="w-full mt-3 bg-purple-600 text-white py-2 rounded-full">Get Started</button>
        </div>
      )}
    </div>
  );
}
