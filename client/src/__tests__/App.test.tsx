import { render, screen } from "@testing-library/react";
import App from "../App";
import { vi } from "vitest";

vi.mock("../lib/api", () => ({
  getHealth: () => Promise.resolve({ ok: true }),
  greet: (name: string) => Promise.resolve({ message: `hello, ${name}` })
}));

test("renders and greets", async () => {
  render(<App />);
  expect(await screen.findByText(/Server status: ok/i)).toBeInTheDocument();
});
