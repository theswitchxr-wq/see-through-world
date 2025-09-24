import heroImage from "@/assets/hero-xr-pov.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Zap } from "lucide-react";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

export const HeroSection = ({ onJoinWaitlist }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="XR POV streaming interface"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full gradient-xr opacity-20 animate-float" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full gradient-hero opacity-10 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-xr-cyan/20 animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm font-medium text-primary">
            <Zap className="w-4 h-4" />
            The Future of Presence
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-foreground glow-text">Teleport into</span>
            <span className="block gradient-xr bg-clip-text text-transparent animate-gradient">
              Real Life
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The world's first POV marketplace connecting on-scene{" "}
            <span className="text-xr-cyan font-semibold">Hosts</span> with remote{" "}
            <span className="text-xr-purple font-semibold">Viewers</span> in real time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="lg"
              className="group px-8 py-6 text-lg"
              asChild
            >
              <a href="https://cal.com/switchxr/15min" target="_blank" rel="noopener noreferrer">
                <Eye className="w-5 h-5 mr-2" />
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              variant="glass" 
              size="lg"
              className="px-8 py-6 text-lg"
              onClick={onJoinWaitlist}
            >
              Join Waitlist
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-xr-blue mb-2">$212B+</div>
              <div className="text-sm text-muted-foreground">Addressable Market</div>
            </div>
            <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-xr-purple mb-2">&lt;100ms</div>
              <div className="text-sm text-muted-foreground">Ultra-Low Latency</div>
            </div>
            <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-xr-pink mb-2">Real-time</div>
              <div className="text-sm text-muted-foreground">Two-Way Controls</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};