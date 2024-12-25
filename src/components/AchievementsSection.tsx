import { Card, CardContent } from "./ui/card";
import { Trophy } from "lucide-react";

export const AchievementsSection = () => {
  const achievements = [
    {
      title: "Wildlife Photographer of the Year Finalist",
      year: "2023",
    },
    {
      title: "National Geographic Feature",
      year: "2022",
    },
    {
      title: "Best Nature Documentary Award",
      year: "2021",
    },
  ];

  return (
    <section className="animate-fadeIn">
      <Card className="bg-secondary/50">
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold mb-8">Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.title} className="bg-secondary">
                <CardContent className="p-6 text-center space-y-4">
                  <Trophy className="w-12 h-12 mx-auto text-primary" />
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};