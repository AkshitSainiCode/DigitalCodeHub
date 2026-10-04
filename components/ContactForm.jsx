"use client";

import { useState } from "react";

export default function ContactForm({ quote = false }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "Web Development", budget: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Frontend only: connect this to an API route / email service later.
  const submit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success">
        <h3>Thanks, {form.name || "there"}!</h3>
        <p>We received your message and will reply within one working day.</p>
        <button className="btn btn-ghost" onClick={() => setSent(false)}>Send another message</button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit}>
      <label>Full name<input name="name" value={form.name} onChange={update} required /></label>
      <label>Email<input type="email" name="email" value={form.email} onChange={update} required /></label>
      <label>Phone<input name="phone" value={form.phone} onChange={update} /></label>
      {quote && (
        <>
          <label>Service
            <select name="service" value={form.service} onChange={update}>
              <option>Web Development</option><option>Mobile App Development</option><option>UI/UX Design</option>
              <option>Software Development</option><option>E-Commerce Development</option><option>AI & Automation</option><option>Digital Marketing</option>
            </select>
          </label>
          <label>Budget
            <select name="budget" value={form.budget} onChange={update}>
              <option value="">Select a range</option><option>Under ₹50,000</option><option>₹50,000 – ₹2,00,000</option><option>₹2,00,000 – ₹5,00,000</option><option>Above ₹5,00,000</option>
            </select>
          </label>
        </>
      )}
      <label>{quote ? "Project details" : "Message"}<textarea name="message" rows="5" value={form.message} onChange={update} required /></label>
      <button type="submit" className="btn btn-primary">{quote ? "Request quote" : "Send message"}</button>
    </form>
  );
}
