import { TrendingUp, Users, Globe, Zap } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "$212B+",
    label: "Addressable Market",
    sublabel: "Telepresence & Enterprise Collaboration",
    color: "text-xr-blue"
  },
  {
    icon: Users,
    value: "100K+",
    label: "Previous Users",
    sublabel: "Combined across founders' platforms",
    color: "text-xr-purple"
  },
  {
    icon: Globe,
    value: "6+",
    label: "Support Programs",
    sublabel: "Including Meta XR & Government backing",
    color: "text-xr-pink"
  },
  {
    icon: Zap,
    value: "Patent",
    label: "Applied Technology",
    sublabel: "XRtouch hardware innovation",
    color: "text-xr-cyan"
  }
];

const marketSegments = [
  {
    segment: "Enterprise Telepresence",
    size: "$89B",
    growth: "+15% CAGR",
    description: "Remote collaboration and field operations"
  },
  {
    segment: "Creator Economy",
    size: "$104B",
    growth: "+23% CAGR", 
    description: "Live streaming and content monetization"
  },
  {
    segment: "Virtual Tourism",
    size: "$19B",
    growth: "+31% CAGR",
    description: "Immersive travel experiences"
  }
];

export const TractionSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Market <span className="gradient-xr bg-clip-text text-transparent">Traction</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Validated demand in a rapidly growing market with strong institutional support
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="group glass-card p-8 text-center hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <Icon className={`w-10 h-10 ${metric.color} mx-auto mb-4`} />
                  <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Market Breakdown */}
        <div className="glass-card p-12">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Market Opportunity Breakdown
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {marketSegments.map((segment, index) => (
              <div
                key={segment.segment}
                className="p-8 bg-surface-elevated/50 rounded-2xl hover:bg-surface-elevated/80 transition-colors"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {segment.size}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    {segment.segment}
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    <TrendingUp className="w-3 h-3" />
                    {segment.growth}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {segment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Advantage */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Our Competitive Edge
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <div className="text-xl font-bold text-xr-blue mb-2">First-Mover</div>
              <div className="text-sm text-muted-foreground">
                First POV marketplace with two-way controls
              </div>
            </div>
            <div className="glass-card p-6">
              <div className="text-xl font-bold text-xr-purple mb-2">Patent IP</div>
              <div className="text-sm text-muted-foreground">
                Proprietary XRtouch hardware technology
              </div>
            </div>
            <div className="glass-card p-6">
              <div className="text-xl font-bold text-xr-pink mb-2">Proven Team</div>
              <div className="text-sm text-muted-foreground">
                Combined 100K+ users from previous ventures
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};