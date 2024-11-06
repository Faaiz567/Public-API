// app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/protected");
    } else {
      const data = await res.json();
      setError(data.error || "An error occurred");
    }
  };

  return (
    <div className="text-xl ">
      <h1 className=" border-2 border-gray-700 bg-gradient-to-r from-teal-400 to-yellow-200">
        Login
      </h1>
      <div className="flex justify-center h-60 w-80 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl border-x-2 border-orange-900 m-10 ml-96 p-4 pl-8">
        <form onSubmit={handleSubmit}>
          <input
            className="border-2 rounded-lg border-gray-700 bg-gradient-to-r from-teal-400 to-yellow-200"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />

          <input
            className="border-2 rounded-lg border-gray-700 bg-gradient-to-r from-teal-400 to-yellow-200"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          <button
            className="border-2 rounded-lg border-gray-700 bg-gradient-to-r from-teal-400 to-yellow-200 "
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      <div></div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
