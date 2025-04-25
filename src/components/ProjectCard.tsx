
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  devstack: string[];
  image: string;
  url:  string;
}

export const ProjectCard = ({ title, description, devstack, image, url }: ProjectCardProps) => {
  const handleClick=(url)=>{
    if (url) {
      window.open(url, "_blank");
    }
  }
  return (
    <Card className="glass hover:scale-105 transition-transform duration-300 pixel-corners" onClick={()=>{handleClick(url)}}>
      <CardHeader style ={{width: "100%"}}>
        <CardTitle className="pixel-text text-accent">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground/80">{description}</p>
      </CardContent>
      <CardContent>
        <p className="text-sm text-foreground/80" style = {{color: "#85ffa7"}}>
        {devstack.map((tech, index) => (<span key={index}>{tech+" | "}</span>))}
        </p>
      </CardContent>
      <CardContent>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl mb-4"/>
      </CardContent>
    </Card>
  );
};
