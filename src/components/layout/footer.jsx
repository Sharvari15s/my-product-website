import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <img src="/src/assets/logo.png" alt="logo" className="w-10 h-10" />
            <span className="font-semibold">Aora AI Pro</span>
          </div>
          <p className="mt-4 text-sm text-gray-400">The future of premium wireless audio.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Features</li>
            <li>Specifications</li>
            <li>Technology</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Help Center</li>
            <li>Warranty</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">© 2025 AuraPods Pro. All rights reserved.</div>
    </footer>
  );
}
