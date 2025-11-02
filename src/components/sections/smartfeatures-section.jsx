import React from "react";
import Card from "../ui/card";

const features = [
  { title: "Active Noise Cancellation", body: "Industry-leading ANC technology blocks out unwanted noise, letting you focus on your music." },
  { title: "All-Day Battery Life", body: "Enjoy up to 30 hours of listening time with the charging case." },
  { title: "Adaptive EQ", body: "Computational audio automatically tunes music for a personalized listening experience." },
  { title: "Voice Assistant Integration", body: "Works with Siri, Google Assistant, and Alexa for hands-free control." },
  { title: "Smart Geofencing", body: "Automatically adapts audio settings based on your location." },
  { title: "Wireless Charging", body: "Qi-compatible fast wireless charging in a compact case." }
];

export default function SmartFeatures() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">Intelligent Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">Cutting-edge audio technology designed for exceptional sound quality and comfort</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card key={i} title={f.title} body={f.body} />
          ))}
        </div>
      </div>
    </section>
  );
}
