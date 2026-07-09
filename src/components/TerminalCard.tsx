import { useEffect, useState } from "react";

const lines = [
  { command: "whoami", output: ["Computer Engineering Student · IT Systems & Networks"] },
  { command: "cat skills.txt", output: ["sysadmin · networking · cybersecurity · web-dev"] },
  { command: "systemctl status nil.service", output: ["● active (running) — available ASAP · hybrid"] },
];

const PROMPT = "nil@barcelona:~$";
const TYPE_SPEED_MS = 45;
const OUTPUT_DELAY_MS = 350;
const LINE_PAUSE_MS = 650;

/** Animated terminal window shown in the Home hero — types each command out. */
export default function TerminalCard() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [outputShown, setOutputShown] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      setLineIdx(lines.length);
    }
  }, []);

  useEffect(() => {
    if (reduced || lineIdx >= lines.length) return;
    const current = lines[lineIdx];

    if (charIdx < current.command.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), TYPE_SPEED_MS);
      return () => clearTimeout(t);
    }
    if (!outputShown) {
      const t = setTimeout(() => setOutputShown(true), OUTPUT_DELAY_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((l) => l + 1);
      setCharIdx(0);
      setOutputShown(false);
    }, LINE_PAUSE_MS);
    return () => clearTimeout(t);
  }, [reduced, lineIdx, charIdx, outputShown]);

  const done = lineIdx >= lines.length;

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-navy-900/80 shadow-2xl shadow-navy-950/60 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </span>
        <span className="ml-2 font-mono text-xs text-steel">nil@barcelona — zsh</span>
      </div>
      <div className="min-h-[240px] space-y-3 p-5 font-mono text-[13px] leading-relaxed sm:text-sm" aria-live="off">
        {/* Completed lines */}
        {lines.slice(0, lineIdx).map((line, i) => (
          <div key={i}>
            <p>
              <span className="text-emerald-400">{PROMPT}</span>{" "}
              <span className="text-white">{line.command}</span>
            </p>
            {line.output.map((out, j) => (
              <p key={j} className="text-steel">{out}</p>
            ))}
          </div>
        ))}

        {/* Line currently being typed */}
        {!done && (
          <div>
            <p>
              <span className="text-emerald-400">{PROMPT}</span>{" "}
              <span className="text-white">{lines[lineIdx].command.slice(0, charIdx)}</span>
              {!outputShown && <span className="terminal-caret" />}
            </p>
            {outputShown &&
              lines[lineIdx].output.map((out, j) => (
                <p key={j} className="text-steel">{out}</p>
              ))}
          </div>
        )}

        {/* Idle prompt when finished */}
        {done && (
          <p>
            <span className="text-emerald-400">{PROMPT}</span> <span className="terminal-caret" />
          </p>
        )}
      </div>
    </div>
  );
}
