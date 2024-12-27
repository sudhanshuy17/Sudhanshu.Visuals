import { Header } from "@/components/Header";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { AboutSection } from "@/components/AboutSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { GearSection } from "@/components/GearSection";
import { CollaborationSection } from "@/components/CollaborationSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 space-y-16 py-8">
        <AboutSection />
        <PortfolioGrid />
        <ExpertiseSection />
        <GearSection />
        <CollaborationSection />
        <footer className="text-center py-8 text-sm text-muted-foreground">
          © 2024 Sudhanshu.Visuals. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default Index;