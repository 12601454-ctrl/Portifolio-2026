
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [escuro, setEscuro] = useState(() => {
    try {
      const salvo = localStorage.getItem("tema");
      if (salvo) return salvo === "escuro";
    } catch {}
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", escuro);
    try {
      localStorage.setItem("tema", escuro ? "escuro" : "claro");
    } catch {}
  }, [escuro]);

  return (
    <button
      onClick={() => setEscuro(!escuro)}
      aria-label="Alternar tema"
      className="w-10 h-10 rounded-full border"
    >
      {escuro ? "☀️" : "🌙"}
    </button>
  );
}