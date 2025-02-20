import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Traditional Flavors with Modern Elegance
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Experience exquisite dining at Nandakam, where every dish tells a story
            of passion and culinary artistry.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="group">
              Reserve a Table
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}