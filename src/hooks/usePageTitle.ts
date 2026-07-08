import { useEffect } from "react";

const BASE = "Nil Taña Mateu";
const DEFAULT_DESCRIPTION =
  "Portfolio of Nil Taña Mateu — Computer Engineering student and IT Systems & Networks technician in Barcelona. Systems administration, networking, cybersecurity and web development for real businesses.";

export function usePageTitle(title?: string, description?: string) {
  useEffect(() => {
    document.title = title
      ? `${title} — ${BASE}`
      : `${BASE} — IT Systems, Cybersecurity & Web Development in Barcelona`;

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = description ?? DEFAULT_DESCRIPTION;
  }, [title, description]);
}
