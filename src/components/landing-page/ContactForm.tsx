"use client";

import * as React from "react";
import { useState } from "react";
import { Toast, ToastProvider, ToastTitle, ToastDescription } from "@radix-ui/react-toast";

export default function ContactForm() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOpen(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <ToastProvider>
      <section className="py-20 flex flex-col items-center justify-center bg-background">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Contact With Us</h2>
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-xl p-8 w-full max-w-lg flex flex-col gap-6 border border-border">
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Name" className="bg-background border border-border rounded px-4 py-3 text-text" />
          <input name="email" value={form.email} onChange={handleChange} required placeholder="Email" type="email" className="bg-background border border-border rounded px-4 py-3 text-text" />
          <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Type your message" className="bg-background border border-border rounded px-4 py-3 text-text min-h-[120px]" />
          <button type="submit" className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg hover:scale-105 transition-all">Submit Now</button>
        </form>
        <Toast open={open} onOpenChange={setOpen} className="bg-primary text-white rounded shadow-lg px-6 py-4 mt-4">
          <ToastTitle>Message sent</ToastTitle>
          <ToastDescription>Thank you for contacting us!</ToastDescription>
        </Toast>
      </section>
    </ToastProvider>
  );
}
