import { Card, CardContent } from "@/components/ui/card";
import { Pool, Dumbbell, Wifi, Coffee, Utensils } from "lucide-react";

const amenities = [
  {
    icon: Pool,
    title: "Swimming Pool",
    description: "Infinity pool with panoramic views",
    image: "https://images.unsplash.com/photo-1668911128139-4db2cc34aa5f",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art equipment",
    image: "https://images.unsplash.com/photo-1728591952444-b64be486a042",
  },
  {
    icon: Coffee,
    title: "Spa & Wellness",
    description: "Relaxation and rejuvenation",
    image: "https://images.unsplash.com/photo-1648383336009-27812dcbf260",
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "Multiple restaurants and bars",
    image: "https://images.unsplash.com/photo-1705705470605-4cece35b3a16",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary throughout",
    image: "https://images.unsplash.com/photo-1728591396685-42420f328bc4",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">World-Class Amenities</h2>
          <p className="text-gray-600">
            Indulge in our extensive range of facilities designed for your comfort
            and enjoyment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <amenity.icon className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">{amenity.title}</h3>
                </div>
                <p className="text-gray-600">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}