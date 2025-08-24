import axios from "axios";

// Create axios instance with base configuration
const api = axios.create({
  baseURL: "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add response interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error status
      throw new Error(`API Error: ${error.response.status} - ${error.response.statusText}`);
    } else if (error.request) {
      // Request was made but no response received
      throw new Error("Network Error: No response from server");
    } else {
      // Something else happened
      throw new Error(`Request Error: ${error.message}`);
    }
  }
);

export async function getHealth(): Promise<{ ok: boolean }> {
  const response = await api.get("/health");
  return response.data;
}

export async function greet(name: string): Promise<{ message: string }> {
  const response = await api.get("/example/greet", {
    params: { name },
  });
  return response.data;
}
