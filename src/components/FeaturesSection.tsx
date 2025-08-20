import { Eye, Gamepad2, Bot, Shield, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Embodied POV View",
    description: "See through another person's perspective with ultra-high definition streaming",
    color: "text-xr-blue"
  },
  {
    icon: Gamepad2,
    title: "Two-Way Controls",
    description: "Interact in real time with micro-movements and gesture commands",
    color: "text-xr-purple"
  },
  {
    icon: Bot,
    title: "AI Assistance",
    description: "Live translation, object labeling, and smart guidance powered by AI",
    color: "text-xr-pink"
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Consent flows, dynamic blur, and secure moderation for safe experiences",
    color: "text-xr-cyan"
  },
  {
    icon: Zap,
    title: "Ultra-Low Latency",
    description: "Experience real-time interaction with less than 100ms delay",
    color: "text-xr-blue"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with hosts and viewers worldwide through our marketplace",
    color: "text-xr-purple"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Revolutionary <span className="gradient-xr bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced technology that makes true telepresence possible
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
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

        {/* Technology Highlight */}
        <div className="mt-20 glass-card p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Powered by <span className="gradient-xr bg-clip-text text-transparent">XRtouch Hardware</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Our patent-applied motor-powered cube with AR object tracking enables immersive 
              tactile interaction, bringing physical sensation to remote experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4">
                <div className="text-2xl font-bold text-xr-blue mb-2">Patent Applied</div>
                <div className="text-sm text-muted-foreground">Innovative hardware design</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-xr-purple mb-2">AR Tracking</div>
                <div className="text-sm text-muted-foreground">Precision object detection</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-xr-pink mb-2">Haptic Feedback</div>
                <div className="text-sm text-muted-foreground">Tactile interaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};