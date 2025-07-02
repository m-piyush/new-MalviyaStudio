async function getCloudinaryImages(folder) {
    const cloud_name = "dkucdzv1g";
    const api_key = "555117559724924";
    const api_secret = "6GgoRVRNGA-DNjnTgdVwVNf1gw8"

    const auth = Buffer.from(`${api_key}:${api_secret}`).toString('base64');

    const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_name}/resources/image/upload?prefix=${folder}/&max_results=100`,
        {
            headers: {
                Authorization: `Basic ${auth}`,
            },
            cache: 'no-store',
        }
    );

    if (!res.ok) {
        console.error("Cloudinary API error:", res.statusText);
        return [];
    }

    const data = await res.json();

    return data.resources
        .filter((img) => img.public_id.startsWith(`${folder}/pic`))
        .map((img) => img.secure_url);
}

export default async function GalleryPage(props) {
    const { id } = await props.params; // ✅ fix params
    const images = await getCloudinaryImages(id);

    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Gallery {id}</h1>

            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Image ${i + 1}`}
                        className="w-full h-auto rounded-md hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                    />
                ))}
            </div>
        </section>
    );
}
