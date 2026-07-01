"use client";

import { useState } from "react";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Hello from ${name || "your portfolio"}`
    );
    const body = encodeURIComponent(
      `${message}\n\n, ${name}${from ? ` (${from})` : ""}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field =
    "w-full border-b border-line bg-transparent py-3 text-ink placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="name" className="label-mono mb-2 block">
          Your name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={field}
          placeholder="Jane Designer"
        />
      </div>
      <div>
        <label htmlFor="email" className="label-mono mb-2 block">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className={field}
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="label-mono mb-2 block">
          What are you building?
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${field} resize-none`}
          placeholder="We’re untangling something complicated and could use a designer who thinks in systems…"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant="default" size="lg">
          Send it →
        </Button>
        {sent && (
          <span className="font-mono text-xs text-marine">
            Opening your email client…
          </span>
        )}
      </div>
      <p className="font-mono text-[0.7rem] leading-relaxed text-muted-foreground">
        ↳ This opens a pre-filled email, no data is stored or sent anywhere
        but your own mail app.
      </p>
    </form>
  );
}
