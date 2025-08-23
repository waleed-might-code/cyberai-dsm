import { Button } from "@/components/ui/button"
import { AlertTriangle, Clock, DollarSign, Info, Shield } from "lucide-react"
import { Link } from "react-router-dom"

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-cyber-dark via-cyber-navy to-cyber-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/10 via-transparent to-cyber-teal/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-cyber-light mb-6">
            Don't Wait for the Next Breach
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Cyber threats targeting Gulf enterprises evolve daily. NCA and SAMA compliance deadlines approach. 
            The cost of non-compliance can reach millions in penalties.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center gap-3 text-lg">
              <AlertTriangle className="w-6 h-6 text-cyber-purple" />
              <span className="text-cyber-light">Daily Evolving Threats</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <Clock className="w-6 h-6 text-cyber-teal" />
              <span className="text-cyber-light">Compliance Deadlines</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <Shield className="w-6 h-6 text-cyber-purple" />
              <span className="text-cyber-light">Heavy Penalties</span>
            </div>
          </div>

          <div className="bg-cyber-navy/50 rounded-2xl p-8 mb-8 border border-cyber-purple/30">
            <p className="text-lg text-cyber-light mb-4">
              <strong className="text-cyber-teal">Act now</strong> to protect your organization with AI-powered cybersecurity 
              designed specifically for Saudi and Gulf enterprises.
            </p>
            <p className="text-muted-foreground">
              Join leading organizations already strengthening their cyber defenses with Cyber AI.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 mb-4 group relative">
            <Button variant="cyber" size="xl" className="px-16 py-6 text-2xl" asChild>
              <Link to="/compliance-check">Try Cyber AI</Link>
            </Button>
            <Info className="w-6 h-6 text-muted-foreground group-hover:text-cyber-teal cursor-help transition-colors" />
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-2 bg-popover border border-border rounded-md text-sm text-popover-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
              This is a demonstration of our text compliance AI tool
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Start your free trial today • No installation required • Full Gulf compliance support
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTASection