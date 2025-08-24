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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            React + Express + TypeScript Starter
          </h1>
          <p className="text-lg text-gray-600">
            A modern full-stack starter template
          </p>
        </div>

        {/* Server Status */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-gray-700">Server Status</span>
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-2 ${
                status === "ok" ? "bg-green-500" : 
                status === "down" ? "bg-red-500" : "bg-yellow-500"
              }`}></div>
              <span className={`font-semibold ${
                status === "ok" ? "text-green-600" : 
                status === "down" ? "text-red-600" : "text-yellow-600"
              }`}>
                {status === "ok" ? "Online" : status === "down" ? "Offline" : "Checking..."}
              </span>
            </div>
          </div>
        </div>

        {/* API Test */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Try the API
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Enter your name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name..."
              />
            </div>
            <button
              onClick={async () => setMsg((await greet(name)).message)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Send Greeting
            </button>
            {msg && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800">🎉 {msg}</p>
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl mb-3">⚛️</div>
            <h3 className="font-semibold text-gray-800 mb-2">React 19</h3>
            <p className="text-gray-600 text-sm">Latest React with TypeScript</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-semibold text-gray-800 mb-2">Express 5</h3>
            <p className="text-gray-600 text-sm">Fast backend with TypeScript</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-semibold text-gray-800 mb-2">Tailwind CSS</h3>
            <p className="text-gray-600 text-sm">Beautiful styling out of the box</p>
          </div>
        </div>
      </div>
    </div>
  );
}
