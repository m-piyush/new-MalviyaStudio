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

  if (!id) {
    return <div className="text-white text-center p-10">Invalid album ID.</div>;
  }


  return (
    <div className="w-screen h-screen overflow-hidden">
      <PhotoFlipBook id={id} />
    </div>
  );
}
