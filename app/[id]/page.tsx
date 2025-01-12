"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

const posts = [
  {
    id: "1",
    title: "Dynamic Routing in Next.js",
    content: `
    Next.js allows you to create dynamic routes effortlessly using the file-based routing system. 
    For example, you can define a dynamic route with a filename like [id].js inside the pages or app directory. 
    This allows you to create flexible routes such as /post/1, /post/2, and so on.
    
    Benefits of dynamic routing:
    - Clean and readable URLs.
    - Easier navigation handling.
    - Supports server-side rendering (SSR) for dynamic data fetching.
    
    Example:
    In your app directory, create [id]/page.js or [id]/page.tsx, then access the route parameter using Next.js's 'useRouter()' or 'useParams()'.
    `,
  },
  {
    id: "2",
    title: "React State for Comments",
    content: `
    Building a comment section with React is a great way to learn about state management. 
    React's useState hook makes it simple to add interactivity to your app.

    Steps to create a comment section:
    1. Create a useState hook to store comments.
    2. Create an input field to type comments.
    3. Add a button that, when clicked, appends the new comment to the existing state.

    Advantages of React state for comments:
    - Instant UI updates.
    - No need for a backend for simple apps.
    - Perfect for learning React's fundamentals.

    Bonus Tip:
    For larger applications, consider using a state management library like Redux or Context API for better scalability!
    `,
  },
];

export default function PostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment("");
    }
  };

  if (!post) {
    return <p className="text-center mt-10 text-xl">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-lg text-gray-600 whitespace-pre-line mb-6">
          {post.content}
        </p>
        <hr className="my-6" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Comments
        </h2>
        <ul className="space-y-3 mb-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <li
                key={index}
                className="bg-gray-100 p-3 rounded-lg shadow-sm border text-gray-700"
              >
                {comment}
              </li>
            ))
          ) : (
            <p className="text-gray-500">No comments yet. Be the first!</p>
          )}
        </ul>
        <div className="flex flex-col">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={3}
            placeholder="Add your comment"
            className="border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            onClick={addComment}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
}
