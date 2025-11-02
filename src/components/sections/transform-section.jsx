import React from "react";

export default function TransformSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-white to-purple-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl overflow-hidden relative">
          <img src="/aserts/contact.png" alt="transform" className="w-full h-56 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-transparent flex items-center">
            <div className="max-w-3xl px-8 py-8 text-white">
              <h3 className="text-2xl font-bold">Transform Your Audio Experience</h3>
              <p className="mt-2 text-sm">With industry-leading ANC and adaptive EQ technology, AuraPods Pro delivers studio-quality sound in a compact package.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
