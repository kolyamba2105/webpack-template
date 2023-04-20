import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(5);

  return (
    <button
      className="rounded border border-indigo-400 bg-gradient-to-r from-pink-400 to-sky-600 bg-clip-text p-4 text-2xl text-transparent"
      disabled={count < 0}
      onClick={() => setCount((count) => count - 1)}>
      {count < 0 ? "Good job!" : `Click me ${count} more times`}
    </button>
  );
}
