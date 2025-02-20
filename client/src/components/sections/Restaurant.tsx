import { Card, CardContent } from "@/components/ui/card";

const restaurants = [
  {
    name: "The Grand Dining Room",
    description: "Fine dining with international cuisine",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
  },
  {
    name: "Asian Fusion",
    description: "Contemporary Asian flavors",
    image: "https://images.unsplash.com/photo-1591920476948-da986641e66a",
  },
  {
    name: "The Lounge Bar",
    description: "Cocktails and light bites",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
  },
];

export default function Restaurant() {
  return (
    <section id="dining" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Dining Excellence</h2>
          <p className="text-gray-600">
            Experience culinary mastery at our award-winning restaurants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {restaurants.map((restaurant, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{restaurant.name}</h3>
                <p className="text-gray-600">{restaurant.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
