import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const portfolioItems = [
  {
    id: 1,
    title: "Wildlife Photography",
    description: "Bengal Tiger in natural habitat",
    image: "/lovable-uploads/45e6b30c-9ab7-47b7-bdf7-8f657bc3d98f.png",
    metadata: {
      iso: "ISO 800",
      shutterSpeed: "1/1000s",
      aperture: "f/5.6"
    }
  },
  {
    id: 2,
    title: "Night Photography",
    description: "Egret under moonlight",
    image: "/lovable-uploads/7d37f6b0-e0fc-4806-b334-f25d10e5d2a2.png",
    metadata: {
      iso: "ISO 1600",
      shutterSpeed: "1/500s",
      aperture: "f/4.0"
    }
  },
  {
    id: 3,
    title: "Bird Photography",
    description: "Yellow sunbird in nature",
    image: "/lovable-uploads/0eb9067b-6ef6-4755-9482-c46456850db7.png",
    metadata: {
      iso: "ISO 400",
      shutterSpeed: "1/2000s",
      aperture: "f/4.0"
    }
  },
  {
    id: 4,
    title: "Nature Close-ups",
    description: "Sunbird among spring blossoms",
    image: "/lovable-uploads/9bf437c5-ee72-4482-b569-e55ce2dcb572.png",
    metadata: {
      iso: "ISO 400",
      shutterSpeed: "1/1000s",
      aperture: "f/5.6"
    }
  },
  {
    id: 5,
    title: "Wildlife Art",
    description: "Peacock in natural surroundings",
    image: "/lovable-uploads/495ffc67-8198-40f0-a24c-9d6c0a2225f2.png",
    metadata: {
      iso: "ISO 800",
      shutterSpeed: "1/1000s",
      aperture: "f/4.0"
    }
  },
  {
    id: 6,
    title: "Astrophotography",
    description: "Half moon in clear night sky",
    image: "/lovable-uploads/5c4462a9-11b9-4ef7-84d6-ae10b06d36e8.png",
    metadata: {
      iso: "ISO 100",
      shutterSpeed: "1/125s",
      aperture: "f/8.0"
    }
  },
  {
    id: 7,
    title: "Bird in Flight",
    description: "Graceful bird soaring through the sky",
    image: "/lovable-uploads/80369311-505a-45af-afff-d81dd574c6ad.png",
    metadata: {
      iso: "ISO 800",
      shutterSpeed: "1/2000s",
      aperture: "f/5.6"
    }
  },
  {
    id: 8,
    title: "Wildlife Moments",
    description: "Dove in golden light",
    image: "/lovable-uploads/7a08e9db-8ea6-4261-bcf0-77b99c56a381.png",
    metadata: {
      iso: "ISO 400",
      shutterSpeed: "1/1000s",
      aperture: "f/4.0"
    }
  },
  {
    id: 9,
    title: "Macro Photography",
    description: "Dewdrops on green leaf",
    image: "/lovable-uploads/ea4b0675-18c5-4808-b597-b356a94d8ade.png",
    metadata: {
      iso: "ISO 200",
      shutterSpeed: "1/250s",
      aperture: "f/2.8"
    }
  },
  {
    id: 10,
    title: "Wildlife Scene",
    description: "Deer and cattle grazing together",
    image: "/lovable-uploads/24913d4a-acaa-4514-8201-76a5eda65f69.png",
    metadata: {
      iso: "ISO 400",
      shutterSpeed: "1/500s",
      aperture: "f/5.6"
    }
  },
  {
    id: 11,
    title: "Wildlife Portrait",
    description: "Langur in autumn setting",
    image: "/lovable-uploads/387e6f57-b3e0-4a2e-b56b-d9223161fa70.png",
    metadata: {
      iso: "ISO 800",
      shutterSpeed: "1/1000s",
      aperture: "f/4.0"
    }
  },
  {
    id: 12,
    title: "Bird Photography",
    description: "Kingfisher at dusk",
    image: "/lovable-uploads/d41b27d0-cadf-4da2-bdab-b913eceabe71.png",
    metadata: {
      iso: "ISO 1600",
      shutterSpeed: "1/500s",
      aperture: "f/4.0"
    }
  }
];

type MediaType = 'image' | 'video';

const getMediaType = (url: string): MediaType => {
  const extension = url.split('.').pop()?.toLowerCase();
  return ['mp4', 'webm', 'ogg'].includes(extension || '') ? 'video' : 'image';
};

export const PortfolioGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-xl mx-auto"
      >
        <CarouselContent>
          {portfolioItems.map((item, index) => (
            <CarouselItem key={item.id} className="basis-full">
              <Card 
                className="group overflow-hidden bg-secondary border-none animate-fadeIn hover:scale-[1.02] transition-transform duration-300"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  opacity: 0,
                  animation: `fadeIn 0.5s ease-in-out ${index * 150}ms forwards`
                }}
              >
                <CardContent className="p-0">
                  <AspectRatio ratio={16/9}>
                    {getMediaType(item.image) === 'video' ? (
                      <video
                        src={item.image}
                        className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                        controls
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-lg font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">{item.description}</p>
                        <div className="flex gap-3 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                          <span>{item.metadata.iso}</span>
                          <span>{item.metadata.shutterSpeed}</span>
                          <span>{item.metadata.aperture}</span>
                        </div>
                      </div>
                    </div>
                  </AspectRatio>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-12" />
        <CarouselNext className="-right-12" />
      </Carousel>
    </div>
  );
};