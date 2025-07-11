"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Implement login logic
  }
  function handleGoogleLogin() {
    // TODO: Implement Google login logic
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-card rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col gap-6 border border-border">
        <h2 className="text-2xl font-bold text-center text-primary mb-2">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="bg-background border border-border rounded px-4 py-3 text-text"
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="Password"
            className="bg-background border border-border rounded px-4 py-3 text-text"
          />
          <button type="submit" className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg hover:scale-105 transition-all">Login</button>
        </form>
        <button onClick={handleGoogleLogin} className="px-6 py-3 rounded-lg bg-white text-primary font-semibold shadow-lg border border-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_17_40)"><path d="M47.532 24.552c0-1.636-.146-3.2-.418-4.704H24.48v9.02h13.02c-.56 3.02-2.24 5.58-4.76 7.3v6.06h7.7c4.5-4.14 7.092-10.24 7.092-17.676z" fill="#4285F4"/><path d="M24.48 48c6.48 0 11.92-2.14 15.88-5.82l-7.7-6.06c-2.14 1.44-4.88 2.3-8.18 2.3-6.28 0-11.6-4.24-13.5-9.96H3.68v6.24C7.62 43.82 15.44 48 24.48 48z" fill="#34A853"/><path d="M10.98 28.46c-.5-1.44-.8-2.98-.8-4.46s.3-3.02.8-4.46v-6.24H3.68A23.97 23.97 0 000 24c0 3.98.96 7.76 2.68 11.02l8.3-6.56z" fill="#FBBC05"/><path d="M24.48 9.52c3.52 0 6.64 1.22 9.12 3.62l6.84-6.84C36.4 2.14 30.96 0 24.48 0 15.44 0 7.62 4.18 3.68 10.24l8.3 6.24c1.9-5.72 7.22-9.96 13.5-9.96z" fill="#EA4335"/></g><defs><clipPath id="clip0_17_40"><rect width="48" height="48" fill="white"/></clipPath></defs></svg>
          Continue with Google
        </button>
        <div className="text-center text-muted text-sm mt-2">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={() => router.replace('/signup')}
            className="text-primary hover:underline bg-transparent border-none p-0 m-0 cursor-pointer"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
} 