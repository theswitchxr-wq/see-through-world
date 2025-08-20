import { Linkedin, Twitter, Mail } from "lucide-react";

const founders = [
  {
    name: "Aakash Singh Jaadon",
    role: "CEO",
    bio: "Ex-founder of Testwin (100K+ users). IIT Alumni. Expert in XR product strategy, partnerships, and compliance.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    links: {
      linkedin: "#",
      twitter: "#",
      email: "aakash@theswitch.life"
    }
  },
  {
    name: "Gaurav Purbia",
    role: "CTO",
    bio: "Ex-founder of LearnXR (no-code XR platform). IIT KGP. Pioneer in XR streaming and education deployments.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    links: {
      linkedin: "#",
      twitter: "#", 
      email: "gaurav@theswitch.life"
    }
  }
];

const advisors = [
  "XR Safety & Ethics",
  "Creator Economy",
  "Field Operations",
  "Global Travel Industry"
];

export const TeamSection = () => {
  return (
    <section className="py-24 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="gradient-xr bg-clip-text text-transparent">Founders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visionary leaders with proven track records in XR innovation and scaling technology platforms
          </p>
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="group glass-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/50 transition-colors"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-tr from-xr-blue/20 to-xr-purple/20 group-hover:opacity-0 transition-opacity" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {founder.name}
                </h3>
                <div className="text-lg font-semibold text-primary mb-4">
                  {founder.role}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {founder.bio}
                </p>

                <div className="flex justify-center gap-4">
                  <a
                    href={founder.links.linkedin}
                    className="p-2 rounded-lg bg-surface-elevated/50 hover:bg-xr-blue/20 transition-colors group/link"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover/link:text-xr-blue transition-colors" />
                  </a>
                  <a
                    href={founder.links.twitter}
                    className="p-2 rounded-lg bg-surface-elevated/50 hover:bg-xr-purple/20 transition-colors group/link"
                  >
                    <Twitter className="w-5 h-5 text-muted-foreground group-hover/link:text-xr-purple transition-colors" />
                  </a>
                  <a
                    href={`mailto:${founder.links.email}`}
                    className="p-2 rounded-lg bg-surface-elevated/50 hover:bg-xr-pink/20 transition-colors group/link"
                  >
                    <Mail className="w-5 h-5 text-muted-foreground group-hover/link:text-xr-pink transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advisors */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Backed by Expert Advisors
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {advisors.map((advisor, index) => (
              <div
                key={advisor}
                className="glass-card p-6 hover:bg-surface-elevated/50 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-sm font-medium text-primary">
                  {advisor}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Organizations */}
        <div className="mt-16 glass-card p-8">
          <h3 className="text-xl font-bold text-foreground text-center mb-6">
            Supported By
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center text-center">
            {[
              "Meta XR Startup Program",
              "Go Austria",
              "iStart Rajasthan", 
              "STPI",
              "NIDHI PRAYAS",
              "iHub Drishti"
            ].map((org, index) => (
              <div
                key={org}
                className="text-sm text-muted-foreground font-medium hover:text-foreground transition-colors"
              >
                {org}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};