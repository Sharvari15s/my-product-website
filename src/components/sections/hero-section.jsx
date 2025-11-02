import React from "react";
import Button from "../ui/button";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="text-sm uppercase text-purple-600 font-semibold">Next Generation Audio</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">Premium Wireless Earbuds</h1>
          <p className="text-gray-600 max-w-xl">Experience immersive sound quality with advanced active noise cancellation, adaptive EQ, and all-day battery life in a sleek, comfortable design.</p>
          <div className="flex gap-4 items-center">
            <Button>Order Now</Button>
            <button className="px-4 py-2 border rounded-full text-sm">Watch Demo</button>
          </div>
          <div className="flex gap-8 mt-6 text-sm text-gray-600">
            <div><strong>30hrs</strong><div className="text-xs">Battery Life</div></div>
            <div><strong>ANC</strong><div className="text-xs">Noise Cancel</div></div>
            <div><strong>IPX7</strong><div className="text-xs">Water Resist</div></div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-xl">
            <img src="/src/assets/earpods.jpg" alt="earbuds" className="w-[320px] h-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
