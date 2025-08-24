import { useEffect, useState } from "react";
import { getHealth, greet } from "./lib/api";

export default function App() {
  const [status, setStatus] = useState<string>("...");
  const [name, setName] = useState<string>("world");
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    getHealth().then(r => setStatus(r.ok ? "ok" : "down")).catch(() => setStatus("down"));
  }, []);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>React + Express + TypeScript Starter</h1>
      <p>Server status: {status}</p>

      <div style={{ marginTop: 16 }}>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={async () => setMsg((await greet(name)).message)} style={{ marginLeft: 8 }}>Greet</button>
      </div>
      <p>{msg}</p>
    </main>
  );
}
