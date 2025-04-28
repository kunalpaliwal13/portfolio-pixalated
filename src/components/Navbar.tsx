
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="pixel-text text-lg">
            <Link to="/">kunal.dev</Link>
          </div>
          <a href="/public/files/KunalPaliwalResume.pdf" download="KunalPaliwalResume.pdf">
            <button className="hover:text-gray-500">Download Resume</button>
          </a>
        </div>
      </div>
    </nav>
  );
};
