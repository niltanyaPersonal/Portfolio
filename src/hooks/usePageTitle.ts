import { useEffect } from "react";

const BASE = "Nil Taña Mateu";

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE}` : `${BASE} — IT Systems, Cybersecurity & Web Development`;
  }, [title]);
}
