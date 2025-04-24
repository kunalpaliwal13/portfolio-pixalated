
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export const StyleGuide = () => {
  const colorClasses = [
    { name: "Background", class: "bg-background" },
    { name: "Foreground", class: "text-foreground bg-background" },
    { name: "Primary", class: "bg-primary" },
    { name: "Primary Foreground", class: "bg-primary-foreground" },
    { name: "Secondary", class: "bg-secondary" },
    { name: "Secondary Foreground", class: "bg-secondary-foreground" },
    { name: "Accent", class: "bg-accent" },
    { name: "Accent Foreground", class: "bg-accent-foreground" },
  ];

  const typographyExamples = [
    { name: "Pixel Text", class: "pixel-text", example: "Hello World" },
    { name: "Body Text", class: "", example: "I'm a software engineer who loves creating pixel-perfect experiences." },
    { name: "Accent Text", class: "text-accent", example: "Special highlight text" },
  ];

  return (
    <Card className="max-w-4xl mx-auto my-12 glass">
      <CardHeader>
        <Badge className="w-fit mb-2">Documentation</Badge>
        <CardTitle className="pixel-text">Pixel Portfolio Style Guide</CardTitle>
        <CardDescription>
          A retro pixel-art inspired theme with programmish aesthetics
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="theme">
          <TabsList>
            <TabsTrigger value="theme">Theme Overview</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
          </TabsList>
          
          <TabsContent value="theme" className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Concept</h3>
              <p>
                A nostalgic pixel-art inspired portfolio with a modern twist. The design evokes the aesthetic of classic 
                programming interfaces and retro games while maintaining clean readability and responsive design principles.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Elements</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Pixelated corners on components using custom clipping</li>
                <li>Pixel-perfect typography for headings using Press Start 2P font</li>
                <li>Glass-morphism effect for cards and navigation</li>
                <li>Nature-inspired background with tech overlay</li>
                <li>Subtle hover animations and transitions</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="colors">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {colorClasses.map((color) => (
                <div key={color.name} className="space-y-1.5">
                  <div className={`${color.class} h-10 w-full rounded-md pixel-corners`}></div>
                  <div className="text-xs">{color.name}</div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="typography">
            <div className="space-y-4">
              {typographyExamples.map((type) => (
                <div key={type.name} className="space-y-1">
                  <div className="text-sm text-muted-foreground">{type.name}</div>
                  <div className={type.class}>{type.example}</div>
                  <Separator className="mt-2" />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="components">
            <div className="space-y-4">
              <p>Key components use these class combinations:</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="font-semibold">Cards:</span> 
                  <code className="ml-2 p-1 bg-secondary rounded text-xs">glass hover:scale-105 transition-transform duration-300 pixel-corners</code>
                </li>
                <li>
                  <span className="font-semibold">Buttons:</span> 
                  <code className="ml-2 p-1 bg-secondary rounded text-xs">pixel-corners transition-colors</code>
                </li>
                <li>
                  <span className="font-semibold">Headers:</span> 
                  <code className="ml-2 p-1 bg-secondary rounded text-xs">pixel-text text-{size}</code>
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
