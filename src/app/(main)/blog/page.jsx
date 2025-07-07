import BlogCard from '@/components/BlogCard'

const blogPosts = [
  {
    id: 1,
    title: '10 Tips for Perfect Wedding Photos',
    excerpt:
      'Learn how to prepare for your wedding day to ensure your photos turn out beautifully.',
    date: 'May 15, 2023',
    image: '/images/blog1.jpg',
    category: 'Wedding',
  },
  {
    id: 2,
    title: 'Choosing the Right Photographer for Your Business',
    excerpt:
      'What to look for when selecting a photographer for your commercial needs.',
    date: 'April 2, 2023',
    image: '/images/blog2.jpg',
    category: 'Commercial',
  },
  {
    id: 3,
    title: 'The Art of Natural Light Portraits',
    excerpt:
      'How we use natural light to create stunning, authentic portrait photographs.',
    date: 'March 18, 2023',
    image: '/images/blog3.jpg',
    category: 'Portrait',
  },
  {
    id: 4,
    title: 'Essential Gear for Beginner Photographers',
    excerpt:
      'Our recommendations for camera equipment when you\'re just starting out.',
    date: 'February 5, 2023',
    image: '/images/blog4.jpg',
    category: 'Tips',
  },
  {
    id: 5,
    title: 'Capturing Candid Moments at Events',
    excerpt:
      'How we approach event photography to capture authentic, emotional moments.',
    date: 'January 22, 2023',
    image: '/images/blog5.jpg',
    category: 'Event',
  },
  {
    id: 6,
    title: 'The Importance of Professional Headshots',
    excerpt:
      'Why every professional should invest in quality headshots for their career.',
    date: 'December 10, 2022',
    image: '/images/blog6.jpg',
    category: 'Portrait',
  },
]

export default function Blog() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Blog & Tips</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Photography tips, industry insights, and behind-the-scenes stories from
          our work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}