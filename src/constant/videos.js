/**
 * Video showcase data.
 *
 * Each entry supports one of three sources — set `type` accordingly:
 *
 *   type: "youtube"  ->  provide `youtubeId`  (the part after ?v= or youtu.be/)
 *   type: "vimeo"    ->  provide `vimeoId`    (the numeric id from the Vimeo URL)
 *   type: "file"     ->  provide `src`        (a direct .mp4/.webm URL, e.g. Cloudinary
 *                                              https://res.cloudinary.com/<cloud>/video/upload/<public_id>.mp4)
 *
 * `thumbnail` is the poster shown in the grid. For YouTube you can leave it
 * blank to auto-use the YouTube poster; for Vimeo/file always supply one.
 *
 * The IDs below are safe, freely-licensed placeholders so the grid is
 * playable out of the box — replace them with Malviya Studio's real films.
 */
export const videos = [
  {
    id: 1,
    title: "Aarav & Priya — Wedding Film",
    category: "Cinematic Wedding",
    type: "youtube",
    youtubeId: "aqz-KE-bpKQ", // TODO: replace with real film id
    thumbnail:
      "https://res.cloudinary.com/dkucdzv1g/image/upload/v1758130689/pic1_twvrf7.jpg",
  },
  {
    id: 2,
    title: "Pre-Wedding — Riverside",
    category: "Pre-Wedding",
    type: "youtube",
    youtubeId: "aqz-KE-bpKQ",
    thumbnail:
      "https://res.cloudinary.com/dkucdzv1g/image/upload/v1758130705/pic2_iskviz.jpg",
  },
  {
    id: 3,
    title: "Haldi & Mehndi Highlights",
    category: "Ceremony",
    type: "youtube",
    youtubeId: "aqz-KE-bpKQ",
    thumbnail:
      "https://res.cloudinary.com/dkucdzv1g/image/upload/v1758130713/pic3_dop2ds.jpg",
  },
  {
    id: 4,
    title: "Baby Shoot — First Smiles",
    category: "Baby & Family",
    type: "youtube",
    youtubeId: "aqz-KE-bpKQ",
    thumbnail:
      "https://res.cloudinary.com/dkucdzv1g/image/upload/v1758130715/pic4_l23kaa.jpg",
  },
  {
    id: 5,
    title: "Reception Teaser",
    category: "Cinematic Wedding",
    type: "youtube",
    youtubeId: "aqz-KE-bpKQ",
    thumbnail:
      "https://res.cloudinary.com/dkucdzv1g/image/upload/v1758130704/pic5_swjhoq.jpg",
  },
  {
    id: 6,
    title: "Engagement — Golden Hour",
    category: "Pre-Wedding",
    type: "youtube",
    youtubeId: "aqz-KE-bpKQ",
    thumbnail:
      "https://res.cloudinary.com/dkucdzv1g/image/upload/v1758130706/pic6_jhazin.jpg",
  },

  // --- Reference: other source types ---------------------------------------
  // {
  //   id: 7, title: "Vimeo Example", category: "Wedding",
  //   type: "vimeo", vimeoId: "76979871",
  //   thumbnail: "https://res.cloudinary.com/dkucdzv1g/image/upload/.../poster.jpg",
  // },
  // {
  //   id: 8, title: "Cloudinary MP4 Example", category: "Wedding",
  //   type: "file",
  //   src: "https://res.cloudinary.com/dkucdzv1g/video/upload/v123/your_film.mp4",
  //   thumbnail: "https://res.cloudinary.com/dkucdzv1g/image/upload/.../poster.jpg",
  // },
]
