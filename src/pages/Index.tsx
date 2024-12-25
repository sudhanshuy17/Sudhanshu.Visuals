import { Header } from "@/components/Header";
import { PortfolioGrid } from "@/components/PortfolioGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PortfolioGrid />
      </main>
    </div>
  );
};

export default Index;