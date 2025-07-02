const folderImageCounts = {
  1: 65,
  2: 45,
  3: 36,
  4: 42,
  5: 32,
};

export default async function GalleryPage({ params }) {
  const folder = params.id;
  const totalImages = folderImageCounts[folder] || 0;

  const baseURL = "https://res.cloudinary.com/dkucdzv1g/image/upload/v1751449892";

  const images = Array.from({ length: totalImages }, (_, i) => {
    return `${baseURL}/${folder}/pic${i + 1}.jpg`;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Gallery {folder}</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Image ${i + 1}`}
            loading="lazy"
            className="w-full h-auto rounded-md hover:scale-[1.02] transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
}
