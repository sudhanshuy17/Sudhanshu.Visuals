import { Card, CardContent } from "./ui/card";
import { Camera } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const GearSection = () => {
  const gear = {
    sony: {
      cameras: [
        {
          name: "Sony Alpha A6100",
          type: "Mirrorless Camera",
          description: "Versatile mirrorless camera perfect for both stills and video",
        },
        {
          name: "Sony Alpha FX30",
          type: "Cinema Line Camera",
          description: "Professional cinema camera for high-end video production",
        },
      ],
      lenses: [
        {
          name: "7Artisans 35mm f/1.2",
          type: "Prime Lens",
        },
        {
          name: "55-210mm F4.5-6.3 OSS",
          type: "Telephoto Zoom",
        },
        {
          name: "Tamron 18-300mm F/3.5-6.3",
          type: "All-in-One Zoom",
        },
      ],
    },
    nikon: {
      cameras: [
        {
          name: "Nikon D7000",
          type: "DSLR Camera",
          description: "Reliable DSLR workhorse for versatile photography",
        },
        {
          name: "Nikon D5200",
          type: "DSLR Camera",
          description: "Feature-rich DSLR perfect for creative photography",
        },
      ],
      lenses: [
        {
          name: "35mm Prime Lens",
          type: "Prime Lens",
        },
        {
          name: "18-105mm Nikkor",
          type: "Standard Zoom",
        },
        {
          name: "70-300mm Tamron",
          type: "Telephoto Zoom",
        },
      ],
    },
  };

  // Placeholder images that will be replaced with actual camera pictures
  const images = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  return (
    <section className="animate-fadeIn">
      <Card className="bg-secondary/50">
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold mb-8">My Gear</h2>

          {/* Image Carousel */}
          <div className="mb-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img
                            src={image}
                            alt={`Camera ${index + 1}`}
                            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sony System */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Camera className="w-6 h-6" /> Sony System
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium mb-4">Cameras</h4>
                  <div className="space-y-4">
                    {gear.sony.cameras.map((camera) => (
                      <Card key={camera.name} className="bg-secondary">
                        <CardContent className="p-4">
                          <h5 className="font-semibold">{camera.name}</h5>
                          <p className="text-sm text-muted-foreground">{camera.type}</p>
                          {camera.description && (
                            <p className="text-sm text-muted-foreground mt-2">{camera.description}</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-4">Lenses</h4>
                  <div className="space-y-4">
                    {gear.sony.lenses.map((lens) => (
                      <Card key={lens.name} className="bg-secondary">
                        <CardContent className="p-4">
                          <h5 className="font-semibold">{lens.name}</h5>
                          <p className="text-sm text-muted-foreground">{lens.type}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Nikon System */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Camera className="w-6 h-6" /> Nikon System
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium mb-4">Cameras</h4>
                  <div className="space-y-4">
                    {gear.nikon.cameras.map((camera) => (
                      <Card key={camera.name} className="bg-secondary">
                        <CardContent className="p-4">
                          <h5 className="font-semibold">{camera.name}</h5>
                          <p className="text-sm text-muted-foreground">{camera.type}</p>
                          {camera.description && (
                            <p className="text-sm text-muted-foreground mt-2">{camera.description}</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-4">Lenses</h4>
                  <div className="space-y-4">
                    {gear.nikon.lenses.map((lens) => (
                      <Card key={lens.name} className="bg-secondary">
                        <CardContent className="p-4">
                          <h5 className="font-semibold">{lens.name}</h5>
                          <p className="text-sm text-muted-foreground">{lens.type}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};