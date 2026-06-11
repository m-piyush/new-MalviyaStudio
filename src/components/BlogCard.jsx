import Link from 'next/link'

export default function BlogCard({ post }) {
  return (
    <div className="bg-card text-card-foreground border border-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <span className="text-sm text-muted-foreground">{post.category}</span>
        <h3 className="text-xl font-semibold mt-2 mb-3">
          <Link href={`/blog/${post.id}`} className="hover:text-muted-foreground">
            {post.title}
          </Link>
        </h3>
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">{post.date}</span>
          <Link
            href={`/blog/${post.id}`}
            className="text-foreground font-medium hover:text-muted-foreground transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  )
}