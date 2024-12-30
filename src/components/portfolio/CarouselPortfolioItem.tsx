import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { PortfolioItem } from "./types";
import { PortfolioItemOverlay } from "./PortfolioItemOverlay";

interface CarouselPortfolioItemProps {
  item: PortfolioItem;
  index: number;
}

export const CarouselPortfolioItem = ({ item, index }: CarouselPortfolioItemProps) => {
  const getMediaType = (url: string): 'image' | 'video' => {
    const extension = url.split('.').pop()?.toLowerCase();
    return ['mp4', 'webm', 'ogg'].includes(extension || '') ? 'video' : 'image';
  };

  return (
    <Card 
      className="group overflow-hidden bg-secondary border-none animate-fadeIn hover:scale-[1.02] transition-transform duration-300"
      style={{ 
        animationDelay: `${index * 150}ms`,
        opacity: 0,
        animation: `fadeIn 0.5s ease-in-out ${index * 150}ms forwards`
      }}
    >
      <CardContent className="p-0">
        <AspectRatio ratio={4/3}>
          {getMediaType(item.image) === 'video' ? (
            <video
              src={item.image}
              className="object-contain w-full h-full transition-all duration-500 group-hover:scale-110"
              controls
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className="object-contain w-full h-full transition-all duration-500 group-hover:scale-110"
              loading="lazy"
            />
          )}
          <PortfolioItemOverlay item={item} />
        </AspectRatio>
      </CardContent>
    </Card>
  );
};