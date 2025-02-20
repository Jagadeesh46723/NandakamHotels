import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
}

const menuItems: MenuItem[] = [
  {
    category: "Appetizers",
    name: "Kerala Spiced Prawns",
    description: "Tiger prawns marinated in Kerala spices and grilled to perfection",
    price: "$16",
    image: "https://images.unsplash.com/photo-1559742811-822873691df8",
    isSpicy: true
  },
  {
    category: "Appetizers",
    name: "Vegetable Samosas",
    description: "Crispy pastries filled with spiced potatoes and green peas",
    price: "$12",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    isVegetarian: true
  },
  {
    category: "Main Course",
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato sauce",
    price: "$24",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
  },
  {
    category: "Main Course",
    name: "Vegetable Biryani",
    description: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices",
    price: "$20",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8",
    isVegetarian: true
  },
  {
    category: "Desserts",
    name: "Gulab Jamun",
    description: "Sweet milk dumplings in rose-flavored syrup",
    price: "$8",
    image: "https://images.unsplash.com/photo-1605197161470-5a0f2e690398",
    isVegetarian: true
  },
  {
    category: "Desserts",
    name: "Mango Kulfi",
    description: "Traditional Indian ice cream with alphonso mangoes",
    price: "$10",
    image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d",
    isVegetarian: true
  }
];

export default function Menu() {
  // Using Array.from() with filter to get unique categories
  const categories = Array.from(
    menuItems.reduce((acc, item) => acc.add(item.category), new Set<string>())
  );

  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
          <p className="text-gray-600">
            Discover our carefully curated selection of authentic dishes
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-6">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item, index) => (
                    <Card key={index} className="overflow-hidden group">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-lg mb-1">
                              {item.name}
                            </h4>
                            <p className="text-gray-600 text-sm mb-2">
                              {item.description}
                            </p>
                          </div>
                          <span className="text-primary font-semibold">
                            {item.price}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          {item.isVegetarian && (
                            <Badge variant="secondary">Vegetarian</Badge>
                          )}
                          {item.isSpicy && (
                            <Badge variant="destructive">Spicy</Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}