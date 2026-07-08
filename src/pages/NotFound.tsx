import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Page not found");

  return (
    <section className="flex min-h-[70vh] items-center bg-navy-950 pt-16">
      <div className="mx-auto max-w-xl px-5 text-center sm:px-8">
        <p className="font-mono text-sm text-accent-soft">HTTP 404</p>
        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Page not found</h1>
        <p className="mt-4 font-mono text-sm text-steel">
          $ curl -I this-page <span className="text-red-400">→ 404 Not Found</span>
        </p>
        <Link
          to="/"
          className="mt-10 inline-block rounded-lg bg-accent px-7 py-3 text-sm font-semibold text-white transition hover:bg-accent-soft"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
