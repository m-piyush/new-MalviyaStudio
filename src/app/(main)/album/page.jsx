"use client";
import Link from "next/link";
import Image from "next/image";

const albums = [
  {
    id: "1",
    name: "Anchal & Mohit",
    thumbnail:"https://res.cloudinary.com/dkucdzv1g/image/upload/v1758130689/pic1_twvrf7.jpg",
  },
  {
    id: "2",
    name: "Garima & Ankit",
    thumbnail: "https://res.cloudinary.com/dkucdzv1g/image/upload/v1758130921/1_q8ijg1_skeza8.jpg",
  },
  {
    id: "3",
    name: "Name",
    thumbnail: "https://res.cloudinary.com/dkucdzv1g/image/upload/v1758177045/1_xouudg_pczj6u.jpg",
  },
  {
    id: "4",
    name: "Name",
    thumbnail: "https://res.cloudinary.com/dkucdzv1g/image/upload/v1758177831/1_ktff6m_urfcg8.jpg",
  }
];

export default function AlbumGallery() {
  return (
    <div className="min-h-screen py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-center">Albums</h1>
      <div className="grid grid-cols-1 gap-6 max-w-md w-full px-4">
        {albums.map((album) => (
          <Link key={album.id} href={`/album/${album.id}`} className="group">
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-background to-muted/20">
              <Image
                src={album.thumbnail}
                alt={album.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {/* <h2 className="mt-2 text-center text-lg">{album.name}</h2> */}
          </Link>
        ))}
      </div>
    </div>
  );
}