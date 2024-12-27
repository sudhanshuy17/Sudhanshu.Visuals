import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    id: 1,
    title: "Wildlife Photography",
    description: "Bengal Tiger in natural habitat",
    image: "/lovable-uploads/5088fe4b-b4c8-413b-85af-246ebf85699c.png",
  },
  {
    id: 2,
    title: "Night Photography",
    description: "Egret under moonlight",
    image: "/lovable-uploads/7d37f6b0-e0fc-4806-b334-f25d10e5d2a2.png",
  },
  {
    id: 3,
    title: "Bird Photography",
    description: "Yellow sunbird in nature",
    image: "/lovable-uploads/0eb9067b-6ef6-4755-9482-c46456850db7.png",
  },
  {
    id: 4,
    title: "Nature Close-ups",
    description: "Sunbird among spring blossoms",
    image: "/lovable-uploads/9bf437c5-ee72-4482-b569-e55ce2dcb572.png",
  },
  {
    id: 5,
    title: "Wildlife Art",
    description: "Peacock in natural surroundings",
    image: "/lovable-uploads/495ffc67-8198-40f0-a24c-9d6c0a2225f2.png",
  },
  {
    id: 6,
    title: "Astrophotography",
    description: "Half moon in clear night sky",
    image: "/lovable-uploads/5c4462a9-11b9-4ef7-84d6-ae10b06d36e8.png",
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