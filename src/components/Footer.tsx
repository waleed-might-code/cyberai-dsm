import { Shield } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-cyber-dark border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyber-purple to-cyber-teal rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-cyber-light" />
              </div>
              <span className="text-2xl font-bold text-cyber-light">Cyber AI</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              AI-powered cybersecurity platform built for Saudi & Gulf enterprises. 
              Advanced threat detection with regional compliance automation.
            </p>
            <p className="text-sm text-muted-foreground">
              Supporting Saudi Vision 2030 through cybersecurity innovation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-cyber-light mb-4">Platform</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-cyber-teal transition-colors">Features</a></li>
              <li><a href="#testing" className="hover:text-cyber-teal transition-colors">Beta Access</a></li>
              <li><a href="#" className="hover:text-cyber-teal transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-cyber-teal transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-cyber-light mb-4">Compliance</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-cyber-teal transition-colors">NCA ECC-1</a></li>
              <li><a href="#" className="hover:text-cyber-teal transition-colors">SAMA Framework</a></li>
              <li><a href="#" className="hover:text-cyber-teal transition-colors">Aramco CCC</a></li>
              <li><a href="#" className="hover:text-cyber-teal transition-colors">GDPR & PCI DSS</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Cyber AI. Built for the future of Gulf cybersecurity.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-cyber-teal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyber-teal transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyber-teal transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer