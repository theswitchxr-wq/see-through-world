import { Briefcase, GraduationCap, MapPin, Heart } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    title: "Work",
    description: "Remote audits, compliance checks, and expert assistance — without expensive travel.",
    gradient: "bg-gradient-to-br from-xr-blue/20 to-xr-cyan/20",
    iconColor: "text-xr-blue",
    examples: ["Field inspections", "Technical support", "Quality assurance"]
  },
  {
    icon: GraduationCap,
    title: "Learn",
    description: "Hands-on skill transfer. Shadow chefs, artisans, or technicians from anywhere.",
    gradient: "bg-gradient-to-br from-xr-purple/20 to-xr-pink/20",
    iconColor: "text-xr-purple",
    examples: ["Culinary training", "Craft workshops", "Medical procedures"]
  },
  {
    icon: MapPin,
    title: "Travel",
    description: "Step into cultural festivals, historic tours, and local markets in real time.",
    gradient: "bg-gradient-to-br from-xr-pink/20 to-xr-cyan/20",
    iconColor: "text-xr-pink",
    examples: ["Virtual tourism", "Cultural events", "Live exploration"]
  },
  {
    icon: Heart,
    title: "Access",
    description: "Break barriers for elderly, disabled, or remote communities to join family events.",
    gradient: "bg-gradient-to-br from-xr-cyan/20 to-xr-blue/20",
    iconColor: "text-xr-cyan",
    examples: ["Family gatherings", "Accessibility", "Global inclusion"]
  }
];

export const UseCasesSection = () => {
  return (
    <section className="py-24 px-6 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Endless <span className="gradient-xr bg-clip-text text-transparent">Possibilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform how you work, learn, travel, and connect with revolutionary POV experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={useCase.title}
                className="group glass-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`p-4 rounded-2xl ${useCase.gradient} mb-6 w-fit`}>
                  <Icon className={`w-8 h-8 ${useCase.iconColor}`} />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {useCase.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                <div className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {example}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border/50">
                  <div className="text-sm font-medium text-primary group-hover:text-primary-glow transition-colors">
                    Explore {useCase.title.toLowerCase()} →
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};