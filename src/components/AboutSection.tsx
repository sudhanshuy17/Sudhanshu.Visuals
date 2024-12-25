import { Card, CardContent } from "./ui/card";

export const AboutSection = () => {
  return (
    <section className="animate-fadeIn">
      <Card className="bg-secondary/50">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As a passionate photographer and cinematographer, I find my greatest inspiration in the raw beauty of the natural world. Wildlife photography isn't just my profession—it's my calling, a medium through which I connect with nature's most extraordinary moments.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey began with a simple fascination for wildlife, but it has evolved into a dedicated mission to document and share the incredible stories of our planet's diverse ecosystems and their inhabitants.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4 rounded-lg bg-secondary">
              <h3 className="text-xl font-semibold mb-2">Photography</h3>
              <p className="text-muted-foreground">Wildlife & Nature</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-secondary">
              <h3 className="text-xl font-semibold mb-2">Cinematography</h3>
              <p className="text-muted-foreground">Documentary & Short Films</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-secondary">
              <h3 className="text-xl font-semibold mb-2">Field Experience</h3>
              <p className="text-muted-foreground">Extensive Wildlife Tracking</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};