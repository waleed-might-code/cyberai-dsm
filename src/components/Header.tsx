import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-cyber-purple to-cyber-teal rounded-lg flex items-center justify-center">
            <span className="text-cyber-light font-bold text-lg">C</span>
          </div>
          <span className="text-2xl font-bold text-foreground">Cyber AI</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#why" className="text-muted-foreground hover:text-foreground transition-colors">
            Why Cyber AI
          </a>
          <a href="#testing" className="text-muted-foreground hover:text-foreground transition-colors">
            Testing
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
            Testimonials
          </a>
        </nav>

        <Button variant="cyber" size="lg">
          Try Cyber AI Now
        </Button>
      </div>
    </header>
  )
}

export default Header