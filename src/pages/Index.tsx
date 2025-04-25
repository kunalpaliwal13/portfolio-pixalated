
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Timeline } from "@/components/Timeline";
import {TechStack} from "@/components/TechStack"
import { Button } from "@/components/ui/button";
import {ContactForm} from "@/components/ContactForm"
import { Mail, Twitter, Linkedin } from "lucide-react";
import x from "../../public/images/x.png"
import mail from "../../public/images/mail.png"
import linkedin from "../../public/images/linkedin.png"

const Index = () => {
  const title = "Hello World";

  return (
    <ThemeProvider>
      <div className="min-h-screen max-w-full bg-[url('/images/gtav.jpg')] bg-cover bg-center bg-fixed md:max-w-lg lg:max-w-full w-[700px]">
        <Navbar />

        <main className="container mx-auto px-4 pt-24">
          <section className="min-h-[80vh] flex flex-col items-center justify-center text-center">
            <h1 className="pixel-text text-4xl md:text-6xl mb-6 text-white pixel-letter inline-block sm:text-4xl sm:mb-4" style = {{display: "flex"}}>
              {title.split('').map((letter, index) => (
                <span 
                  key={index} 
                  className="pixel-letter inline-block," 
                  style={{ animationDelay: `${index * 0.1}s`, textShadow: "5px 5px 4px rgba(0, 0, 0, 0.5)" }}
                >
                 {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}<div style = {{color: "#8df2f7"}} className="">_</div>
            </h1>
            <p className="max-w-2xl text-lg mb-12 text-white/80 animate-fade-in delay-100" style= {{fontWeight: 800, color:"#FFF", textShadow: "5px 5px 4px rgba(0, 0, 0, 0.5)"}}>
            I’m a software engineer crafting fast, beautiful, and pixel-perfect digital experiences.
            </p>    
                <div style = {{display: "flex", gap: "20px"}}>
                     <a href="https://twitter.com/kunalpaliwall13" target="_blank"rel="noopener noreferrer">
                      <img src = {x} style = {{color: "white", height: "28px"}}></img>
                    </a>
                     <a href="mailto:kunalpaliwal2003@gmail.com" target="_blank"rel="noopener noreferrer">
                      <img src = {mail} style = {{color: "white", height: "28px"}}></img>
                    </a>
                     <a href="https://www.linkedin.com/in/kunal-paliwal-431072237/" target="_blank"rel="noopener noreferrer">
                      <img src = {linkedin} style = {{color: "white", height: "28px"}}></img>
                    </a>
                    
                </div>
          </section>

          <section className="py-20">
            <h2 className="pixel-text text-2xl mb-12 text-center text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              <ProjectCard
                title="Fieldly"
                description="Fieldly is a smart farming assistant that helps farmers choose the right crops, recommends fertilizers (including natural alternatives), and provides real-time weather updates. Powered by data and built for ease."
                devstack= {["Flask", "Python", "HTML-CSS-JS", "XGBoost", "Linear-Regression"]}
                image= "/images/fieldly.png"
                url = "https://croppred-x1.onrender.com/"
                />
              <ProjectCard
                title="Calpred"
                description="Track your fitness progress with ease! Log your exercise sessions, predict the calories burned for each workout, and explore your data through an interactive dashboard. Get personalized insights to optimize your fitness journey and stay motivated."
                devstack = {["Flask", "HTML-CSS-JS", "XGBoost", "Tpot", "Sqllite"]}
                image= "/images/calpred.png"
                url= "https://caloriepredictionproject.onrender.com"
              />
              <ProjectCard
                title="Food Demand Forecast (Unhosted)"
                description="Our project addresses the challenge of unpredictable demand in meal delivery by forecasting the demand for different meal types in the coming weeks, helping optimize raw material procurement and staffing."
                devstack = {["Python", "Flask", "Kafka", "Pyspark", "DVC", "Sqllite", "MongoDB", "HTML-CSS-JS", "SKlearn"]}
                image= "/images/fooddemand.png"
                url= "https://github.com/kunalpaliwal13/Food-Demand-Forecasting-MLOps-with-Data-Pipeline"
              />
            </div>
          </section>
          
          <div style ={{width: "95%", marginLeft: "2.5%"}}>
          <TechStack />
          </div>

          <section className="py-20">
            <h2 className="pixel-text text-2xl mb-12 text-center text-white">About Me</h2>
            <div className="max-w-4xl mx-auto">
              <Timeline />
            </div>
          </section>
        

      <section className="py-20">
              <h2 className="pixel-text text-2xl mb-12 text-center text-white" style = {{textShadow: "5px 5px 4px rgba(0, 0, 0, 0.5)"}}>Get in touch</h2>
              <div className=" mx-auto glass rounded-lg p-8" style = {{width: "70%"}}>
                <p className="text-white/100 text-center mb-8">
                  Feel free to reach out! I'm always open to discussing new projects and opportunities.
                </p>
                <ContactForm />
                {/* <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-white/10"> */}
                  {/* <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/80 hover:text-accent hover:bg-accent/10"
                    asChild
                  >
                    <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
                      <Mail size={24} />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/80 hover:text-accent hover:bg-accent/10"
                    asChild
                  >
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                      <Twitter size={24} />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/80 hover:text-accent hover:bg-accent/10"
                    asChild
                  >
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={24} />
                    </a>
                  </Button> */}
                {/* </div> */}
              </div>
            </section>

        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
