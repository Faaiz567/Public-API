// src/app/posts/ssr/page.tsx
import { fetchPosts } from "../lib/api";
import { FC } from "react";


const PostsSSR: FC = async () => {
  const posts = await fetchPosts();

  return (
    <div className=" text-center bg-gradient-to-t from-yellow-200 to-amber-100">
      <h1 className="text-2xl ">SSR Posts</h1>
      <ul>
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsSSR;
