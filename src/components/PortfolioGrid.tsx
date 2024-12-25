import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    id: 1,
    title: "Mountain Landscape",
    description: "Captured at dawn in the Himalayas",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODY4NzQ5NA&ixlib=rb-4.0.3&q=80&w=800",
  },
  {
    id: 2,
    title: "Forest Mystery",
    description: "Low angle shot through the canopy",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODY4NzQ5NA&ixlib=rb-4.0.3&q=80&w=800",
  },
  {
    id: 3,
    title: "Desert Canyon",
    description: "Sunset at the canyon walls",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODY4NzQ5NA&ixlib=rb-4.0.3&q=80&w=800",
  },
  {
    id: 4,
    title: "Spring Blooms",
    description: "Macro photography of wildflowers",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODY4NzQ5NA&ixlib=rb-4.0.3&q=80&w=800",
  },
  {
    id: 5,
    title: "Behind the Scenes",
    description: "Film production setup",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODY4NzQ5NA&ixlib=rb-4.0.3&q=80&w=800",
  },
  {
    id: 6,
    title: "Digital Workflow",
    description: "Post-production process",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODY4NzQ5NA&ixlib=rb-4.0.3&q=80&w=800",
  },
];

export const PortfolioGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="masonry-grid">
        {portfolioItems.map((item) => (
          <Card key={item.id} className="group overflow-hidden bg-secondary border-none animate-fadeIn">
            <CardContent className="p-0">
              <AspectRatio ratio={3/4}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </AspectRatio>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};