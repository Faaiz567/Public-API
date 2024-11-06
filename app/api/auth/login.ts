// src/app/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;

  if (username === "user" && password === "pass") {
    res.status(200).json({ token: "dummy-token" });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
}
