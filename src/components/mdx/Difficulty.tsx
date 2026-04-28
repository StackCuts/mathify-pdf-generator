import { clsx } from 'clsx';

export default function Difficulty({ level }: { level: "Novice" | "Master" }) {
  return (
    <span 
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide uppercase shadow-sm border",
        level === "Novice" ? "bg-green-100 text-green-800 border-green-200" : "bg-purple-100 text-purple-800 border-purple-200"
      )}
    >
      {level}
    </span>
  );
}
