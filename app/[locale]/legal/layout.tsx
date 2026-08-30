import type { ReactNode } from "react";

// Typography wrapper for legal content, powered by @tailwindcss/typography.
// Prose color tokens are mapped to the app's design system.
export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12">
      <article
        className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-heading prose-headings:tracking-tight prose-a:font-medium prose-a:underline-offset-4"
      >
        {children}
      </article>
    </div>
  );
}
