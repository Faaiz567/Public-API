// src/app/page.tsx
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }} className=" h-screen w-full bg-gradient-to-r from-violet-200 to-pink-200">
      <h1 className=" text-2xl font-bold underline">
        Welcome to My Next.js App
      </h1>
      <p className="text-xl">This is the homepage.</p>
      <nav style={{ marginTop: "2rem" }}>
        <ul
          style={{ listStyle: "none", padding: 0 }}
          className=" text-xl rounded-2xl hover:underline bg-gradient-to-r from-teal-200 to-teal-500 "
        >
          <li>
            <Link href="/posts/ssr">Go to SSR Posts</Link>
          </li>
          <li>
            <Link href="/posts/ssg">Go to SSG Posts</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/protected">Protected Page</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default HomePage;
