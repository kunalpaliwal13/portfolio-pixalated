
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { StyleGuide } from "@/components/StyleGuide";

const StyleGuidePage = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-navy-dark">
        <Navbar />
        
        <main className="container mx-auto px-4 pt-24 pb-12">
          <StyleGuide />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default StyleGuidePage;
