import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, AlertTriangle } from "lucide-react";
import heroImage from "@/assets/cyber-hero-bg.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} />
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-dark/90 via-cyber-navy/80 to-cyber-dark/90" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-cyber-light mb-6 leading-tight">
            The Future of 
            <span className="bg-gradient-to-r from-cyber-purple to-cyber-teal bg-clip-text text-transparent"> AI Cybersecurity</span>
            <br />for Saudi & Gulf Enterprises
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-powered threat detection with real-time compliance for Saudi NCA ECC-1, 
            SAMA, Aramco CCC, PCI DSS, and GDPR. Built for the evolving cyber landscape of the Gulf.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-cyber-purple/20 text-cyber-purple border-cyber-purple/50">
              <Shield className="w-4 h-4 mr-2" />
              AI Threat Detection
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-cyber-teal/20 text-cyber-teal border-cyber-teal/50">
              <Zap className="w-4 h-4 mr-2" />
              Saudi & GCC Compliance
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-cyber-purple/20 text-cyber-purple border-cyber-purple/50">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Automated Incident Response
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cyber" size="xl" className="px-12 py-4 text-xl">Try Text Compliance AI Now</Button>
            <p className="text-sm text-muted-foreground">
              ☎️ Call us: <span className="text-cyber-teal">+966 11 XXX-XXXX</span>
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;