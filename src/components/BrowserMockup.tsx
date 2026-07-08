import { useEffect, useRef, useState } from "react";
import type { Project } from "../data/projects";

// The live site is rendered at this desktop width, then scaled down to fit.
const DESIGN_WIDTH = 1280;
const ASPECT = 16 / 10;

/**
 * Browser-frame preview of a project. Shows a static screenshot when the
 * project defines one (apps behind a login), otherwise the real live site
 * in miniature via a scaled, non-interactive iframe. If the screenshot
 * file is missing it falls back to the live preview.
 */
export default function BrowserMockup({ project }: { project: Project }) {
  const host = new URL(project.url).host;
  const [imageFailed, setImageFailed] = useState(false);
  const useImage = Boolean(project.image) && !imageFailed;

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-3.5 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </span>
        <span className="ml-2 flex-1 truncate rounded-md bg-white px-3 py-1 font-mono text-[10px] text-slate-400 ring-1 ring-slate-200">
          {host}
        </span>
      </div>
      {useImage ? (
        <div className="relative w-full overflow-hidden bg-slate-50" style={{ aspectRatio: `${ASPECT}` }}>
          <img
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
      ) : (
        <LiveFrame url={project.url} name={project.name} accent={project.accent} />
      )}
    </div>
  );
}

function LiveFrame({ url, name, accent }: { url: string; name: string; accent: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      setScale(el.clientWidth / DESIGN_WIDTH);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-slate-50"
      style={{ aspectRatio: `${ASPECT}` }}
    >
      {/* Placeholder shown until the live site loads */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2" aria-hidden="true">
          <span
            className="h-8 w-8 animate-pulse rounded-lg"
            style={{ backgroundColor: `${accent}33` }}
          />
          <span className="font-mono text-[10px] text-slate-400">loading live preview…</span>
        </div>
      )}
      {scale > 0 && (
        <iframe
          src={url}
          title={`Live preview of ${name}`}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          onLoad={() => setLoaded(true)}
          className={`pointer-events-none absolute left-0 top-0 origin-top-left border-0 transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            width: `${DESIGN_WIDTH}px`,
            height: `${DESIGN_WIDTH / ASPECT}px`,
            transform: `scale(${scale})`,
          }}
        />
      )}
    </div>
  );
}
