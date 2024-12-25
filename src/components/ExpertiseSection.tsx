import { Progress } from "./ui/progress";
import { Card, CardContent } from "./ui/card";

export const ExpertiseSection = () => {
  const skills = [
    { name: "Wildlife Photography", value: 95 },
    { name: "Nature Documentation", value: 90 },
    { name: "Cinematography", value: 85 },
    { name: "Photo Editing", value: 88 },
    { name: "Video Editing", value: 85 },
    { name: "Video Production", value: 82 },
  ];

  return (
    <section className="animate-fadeIn">
      <Card className="bg-secondary/50">
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold mb-8">Expertise</h2>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.value}%</span>
                </div>
                <Progress value={skill.value} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};