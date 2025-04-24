
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-tree-scape bg-cover bg-center">
        <div className="min-h-screen bg-background/80 backdrop-blur-sm">
          <Navbar />
          
          <main className="container mx-auto px-4 pt-24">
            <section className="min-h-[80vh] flex flex-col items-center justify-center text-center">
              <h1 className="pixel-text text-4xl md:text-6xl mb-6 animate-fade-in">
                Hello World
              </h1>
              <p className="max-w-2xl text-lg mb-12 animate-fade-in delay-100">
                I'm a software engineer who loves creating pixel-perfect experiences.
              </p>
            </section>

            <section className="py-20">
              <h2 className="pixel-text text-2xl mb-12 text-center">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ProjectCard
                  title="Project 1"
                  description="A pixel-perfect project with amazing features and cutting-edge technology."
                />
                <ProjectCard
                  title="Project 2"
                  description="A pixel-perfect project with amazing features and cutting-edge technology."
                />
                <ProjectCard
                  title="Project 3"
                  description="A pixel-perfect project with amazing features and cutting-edge technology."
                />
              </div>
            </section>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
