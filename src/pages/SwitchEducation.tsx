import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, GraduationCap, Eye, Users, MapPin, Calendar, Mail, CheckCircle, AlertTriangle, Zap, Globe, Shield, BookOpen, Brain, Award, Building2 } from "lucide-react";
import xrEducationClassroom from "@/assets/xr-education-classroom.jpg";
import xrEducationLab from "@/assets/xr-education-lab.jpg";
import vrImage from "@/assets/vr image.webp";
import lxrnImage from "@/assets/lxrn5-BRIVqSAU.png";
import vrImg3 from "@/assets/vr-img3-D5dlaqXP.png";

const LearnSpaces = () => {
  // Set page title and meta description
  useEffect(() => {
    document.title = "LearnSpaces | XR Assisted Learning";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform education with XR virtual classrooms, immersive learning experiences, and interactive training solutions for students and professionals worldwide.');
    }
  }, []);

  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const educationFeatures = [
    {
      icon: BookOpen,
      title: "Virtual Classrooms & Lecture Halls",
      description: "Immersive 3D learning environments where students can attend classes from anywhere in the world",
      color: "text-xr-blue"
    },
    {
      icon: Brain,
      title: "Interactive Learning Simulations",
      description: "Hands-on training through XR simulations for complex subjects like science, medicine, and engineering",
      color: "text-xr-purple"
    },
    {
      icon: Users,
      title: "Collaborative Study Groups",
      description: "Multi-user virtual study spaces where students can work together on projects and assignments",
      color: "text-xr-pink"
    }
  ];

  const educationStats = [
    { metric: "85%", description: "Improved retention rates" },
    { metric: "60%", description: "Faster learning pace" },
    { metric: "95%", description: "Student engagement" },
    { metric: "40%", description: "Reduced training costs" }
  ];

  const targetMarkets = [
    { name: "Higher Education", description: "Universities and colleges", status: "Active" },
    { name: "Corporate Training", description: "Professional development", status: "Launching Q2" },
    { name: "K-12 Schools", description: "Primary and secondary education", status: "Planning" },
    { name: "Medical Training", description: "Healthcare education", status: "Active" },
    { name: "Technical Skills", description: "Engineering and IT training", status: "Planning" },
    { name: "Language Learning", description: "Immersive language education", status: "Planning" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background with subtle immersive visual */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-background via-surface to-background" />
          {/* VR Image Background */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5" style={{ backgroundImage: `url(${vrImage})` }} />
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full gradient-xr opacity-20 animate-float" />
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full gradient-hero opacity-10 animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-xr-cyan/20 animate-float" style={{ animationDelay: "4s" }} />
          <div className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-xr-purple/15 animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-1/3 left-1/3 w-28 h-28 rounded-full bg-xr-pink/15 animate-float" style={{ animationDelay: "3s" }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm font-medium text-primary">
              <GraduationCap className="w-4 h-4" />
              Immersive Education
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-foreground glow-text">LearnSpaces:</span>
              <span className="block gradient-xr bg-clip-text text-transparent animate-gradient">
                XR Assisted Learning
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Transform education with immersive XR experiences for{" "}
              <span className="text-xr-cyan font-semibold">students</span>,{" "}
              <span className="text-xr-purple font-semibold">educators</span>, and{" "}
              <span className="text-xr-pink font-semibold">institutions</span> worldwide.
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
                  <Calendar className="w-5 h-5 mr-2" />
                  Get a Free Workshop Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                variant="glass" 
                size="lg"
                className="px-8 py-6 text-lg"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Download App
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
              {educationStats.map((stat, index) => (
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

      {/* VR Image Showcase - First Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
            <img 
              src={vrImage} 
              alt="Students experiencing immersive VR education with Meta Quest headsets"
              className="w-full h-[50vh] min-h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="text-white px-8 animate-fade-in">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">Immersive VR Learning Experience</h2>
                <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-slide-up-delayed">Experience education like never before with cutting-edge VR technology that brings learning to life</p>
              </div>
            </div>
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
                Education: <span className="text-destructive">Limited Engagement</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Traditional education relies on <span className="text-destructive font-semibold">passive learning</span>, 
                  <span className="text-destructive font-semibold"> limited interaction</span>, and 
                  <span className="text-destructive font-semibold"> geographical barriers</span>.
                </p>
                
                <p>
                  Students face <span className="text-foreground font-semibold">low engagement</span> with 
                  high dropout rates and limited access to quality education resources.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 border-l-4 border-l-destructive">
                  <div className="text-2xl font-bold text-destructive mb-1">30%</div>
                  <div className="text-sm text-muted-foreground">Dropout rate</div>
                </div>
                <div className="glass-card p-4 border-l-4 border-l-destructive">
                  <div className="text-2xl font-bold text-destructive mb-1">45%</div>
                  <div className="text-sm text-muted-foreground">Low engagement</div>
                </div>
              </div>
            </div>

            {/* Supporting Graphics */}
            <div className="space-y-8">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Passive Learning</h3>
                  <p className="text-sm text-muted-foreground">Limited interaction and engagement</p>
                </div>
                <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Geographic Barriers</h3>
                  <p className="text-sm text-muted-foreground">Limited access to quality education</p>
                </div>
                <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
                    <Users className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Isolation</h3>
                  <p className="text-sm text-muted-foreground">Lack of collaborative learning</p>
                </div>
                <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
                    <AlertTriangle className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">High Costs</h3>
                  <p className="text-sm text-muted-foreground">Expensive training and resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution – Immersive Education */}
      <section id="solutions" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4" />
              Our Solution
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Learn Through <span className="gradient-xr bg-clip-text text-transparent">XR Assisted Experiences</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform education with XR virtual classrooms, interactive simulations, and collaborative learning 
              environments that engage students and improve learning outcomes.
            </p>
          </div>

          {/* Hero Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="glass-card p-4 hover:scale-105 transition-transform">
              <img 
                src={xrEducationClassroom} 
                alt="Virtual XR classroom with students learning in immersive environment"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-foreground mb-2">Virtual Classrooms</h3>
              <p className="text-sm text-muted-foreground">Immersive learning environments</p>
            </div>
            <div className="glass-card p-4 hover:scale-105 transition-transform">
              <img 
                src={vrImg3} 
                alt="Virtual reality classroom with students collaborating"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-foreground mb-2">Collaborative VR Spaces</h3>
              <p className="text-sm text-muted-foreground">Multi-user virtual learning environments</p>
            </div>
          </div>

          {/* Creative Image Showcase */}
          <div className="relative mb-16">
            {/* Parallax-style layered images */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Floating image with overlay */}
              <div className="relative group">
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-xr-purple/30 to-xr-blue/30 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={lxrnImage} 
                    alt="Students using XR headsets for immersive learning"
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-2">Immersive XR Learning</h3>
                    <p className="text-sm opacity-90">Experience education through cutting-edge VR technology</p>
                  </div>
                </div>
              </div>

              {/* Right side - Stacked cards with image */}
              <div className="space-y-6">
                <div className="glass-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-xr-blue/20">
                      <Brain className="w-6 h-6 text-xr-blue" />
                    </div>
                    <h3 className="text-xl font-bold">AI-Powered Learning</h3>
                  </div>
                  <p className="text-muted-foreground">Personalized education paths powered by artificial intelligence</p>
                </div>

                <div className="relative group">
                  <div className="absolute -top-2 -right-2 w-full h-full bg-gradient-to-br from-xr-pink/20 to-xr-cyan/20 rounded-xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-300"></div>
                  <div className="relative z-10 overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src={vrImg3} 
                      alt="Virtual reality classroom with students collaborating"
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="font-semibold">Collaborative VR Spaces</h4>
                      <p className="text-xs opacity-90">Multi-user virtual classrooms</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-xr-pink/20">
                      <Award className="w-6 h-6 text-xr-pink" />
                    </div>
                    <h3 className="text-xl font-bold">Real-time Assessment</h3>
                  </div>
                  <p className="text-muted-foreground">Instant feedback and progress tracking in immersive environments</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {educationFeatures.map((feature, index) => {
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
                Our immersive learning platform combines ultra-low latency streaming with interactive 
                educational content to create engaging learning experiences for students worldwide.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4">
                  <div className="text-2xl font-bold text-xr-blue mb-2">Real-time</div>
                  <div className="text-sm text-muted-foreground">Interactive collaboration</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-xr-purple mb-2">Immersive</div>
                  <div className="text-sm text-muted-foreground">3D learning environments</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-xr-pink mb-2">Scalable</div>
                  <div className="text-sm text-muted-foreground">Global education access</div>
                </div>
              </div>
            </div>
          </div>

          {/* Creative Floating Technology Showcase */}
          <div className="relative mb-16 overflow-hidden">
            {/* Background floating elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-20 h-20 bg-xr-blue/10 rounded-full animate-float"></div>
              <div className="absolute top-20 right-20 w-16 h-16 bg-xr-purple/10 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
              <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-xr-pink/10 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Creative image integration */}
              <div className="space-y-8">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-xr-blue/20 to-xr-purple/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative glass-card p-8 hover:scale-105 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-xr-blue/30 to-xr-purple/30">
                        <Zap className="w-8 h-8 text-xr-blue" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Real-time Collaboration</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Students and teachers can interact in real-time within virtual classrooms, 
                      sharing knowledge and collaborating on projects seamlessly.
                    </p>
                    <div className="flex gap-2">
                      <div className="w-4 h-4 rounded-full bg-xr-blue animate-pulse"></div>
                      <div className="w-4 h-4 rounded-full bg-xr-purple animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                      <div className="w-4 h-4 rounded-full bg-xr-pink animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                      <div className="w-4 h-4 rounded-full bg-xr-cyan animate-pulse" style={{ animationDelay: "0.6s" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Interactive showcase */}
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-xr-pink/20 to-xr-cyan/20 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-700"></div>
                <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl group">
                  <div className="w-full h-96 bg-gradient-to-br from-xr-pink/40 to-xr-cyan/40 rounded-3xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
                        <Shield className="w-16 h-16 mx-auto" />
                      </div>
                      <h4 className="text-2xl font-bold mb-2">Advanced XR Technology</h4>
                      <p className="text-sm opacity-90">Next-generation immersive learning</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                        <Shield className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium">Secure Learning Environment</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Advanced XR Technology</h4>
                    <p className="text-sm opacity-90">Next-generation immersive learning platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Creative Mosaic Image Gallery */}
          <div className="relative mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Experience the Future of Learning
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                See how students are already transforming their education through immersive XR experiences
              </p>
            </div>

            {/* Mosaic Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {/* Large featured image */}
              <div className="md:col-span-2 lg:col-span-2 row-span-2 relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-xr-purple/30 to-xr-blue/30 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl h-96">
                  <img 
                    src={vrImage} 
                    alt="Students experiencing immersive VR education"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">Immersive Learning Labs</h4>
                    <p className="text-sm opacity-90">Students exploring virtual worlds for enhanced education</p>
                  </div>
                </div>
              </div>

              {/* Medium image with overlay */}
              <div className="md:col-span-1 lg:col-span-1 relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-xr-pink/20 to-xr-cyan/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative z-10 overflow-hidden rounded-xl shadow-lg h-48">
                  <div className="w-full h-full bg-gradient-to-br from-xr-pink/30 to-xr-cyan/30 rounded-xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <Eye className="w-12 h-12 mx-auto mb-2 animate-pulse" />
                      <h5 className="font-semibold text-sm">XR Technology</h5>
                      <p className="text-xs opacity-90">Advanced learning tools</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>

              {/* Small image with floating effect */}
              <div className="md:col-span-1 lg:col-span-1 relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-xr-blue/20 to-xr-purple/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative z-10 overflow-hidden rounded-xl shadow-lg h-48">
                  <img 
                    src={xrEducationLab} 
                    alt="Students collaborating in virtual laboratory simulation"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h5 className="font-semibold text-sm">Interactive Simulations</h5>
                    <p className="text-xs opacity-90">Hands-on virtual experiments</p>
                  </div>
                </div>
              </div>

              {/* Feature cards */}
              <div className="md:col-span-3 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-xr-blue/20">
                      <Brain className="w-5 h-5 text-xr-blue" />
                    </div>
                    <h4 className="font-bold">AI-Powered Learning</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Personalized education paths</p>
                </div>
                <div className="glass-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-xr-pink/20">
                      <Award className="w-5 h-5 text-xr-pink" />
                    </div>
                    <h4 className="font-bold">Real-time Assessment</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Instant progress tracking</p>
                </div>
              </div>
            </div>
          </div>

          {/* LearnSpace Labs for K-12 Schools */}
          <div className="glass-card p-12 mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-xr-purple/10 text-xr-purple rounded-full text-sm font-medium mb-6">
                  <Building2 className="w-4 h-4" />
                  K-12 Education
                </div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                <span className="gradient-xr bg-clip-text text-transparent">LearnSpaces Labs</span> for Schools
              </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Transform your school with dedicated LearnSpaces Labs - immersive XR learning environments 
                  that bring subjects to life and engage students like never before.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-xr-blue/20 flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-xr-blue" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">Dedicated Learning Spaces</h4>
                      <p className="text-muted-foreground">
                        Complete XR lab setups with Meta Quest headsets, interactive displays, and 
                        collaborative learning stations for up to 30 students.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-xr-purple/20 flex-shrink-0">
                      <Brain className="w-6 h-6 text-xr-purple" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">Curriculum Integration</h4>
                      <p className="text-muted-foreground">
                        Pre-built lesson plans aligned with national standards for Science, History, 
                        Geography, and STEM subjects across all grade levels.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-xr-pink/20 flex-shrink-0">
                      <Users className="w-6 h-6 text-xr-pink" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">Teacher Training & Support</h4>
                      <p className="text-muted-foreground">
                        Comprehensive training programs for educators, ongoing technical support, 
                        and lesson plan customization assistance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="glass-card p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Lab Package Includes:</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>15-30 Meta Quest 3 headsets</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>Interactive whiteboard integration</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>LearnSpaces platform access</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>Curriculum-aligned content library</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>Teacher dashboard & analytics</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>Setup, training & ongoing support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="glass-card p-6 text-center">
                  <div className="text-3xl font-bold text-xr-blue mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Student Engagement Increase</div>
                </div>
                <div className="glass-card p-6 text-center">
                  <div className="text-3xl font-bold text-xr-purple mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Improved Test Scores</div>
                </div>
                <div className="glass-card p-6 text-center">
                  <div className="text-3xl font-bold text-xr-pink mb-2">85%</div>
                  <div className="text-sm text-muted-foreground">Teacher Satisfaction</div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="group px-8 py-4 text-lg"
                  asChild
                >
                  <a href="mailto:teleport@theswitch.life">
                    <Calendar className="w-5 h-5 mr-3" />
                    Request School Demo
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* LearnSpace App Download Section */}
          <div className="glass-card p-12 text-center mt-16">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-xr-blue/10 text-xr-blue rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                Mobile Learning
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Download <span className="gradient-xr bg-clip-text text-transparent">LearnSpaces App</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Take immersive learning with you anywhere. Experience XR education on your mobile device 
                with our dedicated LearnSpaces application.
              </p>
              
              <div className="flex justify-center items-center mb-8">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="group px-8 py-4 text-lg"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ArrowRight className="w-5 h-5 mr-3" />
                    Download LearnSpaces App
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border/30">
                <div className="p-4">
                  <div className="text-2xl font-bold text-xr-blue mb-2">Offline Mode</div>
                  <div className="text-sm text-muted-foreground">Learn without internet connection</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-xr-purple mb-2">AR Support</div>
                  <div className="text-sm text-muted-foreground">Augmented reality features</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-xr-pink mb-2">Progress Sync</div>
                  <div className="text-sm text-muted-foreground">Cross-device synchronization</div>
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
              Transforming <span className="gradient-xr bg-clip-text text-transparent">Education Across Industries</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From universities to corporate training, we're bringing immersive learning experiences 
              to educational institutions and organizations worldwide.
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
              Partner with LearnSpaces to Shape the{" "}
              <span className="gradient-xr bg-clip-text text-transparent">
                Future of Learning
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the revolution in education. Experience the future of immersive learning, 
              virtual classrooms, and interactive training through XR technology.
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
                Ready to transform your educational institution?
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
                  <div className="text-lg font-bold text-xr-blue mb-1">Engaging</div>
                  <div className="text-xs text-muted-foreground">Interactive learning</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-xr-purple mb-1">Accessible</div>
                  <div className="text-xs text-muted-foreground">Global reach</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-xr-pink mb-1">Effective</div>
                  <div className="text-xs text-muted-foreground">Proven results</div>
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

export default LearnSpaces;
