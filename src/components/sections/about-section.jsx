import React from "react";
import Card from "../ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">AI-Powered Smart Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">Next-generation technology that adapts to your lifestyle</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">🎙️</div>
              <div>
                <h3 className="font-semibold">Voice Assistant Integration</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Seamlessly works with Siri, Google Assistant, and Alexa for hands-free control — call, music, directions, and more.
                </p>
                <ul className="mt-3 text-sm list-disc list-inside text-gray-500">
                  <li>Hands-free control</li>
                  <li>Smart responses</li>
                  <li>Multi-language support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">📍</div>
              <div>
                <h3 className="font-semibold">Smart Geofencing Technology</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Automatically adapts audio settings based on your location and activity — perfect for commuting or workouts.
                </p>
                <ul className="mt-3 text-sm list-disc list-inside text-gray-500">
                  <li>Auto mode switching</li>
                  <li>Custom location profiles</li>
                  <li>Safety alerts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            These features combine machine learning and sensor data to deliver a personalized listening experience.
          </p>
        </div>
      </div>
    </section>
  );
}
