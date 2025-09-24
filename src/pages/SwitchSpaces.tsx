import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, Building2, Eye, Users, MapPin, Calendar, Mail, CheckCircle, AlertTriangle, Zap, Globe, Shield } from "lucide-react";

const SwitchSpaces = () => {
  // Set page title and meta description
  useEffect(() => {
    document.title = "Switch Spaces | Immersive Real Estate for MENA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience properties before they are built with XR walkthroughs, virtual staging, and immersive real estate solutions across the MENA region.');
    }
  }, []);

  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const realEstateFeatures = [
    {
      icon: Eye,
      title: "Virtual Walkthroughs for Apartments & Villas",
      description: "Experience every corner of your future home with photorealistic XR walkthroughs before construction begins",
      color: "text-xr-blue"
    },
    {
      icon: Building2,
      title: "XR-Enabled Sales Centers",
      description: "Transform traditional sales centers into immersive experience hubs with interactive property showcases",
      color: "text-xr-purple"
    },
    {
      icon: Users,
      title: "Multi-User Immersive Viewings",
      description: "Collaborative property tours with family, friends, and agents using Meta Quest and WebXR technology",
      color: "text-xr-pink"
    }
  ];

  const menaCities = [
    { name: "Dubai", country: "UAE", status: "Active" },
    { name: "Riyadh", country: "Saudi Arabia", status: "Launching Q2" },
    { name: "Doha", country: "Qatar", status: "Planning" },
    { name: "Kuwait City", country: "Kuwait", status: "Planning" },
    { name: "Abu Dhabi", country: "UAE", status: "Planning" },
    { name: "Manama", country: "Bahrain", status: "Planning" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background with subtle immersive visual */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-background via-surface to-background" />
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
              <Building2 className="w-4 h-4" />
              Immersive Real Estate
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-foreground glow-text">Switch Spaces:</span>
              <span className="block gradient-xr bg-clip-text text-transparent animate-gradient">
                Redefining Real Estate in XR
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Immersive experiences for real estate{" "}
              <span className="text-xr-cyan font-semibold">buyers</span>,{" "}
              <span className="text-xr-purple font-semibold">developers</span>, and{" "}
              <span className="text-xr-pink font-semibold">investors</span> across the MENA region.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center items-center pt-8">
              <Button 
                variant="hero" 
                size="lg"
                className="group px-8 py-6 text-lg"
                onClick={scrollToSolutions}
              >
                <Eye className="w-5 h-5 mr-2" />
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
              <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-xr-blue mb-2">$1.2T</div>
                <div className="text-sm text-muted-foreground">MENA Real Estate Market</div>
              </div>
              <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-xr-purple mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Faster Sales Cycles</div>
              </div>
              <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-xr-pink mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Buyer Confidence</div>
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

      {/* Problem / Opportunity Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Problem */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-medium">
                <AlertTriangle className="w-4 h-4" />
                Current Challenges
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Real Estate in MENA: <span className="text-destructive">Limited Visualization</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Traditional real estate relies on <span className="text-destructive font-semibold">2D renderings</span>, 
                  <span className="text-destructive font-semibold"> static models</span>, and 
                  <span className="text-destructive font-semibold"> imagination</span>.
                </p>
                
                <p>
                  Buyers face <span className="text-foreground font-semibold">high decision risks</span> with 
                  long sales cycles and limited ability to truly experience properties before purchase.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 border-l-4 border-l-destructive">
                  <div className="text-2xl font-bold text-destructive mb-1">6-12</div>
                  <div className="text-sm text-muted-foreground">Months sales cycle</div>
                </div>
                <div className="glass-card p-4 border-l-4 border-l-destructive">
                  <div className="text-2xl font-bold text-destructive mb-1">30%</div>
                  <div className="text-sm text-muted-foreground">Buyer hesitation rate</div>
                </div>
              </div>
            </div>

            {/* Supporting Graphics */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Limited Visualization</h3>
                  <p className="text-sm text-muted-foreground">2D renderings and static models</p>
                </div>
                <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
                    <AlertTriangle className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">High Risk</h3>
                  <p className="text-sm text-muted-foreground">Uncertainty in purchase decisions</p>
                </div>
                <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
                    <Users className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Long Cycles</h3>
                  <p className="text-sm text-muted-foreground">Extended sales processes</p>
                </div>
                <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Remote Buyers</h3>
                  <p className="text-sm text-muted-foreground">Limited physical access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution – Immersive Real Estate */}
      <section id="solutions" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4" />
              Our Solution
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Experience Properties <span className="gradient-xr bg-clip-text text-transparent">Before They Are Built</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform real estate with XR walkthroughs, metaverse spaces, and virtual staging. 
              Enable buyers to truly experience their future homes and make confident decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {realEstateFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group glass-card p-8 hover:bg-surface-elevated/80 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">
                    <div className="p-3 rounded-2xl bg-surface-elevated/50 w-fit mb-4">
                      <Icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`text-sm font-medium ${feature.color}`}>
                      Learn more →
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technology Benefits */}
          <div className="glass-card p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Powered by <span className="gradient-xr bg-clip-text text-transparent">Switch XR Technology</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our ultra-low latency streaming and immersive interaction technology brings 
                photorealistic property experiences to buyers across the MENA region.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4">
                  <div className="text-2xl font-bold text-xr-blue mb-2">&lt;100ms</div>
                  <div className="text-sm text-muted-foreground">Ultra-low latency streaming</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-xr-purple mb-2">4K+</div>
                  <div className="text-sm text-muted-foreground">Photorealistic quality</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-xr-pink mb-2">Multi-User</div>
                  <div className="text-sm text-muted-foreground">Collaborative experiences</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Focus – MENA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-xr-cyan/10 text-xr-cyan rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Regional Focus
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Building the Future of <span className="gradient-xr bg-clip-text text-transparent">Real Estate in MENA</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Starting with key markets across the Middle East and North Africa, 
              we're bringing immersive property experiences to the region's most dynamic real estate markets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Map/Visual Placeholder */}
            <div className="glass-card p-12 text-center">
              <div className="w-full h-80 bg-gradient-to-br from-xr-blue/20 to-xr-purple/20 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <Globe className="w-24 h-24 text-xr-cyan mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">MENA Region</h3>
                  <p className="text-muted-foreground">Interactive map coming soon</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Interactive map showing our deployment across the MENA region
              </p>
            </div>

            {/* Target Cities */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Target Markets</h3>
              <div className="grid gap-4">
                {menaCities.map((city, index) => (
                  <div key={city.name} className="glass-card p-4 hover:bg-surface-elevated/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">{city.name}</h4>
                        <p className="text-sm text-muted-foreground">{city.country}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        city.status === 'Active' 
                          ? 'bg-green-500/20 text-green-400' 
                          : city.status === 'Launching Q2'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {city.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="glass-card p-6 mt-8">
                <h4 className="font-semibold text-foreground mb-3">Cultural & Regional Compliance</h4>
                <p className="text-sm text-muted-foreground">
                  Our platform respects local customs, privacy requirements, and cultural preferences 
                  across all MENA markets, ensuring seamless adoption and user comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
              Partner with Switch Spaces to Shape the{" "}
              <span className="gradient-xr bg-clip-text text-transparent">
                Future of Property Experiences
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the revolution in MENA real estate. Experience the future of property visualization, 
              sales, and customer engagement through immersive XR technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                variant="hero" 
                size="lg"
                className="group px-10 py-6 text-lg"
                asChild
              >
                <a href="https://cal.com/switchxr/15min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-6 h-6 mr-3" />
                  Book a Demo
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                variant="glass" 
                size="lg"
                className="px-10 py-6 text-lg"
                asChild
              >
                <a href="mailto:teleport@theswitch.life">
                  <Mail className="w-6 h-6 mr-3" />
                  Contact Us
                </a>
              </Button>
            </div>

            <div className="space-y-4 text-center">
              <div className="text-sm text-muted-foreground">
                Ready to transform your real estate business?
              </div>
              <a 
                href="mailto:teleport@theswitch.life"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-medium"
              >
                <Mail className="w-4 h-4" />
                teleport@theswitch.life
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-border/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-lg font-bold text-xr-blue mb-1">MENA Focus</div>
                  <div className="text-xs text-muted-foreground">Regional expertise</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-xr-purple mb-1">Cultural Fit</div>
                  <div className="text-xs text-muted-foreground">Local compliance</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-xr-pink mb-1">Proven Tech</div>
                  <div className="text-xs text-muted-foreground">Switch XR platform</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-xr-cyan mb-1">Scalable</div>
                  <div className="text-xs text-muted-foreground">Enterprise ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwitchSpaces;
