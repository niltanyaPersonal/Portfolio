import { useEffect, useState } from "react";

const lines = [
  { prompt: "nil@barcelona:~$", command: "whoami", output: ["Computer Engineering Student · IT Systems & Networks"] },
  { prompt: "nil@barcelona:~$", command: "cat skills.txt", output: ["sysadmin · networking · cybersecurity · web-dev"] },
  { prompt: "nil@barcelona:~$", command: "systemctl status nil.service", output: ["● active (running) — available ASAP · hybrid"] },
];

/** Animated terminal window shown in the Home hero. */
export default function TerminalCard() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= lines.length) return;
    const timer = setTimeout(() => setVisible((v) => v + 1), visible === 0 ? 500 : 900);
    return () => clearTimeout(timer);
  }, [visible]);

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
      <div className="min-h-[240px] space-y-3 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {lines.slice(0, visible).map((line, i) => (
          <div key={i}>
            <p>
              <span className="text-emerald-400">{line.prompt}</span>{" "}
              <span className="text-white">{line.command}</span>
            </p>
            {line.output.map((out, j) => (
              <p key={j} className="text-steel">{out}</p>
            ))}
          </div>
        ))}
        {visible >= lines.length && (
          <p>
            <span className="text-emerald-400">nil@barcelona:~$</span> <span className="terminal-caret" />
          </p>
        )}
      </div>
    </div>
  );
}
