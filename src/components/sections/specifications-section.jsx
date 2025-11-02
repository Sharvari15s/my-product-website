import React from "react";

const specs = [
  ["Battery Life (earbuds)", "6 hours"],
  ["Battery Life (with Case)", "30 hours"],
  ["Active Noise Cancellation", "Up to 40 dB Reduction"],
  ["Voice Assistant", "Siri, Google, Alexa"],
  ["Water Resistance", "IPX7 rated"],
  ["Bluetooth", "5.3 with multipoint"],
  ["Driver Size", "10mm dynamic"],
  ["Charging", "USB-C + Qi Wireless"],
  ["Weight (per earbud)", "5.4g"],
];

export default function Specifications() {
  return (
    <section id="specs" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Technical Specifications</h2>
          <p className="text-gray-600 mb-6">Engineered for performance, designed for comfort.</p>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <table className="w-full text-sm">
              <tbody>
                {specs.map(([k, v], i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="py-3 text-gray-600 w-1/2">{k}</td>
                    <td className="py-3 font-medium">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 text-xs text-gray-500">
              <span className="inline-block bg-purple-50 text-purple-600 px-2 py-1 rounded-full mr-2">IPX7</span>
              <span className="inline-block bg-purple-50 text-purple-600 px-2 py-1 rounded-full">Fast charge</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <img src="/src/assets/earpods.jpg" alt="earbuds" className="w-[320px] h-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
