import React, { useState } from "react";
import Input from "../ui/input";
import Button from "../ui/button";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Please enter a valid email.";
    if (!/^\+?[\d\s-]{7,15}$/.test(form.phone)) return "Please enter a valid phone number.";
    return null;
  };

  const submit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ type: "error", message: err });
      return;
    }
    setStatus({ type: "success", message: "Thanks! We've received your request." });
    // In real app: send to API
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-purple-600 to-purple-500 text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold">Ready to Experience Premium Audio?</h2>
          <p className="mt-3 text-white/90">Join our early access list for exclusive offers and updates.</p>
          <ul className="mt-4 text-sm space-y-2 text-white/90">
            <li>• Free shipping on all orders</li>
            <li>• 30-day money-back guarantee</li>
            <li>• 24/7 customer support</li>
          </ul>
        </div>

        <form onSubmit={submit} className="bg-white rounded-xl p-6 text-black">
          <div className="space-y-3">
            <Input name="name" placeholder="Full name" value={form.name} onChange={handleChange} />
            <Input name="email" placeholder="Email address" value={form.email} onChange={handleChange} />
            <Input name="phone" placeholder="Phone number" value={form.phone} onChange={handleChange} />
            <Button type="submit">Get Started</Button>

            {status && (
              <div className={`mt-3 text-sm ${status.type === "error" ? "text-red-600" : "text-green-600"}`}>
                {status.message}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
