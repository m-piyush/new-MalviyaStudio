import { notFound } from 'next/navigation'

const blogPosts = [
  {
    id: 1,
    slug: '10-tips-for-perfect-wedding-photos',
    title: '10 Tips for Perfect Wedding Photos',
    content: `
      <h2>1. Plan Your Timeline Carefully</h2>
      <p>One of the most important aspects of wedding photography is timing. Make sure you allocate enough time for each part of the day, from getting ready to the ceremony and reception.</p>
      
      <h2>2. Do an Engagement Session</h2>
      <p>An engagement session helps you get comfortable in front of the camera and with your photographer before the big day.</p>
      
      <h2>3. Consider the Light</h2>
      <p>Natural light is most flattering in the morning and late afternoon. Plan your portrait session during these golden hours.</p>
      
      <h2>4. Choose Meaningful Locations</h2>
      <p>Select locations for your photos that have personal significance to you as a couple.</p>
      
      <h2>5. Communicate With Your Photographer</h2>
      <p>Share your vision, must-have shots, and any concerns with your photographer well in advance.</p>
      
      <h2>6. Prepare for Weather</h2>
      <p>Have a backup plan for inclement weather, whether it's umbrellas or an indoor location.</p>
      
      <h2>7. Get Ready in a Photogenic Space</h2>
      <p>Choose getting-ready locations with good natural light and minimal clutter for beautiful preparation photos.</p>
      
      <h2>8. Trust Your Photographer</h2>
      <p>You hired a professional for their expertise - let them guide you through poses and locations.</p>
      
      <h2>9. Stay Present</h2>
      <p>Don't stress about posing perfectly. The best photos often come from authentic moments.</p>
      
      <h2>10. Enjoy Your Day</h2>
      <p>At the end of the day, your happiness will shine through in your photos more than anything else.</p>
    `,
    date: 'May 15, 2023',
    image: '/images/blog1.jpg',
    category: 'Wedding',
    author: 'Jane Doe',
  },
  // ... other blog posts
]

export default function BlogPost({ params }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <span className="text-gray-500">{post.category}</span>
          <h1 className="text-3xl font-bold mt-2 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600">
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