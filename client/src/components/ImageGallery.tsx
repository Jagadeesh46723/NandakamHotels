import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface Image {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: Image[];
  className?: string;
}

export default function ImageGallery({ images, className }: ImageGalleryProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div className="cursor-pointer relative group overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
