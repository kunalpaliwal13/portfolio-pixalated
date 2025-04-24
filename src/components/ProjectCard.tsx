
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
}

export const ProjectCard = ({ title, description }: ProjectCardProps) => {
  return (
    <Card className="glass hover:scale-105 transition-transform duration-300 pixel-corners">
      <CardHeader>
        <CardTitle className="pixel-text text-accent">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground/80">{description}</p>
      </CardContent>
    </Card>
  );
};
