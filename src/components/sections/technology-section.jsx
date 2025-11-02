import React from "react";

const techs = [
  { title: "Seamless Connectivity", desc: "Bluetooth 5.3 with multipoint pairing keeps you connected." },
  { title: "Computational Audio", desc: "Advanced DSP and adaptive EQ for crystal-clear audio." },
  { title: "Ergonomic Design", desc: "Comfortable fit for all-day listening with secure seal." }
];

export default function Technology() {
  return (
    <section id="tech" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Advanced Audio Technology</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">Experience the perfect blend of sound quality, intelligence, and convenience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techs.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-3xl mb-4">🎧</div>
              <h3 className="font-semibold">{t.title}</h3>
              <p className="text-gray-600 mt-2">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
