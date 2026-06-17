// app/blog/[id]/page.jsx

import { notFound } from 'next/navigation'
import Image from 'next/image'
import { buildMetadata } from '@/lib/seo'

const blogPosts = [
  {
    id: 1,
    slug: '10-tips-for-perfect-wedding-photos',
    title: '10 Tips for Perfect Wedding Photos',
    content: `
      <h2>1. Plan Your Timeline Carefully</h2>
      <p>One of the most important aspects of wedding photography is timing...</p>
    `,
    date: 'May 15, 2023',
    image: '/images/blog1.jpg',
    category: 'Wedding',
    author: 'Jane Doe',
  },
  {
    id: 2,
    slug: 'choosing-the-right-photographer-for-your-business',
    title: 'Choosing the Right Photographer for Your Business',
    content: `
      <p>When it comes to commercial photography, finding the right photographer is key...</p>
    `,
    date: 'April 2, 2023',
    image: '/images/blog2.jpg',
    category: 'Commercial',
    author: 'John Smith',
  },
  {
    id: 3,
    slug: 'the-art-of-natural-light-portraits',
    title: 'The Art of Natural Light Portraits',
    content: `
      <p>Natural light photography can bring out authentic emotions and real beauty...</p>
    `,
    date: 'March 18, 2023',
    image: '/images/blog3.jpg',
    category: 'Portrait',
    author: 'Alicia Green',
  },
  // Add more posts here
]

export async function generateMetadata({ params }) {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === parseInt(id))

  if (!post) {
    return buildMetadata({
      title: 'Wedding Photography Blog | Malviya Studio Prayagraj',
      description:
        'Photography tips, wedding stories and insights from Malviya Studio, the best wedding photographer & cinematographer in Prayagraj (Allahabad).',
      path: '/blog',
    })
  }

  const text = post.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  const description = `${text.slice(0, 155)}`.trim()

  return buildMetadata({
    title: `${post.title} | Malviya Studio Prayagraj`,
    description:
      description ||
      `${post.title} — wedding photography insights from Malviya Studio in Prayagraj.`,
    path: `/blog/${id}`,
  })
}

export default async function BlogPost({ params }) {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === parseInt(id))

  if (!post) notFound()

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <span className="text-muted-foreground">{post.category}</span>
          <h1 className="text-3xl font-bold mt-2 mb-4 text-foreground">{post.title}</h1>
          <div className="flex items-center text-muted-foreground">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>
        </div>

        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <article
          className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></article>
      </div>
    </section>
  )
}
