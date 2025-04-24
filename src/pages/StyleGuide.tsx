
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { StyleGuide } from "@/components/StyleGuide";

const StyleGuidePage = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-tree-scape bg-cover bg-center">
        <div className="min-h-screen bg-background/80 backdrop-blur-sm">
          <Navbar />
          
          <main className="container mx-auto px-4 pt-24 pb-12">
            <StyleGuide />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default StyleGuidePage;
