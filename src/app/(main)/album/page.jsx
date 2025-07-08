"use client";
import Link from "next/link";
import Image from "next/image";

const albums = [
  {
    id: "1",
    name: "Name",
    thumbnail: "https://res.cloudinary.com/dkucdzv1g/image/upload/v1751449892/1/pic52.jpg",
  },
  {
    id: "2",
    name: "Name",
    thumbnail: "https://res.cloudinary.com/dkucdzv1g/image/upload/v1751449892/2/pic42.jpg",
  },
  {
    id: "3",
    name: "Name",
    thumbnail: "https://res.cloudinary.com/dkucdzv1g/image/upload/v1751449892/3/pic30.jpg",
  },
  {
    id: "4",
    name: "Name",
    thumbnail: "https://res.cloudinary.com/dkucdzv1g/image/upload/v1751449892/4/pic24.jpg",
  },
  {
    id: "5",
    name: "Name",
    thumbnail: "https://res.cloudinary.com/dkucdzv1g/image/upload/v1751449892/5/pic20.jpg",
  }
];

export default function AlbumGallery() {
  return (
    <div className="min-h-screen  py-8 ">
      <h1 className="text-3xl font-bold mb-8 text-center">Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {albums.map((album) => (
          <Link key={album.id} href={`/album/${album.id}`} className="group">
            <div className="relative h-64 overflow-hidden rounded-lg ">
              <Image
                src={album.thumbnail}
                alt={album.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="mt-2 text-center text-lg">{album.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
