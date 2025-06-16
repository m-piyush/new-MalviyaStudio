'use client';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[450px]">
        <Image
          src="/images/hero.jpg"
          alt="Hero"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white tracking-wider">About</h1>
        </div>
      </section>

      {/* My Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="uppercase text-sm text-[#c4a38c] tracking-widest mb-2">About</p>
        <h2 className="text-4xl font-serif mb-8">My Story</h2>

        <div className="flex flex-col md:flex-row items-center gap-10 text-left">
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            width={400}
            height={500}
            className="rounded-md object-cover"
          />
          <div className="space-y-5 max-w-xl">
            <p>
              Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti.
              Justo molestie amet vulputate aliquam viverra ut viverra lorem.
            </p>
            <p>
              Velit tellus vitae massa sed egestas ornare pretium. Donec odio faucibus consectetur feugiat varius.
            </p>
            <button className="mt-4 bg-[#E8DED7] text-gray-700 px-6 py-2 rounded hover:bg-[#d6cfc8]">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {['1', '2', '3', '4'].map((num) => (
          <Image
            key={num}
            src={`/images/gallery${num}.jpg`}
            alt={`Gallery ${num}`}
            width={300}
            height={300}
            className="rounded-md object-cover w-full h-full"
          />
        ))}
      </section>

      {/* Facts About Me */}
      <section className="bg-[#FBF9F8] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase text-sm text-[#c4a38c] tracking-widest mb-2">Get to know me</p>
          <h3 className="text-3xl font-serif mb-12">A Few Facts About Myself</h3>

          <div className="grid md:grid-cols-3 gap-12 text-left">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-5">
                <Image
                  src={`/images/fact${i}.jpg`}
                  alt={`Fact ${i}`}
                  width={400}
                  height={400}
                  className="rounded-md object-cover"
                />
                <h5 className="text-3xl font-bold text-[#BAA196]">{i}</h5>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet
                  vulputate aliquam viverra ut viverra lorem.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="uppercase text-sm text-[#c4a38c]">Crafting Memories</p>
            <h3 className="text-3xl font-serif">Your Story, My Lens</h3>
            <p>
              Your wedding day is a once-in-a-lifetime event, and choosing the right photographer is essential to preserving its
              magic for years to come. I would be honored to be a part of your special day.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900">
              Book Now
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/story1.jpg"
              alt="Story 1"
              width={300}
              height={300}
              className="rounded-md object-cover"
            />
            <Image
              src="/images/story2.jpg"
              alt="Story 2"
              width={300}
              height={300}
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
