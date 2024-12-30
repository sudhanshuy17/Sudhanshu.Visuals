export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  metadata: {
    iso: string;
    shutterSpeed: string;
    aperture: string;
  };
}