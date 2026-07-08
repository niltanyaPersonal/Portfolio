interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  dark = false,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="font-mono text-sm font-medium text-accent">
        <span aria-hidden="true">// </span>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-steel" : "text-steel-dark"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
