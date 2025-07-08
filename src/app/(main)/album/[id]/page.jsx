"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import PhotoFlipBook from "@/components/PhotoFlipBook";
// const PhotoFlipBook = dynamic(() => import("@/components/PhotoFlipBook"), {
//   ssr: false,
// });

export default function AlbumViewer() {
  const params = useParams();
  const id = params?.id 
console.log("check-1");

  if (!id) {
    return <div className="text-white text-center p-10">Invalid album ID.</div>;
  }

console.log("check-2");

  
  return (
    <div className="w-screen h-screen overflow-hidden">
      <PhotoFlipBook id={id} />
    </div>
  );
}
