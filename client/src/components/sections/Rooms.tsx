import ImageGallery from "@/components/ImageGallery";

const roomImages = [
  {
    src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
    alt: "Luxury Suite",
  },
  {
    src: "https://images.unsplash.com/photo-1628870776167-b4b684441e10",
    alt: "Executive Room",
  },
  {
    src: "https://images.unsplash.com/photo-1628870970123-68cfb9889a74",
    alt: "Deluxe Room",
  },
  {
    src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd",
    alt: "Premium Suite",
  },
  {
    src: "https://images.unsplash.com/photo-1550567418-1bd5c7712337",
    alt: "Family Room",
  },
  {
    src: "https://images.unsplash.com/photo-1628870571248-4f5db428986c",
    alt: "Presidential Suite",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Luxurious Accommodations</h2>
          <p className="text-gray-600">
            Choose from our selection of meticulously designed rooms and suites,
            each offering the perfect blend of comfort and elegance.
          </p>
        </div>
        <ImageGallery images={roomImages} />
      </div>
    </section>
  );
}
