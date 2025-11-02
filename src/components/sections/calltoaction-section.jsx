import React from "react";

export default function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-500 text-white">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold">Ready to Experience Premium Audio?</h2>
          <p className="mt-3 text-white/90">Join thousands of music lovers who have elevated their listening experience. Early access and exclusive offers.</p>
          <ul className="mt-4 text-sm space-y-2">
            <li>• Free shipping on all orders</li>
            <li>• 30-day money-back guarantee</li>
            <li>• 24/7 customer support</li>
          </ul>
        </div>
        <form className="bg-white rounded-xl p-6 text-black">
          <div className="space-y-3">
            <input className="w-full rounded-md border px-3 py-2" placeholder="Full name" />
            <input className="w-full rounded-md border px-3 py-2" placeholder="Email address" />
            <input className="w-full rounded-md border px-3 py-2" placeholder="Phone number" />
            <button className="w-full bg-purple-600 text-white py-2 rounded-md">Get Early Access</button>
          </div>
        </form>
      </div>
    </section>
  );
}
