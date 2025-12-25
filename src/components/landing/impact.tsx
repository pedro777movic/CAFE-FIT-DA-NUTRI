import { Dumbbell, Zap, ShieldCheck } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const features = [
  {
    icon: <Dumbbell className="w-12 h-12 text-primary" />,
    title: "Brute Force Nutrition",
    description: "No more guesswork. Precision-engineered recipes for maximum muscle gain and fat loss. Fuel your ambition.",
  },
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "Explosive Energy",
    description: "Unlock peak performance. Meals designed to ignite your metabolism and sustain high-energy output all day long.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-primary" />,
    title: "Ironclad Discipline",
    description: "Build unbreakable habits. A structured plan that gives you full control over your body and your goals.",
  },
]

export function Impact() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-card">
      <div className="container grid items-start gap-12 px-4 md:px-6 lg:grid-cols-3 lg:gap-20">
        {features.map((feature, index) => (
          <ScrollReveal key={index} delay={index * 100}>
            <div className="flex flex-col items-center text-center space-y-4">
              {feature.icon}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-headline">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
