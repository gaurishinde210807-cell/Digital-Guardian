import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { AlertHierarchy } from "@/components/landing/AlertHierarchy";
import { Architecture } from "@/components/landing/Architecture";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <AlertHierarchy />
      <Architecture />

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the <span className="gradient-text">Future</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Try the live demo with your camera and microphone — real-time object detection
            and speech transcription running entirely in your browser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/live-demo">
              <Button size="lg" className="glow group">
                Try Live Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/training">
              <Button size="lg" variant="outline">
                Start Training
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Digital Guardian. Pioneering assistive technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
