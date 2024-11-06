// src/app/posts/ssg/page.tsx
import { fetchPosts } from "../lib/api";
import { FC } from "react";

// This component will be statically generated at build time
const PostsSSG: FC = async () => {
  const posts = await fetchPosts();

  return (
    <div className="text-center bg-gradient-to-t from-yellow-200 to-amber-100">
      <h1 className="text-2xl">SSG Posts</h1>
      <ul>
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsSSG;
