import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full gradient-hero opacity-10" />
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full gradient-xr opacity-20 animate-float" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-xr-pink/20 animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card p-12 lg:p-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Be Part of the World's First{" "}
            <span className="gradient-xr bg-clip-text text-transparent">
              Teleportation Marketplace
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join the revolution in human presence. Experience the future of remote collaboration, 
            learning, and connection through Switch.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              className="group px-10 py-6 text-lg"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Book a Demo
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="glass" 
              size="lg"
              className="px-10 py-6 text-lg"
            >
              <Mail className="w-6 h-6 mr-3" />
              Join Waitlist
            </Button>
          </div>

          <div className="space-y-4 text-center">
            <div className="text-sm text-muted-foreground">
              Ready to get started? Contact us directly:
            </div>
            <a 
              href="mailto:admin@theswitch.life"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-medium"
            >
              <Mail className="w-4 h-4" />
              admin@theswitch.life
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-lg font-bold text-xr-blue mb-1">Secure</div>
                <div className="text-xs text-muted-foreground">End-to-end encryption</div>
              </div>
              <div>
                <div className="text-lg font-bold text-xr-purple mb-1">Scalable</div>
                <div className="text-xs text-muted-foreground">Global infrastructure</div>
              </div>
              <div>
                <div className="text-lg font-bold text-xr-pink mb-1">Supported</div>
                <div className="text-xs text-muted-foreground">Meta XR Program</div>
              </div>
              <div>
                <div className="text-lg font-bold text-xr-cyan mb-1">Proven</div>
                <div className="text-xs text-muted-foreground">100K+ user experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};