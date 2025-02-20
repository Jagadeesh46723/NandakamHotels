import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Leaf } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Award-Winning Cuisine",
    description:
      "Recognized for our exceptional Indian cuisine and innovative fusion dishes",
  },
  {
    icon: Users,
    title: "Traditional Heritage",
    description:
      "Bringing authentic family recipes passed down through generations",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "Using locally-sourced, seasonal ingredients for the finest flavors",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Welcome to Nandakam, where tradition meets innovation in a
                celebration of Indian cuisine. Our journey began with a simple
                vision: to share the rich tapestry of flavors that define Indian
                gastronomy while adding our own contemporary twist.
              </p>
              <p>
                Each dish at Nandakam tells a story - of ancient recipes passed
                down through generations, of spice traders who crossed oceans, and
                of the diverse culinary heritage that makes Indian cuisine truly
                special.
              </p>
              <p>
                Under the guidance of our expert chefs, we create dishes that
                honor traditional cooking methods while embracing modern culinary
                techniques, resulting in an unforgettable dining experience.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex items-start gap-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
