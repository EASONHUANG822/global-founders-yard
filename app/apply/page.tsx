import Link from "next/link";
import { ApplicationForm } from "@/components/ApplicationForm";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Apply to Global Founders Yard",
  description:
    "Tell us what you are building and how Shenzhen can help your hardware company move faster.",
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="border-b border-ink/10 bg-paper/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm font-black uppercase tracking-[0.18em]">
            Global Founders Yard
          </Link>
          <Link
            href="/"
            className="rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold transition hover:border-ink hover:bg-ink hover:text-paper"
          >
            Back to home
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-80 grid-field opacity-50" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-ink/15 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em]">
              Applications
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
              Apply to Global Founders Yard
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/68">
              Tell us what you&apos;re building, where you are now, and how
              Shenzhen can help your company move faster.
            </p>
            <div className="mt-10 rounded-[2rem] border border-ink/10 bg-ink p-6 text-paper shadow-soft-line">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">
                What happens next
              </p>
              <p className="mt-4 text-lg leading-8 text-paper/78">
                We review applications for fit across robotics, AI hardware,
                manufacturing, components, and cross-border founder needs. If
                there is a fit, we follow up with the most relevant Shenzhen
                resources and next steps.
              </p>
            </div>
          </div>

          <ApplicationForm />
        </div>
      </section>

      <SiteFooter compact />
    </main>
  );
}
