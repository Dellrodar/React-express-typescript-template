export async function getHealth() {
  const res = await fetch("/api/health");
  if (!res.ok) throw new Error("health check failed");
  return res.json() as Promise<{ ok: boolean }>;
}

export async function greet(name: string) {
  const res = await fetch(`/api/example/greet?name=${encodeURIComponent(name)}`);
  if (!res.ok) throw new Error("greet failed");
  return res.json() as Promise<{ message: string }>;
}
