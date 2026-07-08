const paths: Record<string, string> = {
  os: "M4 5h16v11H4zM8 20h8M12 16v4",
  sysadmin: "M5 4h14v6H5zM5 14h14v6H5zM8 7h.01M8 17h.01M12 7h5M12 17h5",
  network: "M12 3v5M12 8a2 2 0 100 4 2 2 0 000-4zM12 12v3M6 19a2 2 0 104 0 2 2 0 00-4 0zM14 19a2 2 0 104 0 2 2 0 00-4 0zM8 17l3-3M16 17l-3-3",
  database: "M12 3c-4 0-7 1.2-7 3v12c0 1.8 3 3 7 3s7-1.2 7-3V6c0-1.8-3-3-7-3zM5 6c0 1.8 3 3 7 3s7-1.2 7-3M5 12c0 1.8 3 3 7 3s7-1.2 7-3",
  code: "M8 6l-5 6 5 6M16 6l5 6-5 6M13 4l-2 16",
  container: "M4 8l8-4 8 4v8l-8 4-8-4zM4 8l8 4 8-4M12 12v8",
  security: "M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6zM9 12l2 2 4-4",
  soft: "M12 3a7 7 0 00-4 12.7V18h8v-2.3A7 7 0 0012 3zM9 21h6",
};

export default function SkillIcon({ name }: { name: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] ?? paths.code} />
    </svg>
  );
}
