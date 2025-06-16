import Link from 'next/link'

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <span className="text-sm text-gray-500">{post.category}</span>
        <h3 className="text-xl font-semibold mt-2 mb-3">
          <Link href={`/blog/${post.id}`} className="hover:text-gray-700">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{post.date}</span>
          <Link
            href={`/blog/${post.id}`}
            className="text-gray-900 font-medium hover:text-gray-700 transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  )
}