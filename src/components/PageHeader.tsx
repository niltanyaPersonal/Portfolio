import Reveal from "./Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/** Dark navy header used at the top of every inner page. */
export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="grid-backdrop absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm font-medium text-accent-soft">
            <span aria-hidden="true">// </span>
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel sm:text-lg">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
