import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { Home, Building2, GraduationCap, Shield, ChevronDown } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gradient-xr flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">Switch</span>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a 
                    href="/" 
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Home
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Solutions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Solutions
                  <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="glass-card border border-border/30 shadow-lg">
                  <div className="grid gap-3 p-6 w-[400px]">
                    {/* Switch Spaces */}
                    <NavigationMenuLink asChild>
                      <a
                        href="/switch-spaces"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-surface-elevated/80 hover:text-accent-foreground focus:bg-surface-elevated/80 focus:text-accent-foreground border border-transparent hover:border-border/30"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="p-2 rounded-lg bg-xr-blue/20">
                            <Building2 className="w-5 h-5 text-xr-blue" />
                          </div>
                          <div>
                            <div className="text-sm font-medium leading-none">Switch Spaces</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              Immersive real estate experiences for MENA region
                            </p>
                          </div>
                        </div>
                      </a>
                    </NavigationMenuLink>

                    {/* Switch Education */}
                    <NavigationMenuLink asChild>
                      <a
                        href="/switch-education"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-surface-elevated/80 hover:text-accent-foreground focus:bg-surface-elevated/80 focus:text-accent-foreground border border-transparent hover:border-border/30"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="p-2 rounded-lg bg-xr-purple/20">
                            <GraduationCap className="w-5 h-5 text-xr-purple" />
                          </div>
                          <div>
                            <div className="text-sm font-medium leading-none">Switch Education</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              Virtual classrooms and immersive learning experiences
                            </p>
                          </div>
                        </div>
                      </a>
                    </NavigationMenuLink>

                    {/* Switch Defence */}
                    <NavigationMenuLink asChild>
                      <a
                        href="/switch-defence"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-surface-elevated/80 hover:text-accent-foreground focus:bg-surface-elevated/80 focus:text-accent-foreground border border-transparent hover:border-border/30"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="p-2 rounded-lg bg-xr-pink/20">
                            <Shield className="w-5 h-5 text-xr-pink" />
                          </div>
                          <div>
                            <div className="text-sm font-medium leading-none">Switch Defence</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              Secure military training and simulation platforms
                            </p>
                          </div>
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="sm"
            className="px-6"
            asChild
          >
            <a href="https://cal.com/switchxr/15min" target="_blank" rel="noopener noreferrer">
              Book Demo
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};
