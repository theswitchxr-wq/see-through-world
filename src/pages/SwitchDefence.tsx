import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, Shield, Eye, Users, MapPin, Calendar, Mail, CheckCircle, AlertTriangle, Zap, Globe, Target, Lock, Award } from "lucide-react";
import xrDefenceTraining from "@/assets/xr-defence-training.jpg";
import xrDefenceSimulation from "@/assets/xr-defence-simulation.jpg";

const SwitchDefence = () => {
  // Set page title and meta description
  useEffect(() => {
    document.title = "Switch Defence | Secure Military Training & Simulation";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Secure XR military training platforms, immersive simulation environments, and tactical training solutions for defense forces and security organizations.');
    }
  }, []);

  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const defenceFeatures = [
    {
      icon: Target,
      title: "Tactical Training Simulations",
      description: "Immersive combat scenarios and tactical training environments for military personnel",
      color: "text-xr-blue"
    },
    {
      icon: Shield,
      title: "Secure Command Centers",
      description: "Protected virtual command and control environments for strategic planning and operations",
      color: "text-xr-purple"
    },
    {
      icon: Lock,
      title: "Classified Training Modules",
      description: "Highly secure XR training platforms with military-grade encryption and access controls",
      color: "text-xr-pink"
    }
  ];

  const defenceStats = [
    { metric: "99.9%", description: "Security compliance" },
    { metric: "70%", description: "Training cost reduction" },
    { metric: "85%", description: "Mission readiness" },
    { metric: "60%", description: "Faster deployment" }
  ];

  const targetMarkets = [
    { name: "Military Forces", description: "Army, Navy, Air Force training", status: "Active" },
    { name: "Special Operations", description: "Elite unit training", status: "Active" },
    { name: "Defense Contractors", description: "Equipment training", status: "Launching Q2" },
    { name: "Intelligence Agencies", description: "Covert operations training", status: "Planning" },
    { name: "Border Security", description: "Customs and border protection", status: "Planning" },
    { name: "Emergency Response", description: "Crisis management training", status: "Planning" }
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
          <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-red-500/15 animate-float" style={{ animationDelay: "1.5s" }} />
          <div className="absolute bottom-1/4 left-1/2 w-20 h-20 rounded-full bg-blue-500/15 animate-float" style={{ animationDelay: "2.5s" }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm font-medium text-primary">
              <Shield className="w-4 h-4" />
              Secure Military Training
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-foreground glow-text">Switch Defence:</span>
              <span className="block gradient-xr bg-clip-text text-transparent animate-gradient">
                Training Without Risk
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Secure XR training platforms for{" "}
              <span className="text-xr-cyan font-semibold">military forces</span>,{" "}
              <span className="text-xr-purple font-semibold">defense contractors</span>, and{" "}
              <span className="text-xr-pink font-semibold">security organizations</span> worldwide.
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
              {defenceStats.map((stat, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-xr-blue mb-2">{stat.metric}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              ))}
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
                Military Training: <span className="text-destructive">High Risk, High Cost</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Traditional military training involves <span className="text-destructive font-semibold">dangerous scenarios</span>, 
                  <span className="text-destructive font-semibold"> expensive equipment</span>, and 
                  <span className="text-destructive font-semibold"> limited repetition</span>.
                </p>
                
                <p>
                  Forces face <span className="text-foreground font-semibold">safety risks</span> with 
                  high training costs and limited access to realistic combat environments.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 border-l-4 border-l-destructive">
                  <div className="text-2xl font-bold text-destructive mb-1">$2.5M</div>
                  <div className="text-sm text-muted-foreground">Average training cost</div>
                </div>
                <div className="glass-card p-4 border-l-4 border-l-destructive">
                  <div className="text-2xl font-bold text-destructive mb-1">15%</div>
                  <div className="text-sm text-muted-foreground">Training accidents</div>
                </div>
              </div>
            </div>

            {/* Supporting Graphics */}
            <div className="space-y-8">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
                    <AlertTriangle className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Safety Risks</h3>
                  <p className="text-sm text-muted-foreground">Dangerous training scenarios</p>
                </div>
                <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
                    <Target className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Limited Scenarios</h3>
                  <p className="text-sm text-muted-foreground">Restricted training environments</p>
                </div>
                <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">High Costs</h3>
                  <p className="text-sm text-muted-foreground">Expensive equipment and logistics</p>
                </div>
                <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Geographic Limits</h3>
                  <p className="text-sm text-muted-foreground">Location-dependent training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution – Secure Military Training */}
      <section id="solutions" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4" />
              Our Solution
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Train in <span className="gradient-xr bg-clip-text text-transparent">Secure Virtual Environments</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform military training with secure XR simulations, tactical environments, and 
              classified training modules that ensure mission readiness without risk.
            </p>
          </div>

          {/* Hero Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="glass-card p-4 hover:scale-105 transition-transform">
              <img 
                src={xrDefenceTraining} 
                alt="Military personnel in tactical XR training simulation"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-foreground mb-2">Tactical Training</h3>
              <p className="text-sm text-muted-foreground">Secure military simulations</p>
            </div>
            <div className="glass-card p-4 hover:scale-105 transition-transform">
              <img 
                src={xrDefenceSimulation} 
                alt="Soldiers using XR headsets for secure tactical simulation"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-foreground mb-2">Command Centers</h3>
              <p className="text-sm text-muted-foreground">Virtual operations environment</p>
            </div>
          </div>

          {/* Creative Defence Showcase */}
          <div className="relative mb-16 overflow-hidden">
            {/* Background floating elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 right-10 w-24 h-24 bg-red-500/10 rounded-full animate-float"></div>
              <div className="absolute bottom-20 left-20 w-16 h-16 bg-blue-500/10 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-green-500/10 rounded-full animate-float" style={{ animationDelay: "3s" }}></div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Hero image with creative overlay */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-red-500/30 to-orange-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                  <div className="w-full h-80 bg-gradient-to-br from-red-500/40 to-orange-500/40 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <Target className="w-20 h-20 mx-auto mb-4 animate-pulse" />
                      <h3 className="text-2xl font-bold mb-2">Advanced Combat Training</h3>
                      <p className="text-lg opacity-90">Immersive battlefield simulations</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Tactical Excellence</h4>
                    <p className="text-sm opacity-90">Realistic scenarios for enhanced military training</p>
                  </div>
                </div>
              </div>

              {/* Right - Stacked feature cards */}
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                  <div className="relative z-10 glass-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-blue-500/20">
                        <Shield className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="text-xl font-bold">Secure Infrastructure</h3>
                    </div>
                    <p className="text-muted-foreground">Military-grade security protocols and encrypted communications</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                  <div className="relative z-10 glass-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-green-500/20">
                        <Users className="w-6 h-6 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold">Squad Coordination</h3>
                    </div>
                    <p className="text-muted-foreground">Multi-soldier tactical training and communication systems</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                  <div className="relative z-10 glass-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-purple-500/20">
                        <Lock className="w-6 h-6 text-purple-500" />
                      </div>
                      <h3 className="text-xl font-bold">Classified Operations</h3>
                    </div>
                    <p className="text-muted-foreground">Secure training environments for sensitive missions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {defenceFeatures.map((feature, index) => {
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

          {/* Technology Showcase */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-red-500/20">
                  <Target className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Advanced Simulation Engine</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                State-of-the-art physics simulation and AI-driven scenarios provide 
                realistic training environments that adapt to different skill levels.
              </p>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-blue-500/20">
                  <Lock className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Military-Grade Security</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                End-to-end encryption, secure authentication, and compliance with 
                military security standards ensure complete operational security.
              </p>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="glass-card p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                <span className="gradient-xr bg-clip-text text-transparent">Military-Grade Security</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform meets the highest security standards with end-to-end encryption, 
                secure authentication, and compliance with military security protocols.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4">
                  <div className="text-2xl font-bold text-xr-blue mb-2">AES-256</div>
                  <div className="text-sm text-muted-foreground">End-to-end encryption</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-xr-purple mb-2">Multi-Factor</div>
                  <div className="text-sm text-muted-foreground">Secure authentication</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-xr-pink mb-2">Compliant</div>
                  <div className="text-sm text-muted-foreground">Military standards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-xr-cyan/10 text-xr-cyan rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Target Markets
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Serving <span className="gradient-xr bg-clip-text text-transparent">Defense & Security</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From military forces to intelligence agencies, we provide secure training solutions 
              for defense and security organizations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetMarkets.map((market, index) => (
              <div key={market.name} className="glass-card p-6 hover:bg-surface-elevated/50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">{market.name}</h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    market.status === 'Active' 
                      ? 'bg-green-500/20 text-green-400' 
                      : market.status === 'Launching Q2'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {market.status}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{market.description}</p>
              </div>
            ))}
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
              Partner with Switch Defence to Secure the{" "}
              <span className="gradient-xr bg-clip-text text-transparent">
                Future of Military Training
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the revolution in military training. Experience secure, immersive training 
              solutions that enhance mission readiness and operational effectiveness.
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
                Ready to enhance your training capabilities?
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
                  <div className="text-lg font-bold text-xr-blue mb-1">Secure</div>
                  <div className="text-xs text-muted-foreground">Military-grade encryption</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-xr-purple mb-1">Compliant</div>
                  <div className="text-xs text-muted-foreground">Defense standards</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-xr-pink mb-1">Effective</div>
                  <div className="text-xs text-muted-foreground">Mission readiness</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-xr-cyan mb-1">Reliable</div>
                  <div className="text-xs text-muted-foreground">Battle-tested</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwitchDefence;
