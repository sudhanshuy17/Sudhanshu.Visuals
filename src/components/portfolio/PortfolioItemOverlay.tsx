import { PortfolioItem } from "./types";

interface PortfolioItemOverlayProps {
  item: PortfolioItem;
}

export const PortfolioItemOverlay = ({ item }: PortfolioItemOverlayProps) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-lg font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          {item.description}
        </p>
        <div className="flex gap-3 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
          <span>{item.metadata.iso}</span>
          <span>{item.metadata.shutterSpeed}</span>
          <span>{item.metadata.aperture}</span>
        </div>
      </div>
    </div>
  );
};