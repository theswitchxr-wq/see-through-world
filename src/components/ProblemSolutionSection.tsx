import { AlertTriangle, CheckCircle, Zap, Shield } from "lucide-react";

export const ProblemSolutionSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-medium">
              <AlertTriangle className="w-4 h-4" />
              The Problem
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Remote ≠ Present
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Video calls are <span className="text-destructive font-semibold">flat</span>, 
                livestreams are <span className="text-destructive font-semibold">passive</span>, 
                and VR worlds are <span className="text-destructive font-semibold">synthetic</span>.
              </p>
              
              <p>
                Billions are spent on travel for training, audits, and collaboration — 
                yet true <span className="text-foreground font-semibold">embodied presence</span> is missing.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 border-l-4 border-l-destructive">
                <div className="text-2xl font-bold text-destructive mb-1">$1.4T</div>
                <div className="text-sm text-muted-foreground">Annual business travel</div>
              </div>
              <div className="glass-card p-4 border-l-4 border-l-destructive">
                <div className="text-2xl font-bold text-destructive mb-1">60%</div>
                <div className="text-sm text-muted-foreground">Remote work fatigue</div>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              Our Solution
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              True <span className="gradient-xr bg-clip-text text-transparent">Embodied</span> Presence
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Switch delivers <span className="text-xr-blue font-semibold">ultra-low latency</span>, 
                two-way POV streaming. See through another's eyes, request actions with micro-controls, 
                and collaborate with built-in AI assistance.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 glass-card p-4 hover:bg-surface-elevated/50 transition-colors">
                <div className="p-2 rounded-lg bg-xr-blue/20">
                  <Zap className="w-5 h-5 text-xr-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Ultra-Low Latency</h3>
                  <p className="text-sm text-muted-foreground">Real-time streaming with &lt;100ms delay</p>
                </div>
              </div>

              <div className="flex items-start gap-4 glass-card p-4 hover:bg-surface-elevated/50 transition-colors">
                <div className="p-2 rounded-lg bg-xr-purple/20">
                  <CheckCircle className="w-5 h-5 text-xr-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Two-Way Controls</h3>
                  <p className="text-sm text-muted-foreground">Interactive micro-movements and requests</p>
                </div>
              </div>

              <div className="flex items-start gap-4 glass-card p-4 hover:bg-surface-elevated/50 transition-colors">
                <div className="p-2 rounded-lg bg-xr-pink/20">
                  <Shield className="w-5 h-5 text-xr-pink" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Trust & Safety</h3>
                  <p className="text-sm text-muted-foreground">Built-in consent flows and secure moderation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};