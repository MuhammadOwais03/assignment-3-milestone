import Link from "next/link";

const posts = [
  { id: "1", title: "Dynamic Routing in Next.js" },
  { id: "2", title: "React State for Comments" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-8 text-center">
          Welcome to My Blog
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              href={`/${post.id}`}
              key={post.id}
              className="group block bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-500">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-600">
                Click to read more about "{post.title}".
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
