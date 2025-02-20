import ImageGallery from "@/components/ImageGallery";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
    alt: "Restaurant Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    alt: "Signature Dish",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    alt: "Dining Area",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    alt: "Plated Dish",
  },
  {
    src: "https://images.unsplash.com/photo-1602273660127-a0000560a4c1",
    alt: "Chef Special",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    alt: "Restaurant Ambiance",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Gallery</h2>
          <p className="text-gray-600">
            Take a visual journey through our restaurant and cuisine
          </p>
        </div>
        <ImageGallery images={galleryImages} />
      </div>
    </section>
  );
}
