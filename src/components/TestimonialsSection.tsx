import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Cyber AI has transformed our Aramco CCC compliance processes. The automated monitoring and real-time alerts have reduced our audit preparation time by 70% while ensuring we never miss critical security requirements.",
      author: "Ahmed Al-Rashid",
      role: "Chief Information Security Officer",
      company: "Saudi Oil & Gas Enterprise",
      rating: 5
    },
    {
      quote: "The AI-powered threat detection has been a game-changer for our SOC. We've reduced false positives by 85% and can now focus on genuine threats. The Arabic language support is exactly what we needed.",
      author: "Fatima Al-Zahra",
      role: "SOC Manager", 
      company: "UAE Banking Group",
      rating: 5
    },
    {
      quote: "Cyber AI's proactive defense against phishing and insider threats gives us confidence in our security posture. The Gulf-specific threat intelligence is invaluable for our regional operations.",
      author: "Mohammed Al-Qahtani",
      role: "Chief Technology Officer",
      company: "Gulf Telecommunications",
      rating: 5
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Gulf Industry Leaders Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by cybersecurity professionals across Saudi Arabia, UAE, and the broader GCC region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-cyber-teal/50 transition-all duration-300 h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyber-purple to-cyber-teal rounded-full flex items-center justify-center">
                    <span className="text-cyber-light font-bold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-cyber-teal">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection