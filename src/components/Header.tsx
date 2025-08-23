import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"

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
          <a href="/compliance-check" className="text-muted-foreground hover:text-foreground transition-colors">
            Compliance Check
          </a>
          <a href="/api-test" className="text-muted-foreground hover:text-foreground transition-colors">
            API Test
          </a>
        </nav>

        <div className="flex items-center gap-2 group relative">
          <Button variant="cyber" size="lg">
            Try Cyber AI
          </Button>
          <Info className="w-4 h-4 text-muted-foreground group-hover:text-cyber-teal cursor-help transition-colors" />
          <div className="absolute right-0 top-full mt-2 px-3 py-2 bg-popover border border-border rounded-md text-sm text-popover-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
            This is a demonstration of our text compliance AI tool
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header