"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

const stages = [
  "Idea / research",
  "Prototype",
  "Pilot customers",
  "Manufacturing-ready",
  "Scaling",
];

const fieldClassName =
  "w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3 outline-none transition placeholder:text-ink/34 focus:border-ink";

type SubmitState = "idle" | "submitting" | "success" | "error";

function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <span className="flex items-center justify-between gap-3 text-sm font-bold">
      <span>{children}</span>
      <span className="rounded-full bg-ink/8 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-ink/52">
        Required
      </span>
    </span>
  );
}

export function ApplicationForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      building: String(formData.get("building") || ""),
      location: String(formData.get("location") || ""),
      stage: String(formData.get("stage") || ""),
      needs: String(formData.get("needs") || ""),
    };

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(
          result?.error ||
            "The application could not be submitted. Please try again.",
        );
      }

      form.reset();
      setSubmitState("success");
      setMessage(
        "Application submitted. We'll review it and follow up if there is a fit.",
      );
    } catch (error) {
      setSubmitState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "The application could not be submitted. Please try again.",
      );
    }
  }

  return (
    <form
      className="rounded-[2rem] border border-ink/10 bg-white/78 p-5 shadow-soft-line backdrop-blur sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="mb-7 flex flex-col gap-3 border-b border-ink/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-ink/42">
            Application details
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-normal">
            Tell us about your team
          </h2>
        </div>
        <p className="text-sm font-semibold text-ink/52">All fields required</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <FieldLabel>Name</FieldLabel>
          <input
            className={fieldClassName}
            name="name"
            placeholder="Your name"
            required
            type="text"
          />
        </label>
        <label className="space-y-2">
          <FieldLabel>Email</FieldLabel>
          <input
            className={fieldClassName}
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </label>
        <label className="space-y-2 sm:col-span-2">
          <FieldLabel>Company / Team</FieldLabel>
          <input
            className={fieldClassName}
            name="company"
            placeholder="Company or team name"
            required
            type="text"
          />
        </label>
        <label className="space-y-2 sm:col-span-2">
          <FieldLabel>What are you building?</FieldLabel>
          <textarea
            className={`${fieldClassName} min-h-32 resize-y`}
            name="building"
            placeholder="Describe your product, technology, customers, and hardware needs."
            required
          />
        </label>
        <label className="space-y-2">
          <FieldLabel>Current location</FieldLabel>
          <input
            className={fieldClassName}
            name="location"
            placeholder="City, country"
            required
            type="text"
          />
        </label>
        <label className="space-y-2">
          <FieldLabel>Stage</FieldLabel>
          <select
            className={fieldClassName}
            defaultValue=""
            name="stage"
            required
          >
            <option disabled value="">
              Select your current stage
            </option>
            {stages.map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 sm:col-span-2">
          <FieldLabel>What do you need help with in Shenzhen?</FieldLabel>
          <textarea
            className={`${fieldClassName} min-h-28 resize-y`}
            name="needs"
            placeholder="Suppliers, factories, office space, housing, hiring, events, demos, market entry..."
            required
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="rounded-full bg-ink px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-paper transition hover:-translate-y-0.5 hover:bg-carbon disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:translate-y-0"
          disabled={submitState === "submitting"}
        >
          {submitState === "submitting"
            ? "Submitting..."
            : "Submit Application"}
        </button>
        <p className="max-w-md text-sm leading-6 text-ink/58">
          We&apos;ll review your application and follow up if there is a fit.
        </p>
      </div>

      {message ? (
        <p
          className={`mt-5 rounded-2xl border px-4 py-3 text-sm font-semibold ${
            submitState === "success"
              ? "border-ink/10 bg-signal/35 text-ink"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
