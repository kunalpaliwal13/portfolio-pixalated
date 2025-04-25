import { useMemo } from "react";
import {
  Code,
  FileCode,
  Layers,
  Palette,
  Binary,
  Braces,
  FileTerminal,
  Cpu,
  Database,
  Server,
  GitBranch,
  Library,
  Globe,
  Sparkles,
  Frame
} from "lucide-react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

export const TechStack = () => {
  const row1 = useMemo<TechItem[]>(
    () => [
      { name: "Node.js", icon: <Code size={18} /> },
      { name: "React", icon: <Layers size={18} /> },
      { name: "Java", icon: <Palette size={18} /> },
      { name: "Bootstrap", icon: <FileCode size={18} /> },
      { name: "C++", icon: <Binary size={18} /> },
      { name: "CSS", icon: <Braces size={18} /> },
      { name: "HTML", icon: <FileTerminal size={18} /> },
      { name: "Python", icon: <FileCode size={18} /> },
    ],
    []
  );

  const row2 = useMemo<TechItem[]>(
    () => [
      { name: "Linux", icon: <Cpu size={18} /> },
      { name: "MongoDB", icon: <Database size={18} /> },
      { name: "ML", icon: <Globe size={18} /> },
      { name: "Figma", icon: <Frame size={18} /> },
      { name: "Javascript", icon: <Code size={18} /> },
      { name: "Flask", icon: <Library size={18} /> },
      { name: "AI", icon: <Sparkles size={18} /> },
      { name: "PostgresSQL", icon: <Database size={18} /> },
    ],
    []
  );

  return (
    <div className="w-full overflow-hidden py-10">
      <h2 className="pixel-text text-2xl mb-12 text-center text-white">
        Tools that I have used
      </h2>

      {/* First row - Left to Right */}
      <div className="relative overflow-hidden w-full">
        <div className="animate-marquee whitespace-nowrap">
          {row1.map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 mx-4" style ={{border: "1px solid rgba(255, 255, 255, 0.7)"}}>
              <span className="text-white/80">{tech.icon}</span>
              <span className="text-white/80">{tech.name}</span>
            </div>
          ))}
          {row1.map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 mx-4" style ={{border: "1px solid rgba(255, 255, 255, 0.7)"}}>
              <span className="text-white/80">{tech.icon}</span>
              <span className="text-white/80">{tech.name}</span>
            </div>
          ))}
        </div>
        
      </div>

      {/* Second row - Right to Left */}
      <div className="relative overflow-hidden w-full">
        <div className="animate-scroll-right whitespace-nowrap">
          {row2.map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 mx-4 my-5" style ={{border: "1px solid rgba(255, 255, 255, 0.7)"}}>
              <span className="text-white/80">{tech.icon}</span>
              <span className="text-white/80">{tech.name}</span>
            </div>
          ))}
          {row2.map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 mx-4 my-5" style ={{border: "1px solid rgba(255, 255, 255, 0.7)"}}>
              <span className="text-white/80">{tech.icon}</span>
              <span className="text-white/80">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
