import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { vi } from "vitest";

vi.mock("../lib/api", () => ({
  getHealth: () => Promise.resolve({ ok: true }),
  greet: (name: string) => Promise.resolve({ message: `hello, ${name}` })
}));

describe("App Component", () => {
  test("renders main title and subtitle", async () => {
    render(<App />);
    expect(screen.getByText("React + Express + TypeScript Starter")).toBeInTheDocument();
    expect(screen.getByText("A modern full-stack starter template")).toBeInTheDocument();
    // Wait for the health check to complete
    await waitFor(() => {
      expect(screen.getByText("Online")).toBeInTheDocument();
    });
  });

  test("shows server status as online", async () => {
    render(<App />);
    expect(await screen.findByText("Online")).toBeInTheDocument();
  });

  test("renders API test section", async () => {
    render(<App />);
    expect(screen.getByText("Try the API")).toBeInTheDocument();
    expect(screen.getByLabelText("Enter your name")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Send Greeting" })).toBeInTheDocument();
    // Wait for the health check to complete
    await waitFor(() => {
      expect(screen.getByText("Online")).toBeInTheDocument();
    });
  });

  test("renders feature cards", async () => {
    render(<App />);
    expect(screen.getByText("React 19")).toBeInTheDocument();
    expect(screen.getByText("Express 5")).toBeInTheDocument();
    expect(screen.getByText("Tailwind CSS")).toBeInTheDocument();
    // Wait for the health check to complete
    await waitFor(() => {
      expect(screen.getByText("Online")).toBeInTheDocument();
    });
  });

  test("allows user to enter name and send greeting", async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const nameInput = screen.getByLabelText("Enter your name");
    const greetButton = screen.getByRole("button", { name: "Send Greeting" });
    
    // Clear the default "world" value and type a new name
    await user.clear(nameInput);
    await user.type(nameInput, "Alice");
    await user.click(greetButton);
    
    // Wait for the greeting message to appear
    await waitFor(() => {
      expect(screen.getByText("🎉 hello, Alice")).toBeInTheDocument();
    });
  });

  test("shows default greeting with 'world'", async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const greetButton = screen.getByRole("button", { name: "Send Greeting" });
    await user.click(greetButton);
    
    await waitFor(() => {
      expect(screen.getByText("🎉 hello, world")).toBeInTheDocument();
    });
  });
});
