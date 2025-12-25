import { LayoutGrid, Smartphone, Target } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const features = [
  {
    icon: <LayoutGrid className="w-10 h-10 text-primary" />,
    title: "O Fim do Caos Mental",
    description: "Nada para decidir. Nada para calcular. Só seguir — e sentir o corpo responder.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: "Controle na Sua Mão",
    description: "Uma interface que obedece. Sem esforço e sem ruído, veja o progresso acontecer de forma fluida. O poder é seu.",
  },
  {
    icon: <Target className="w-10 h-10 text-primary" />,
    title: "Feito para Ser Fácil",
    description: "Menos tempo pensando, mais tempo vivendo. A simplicidade que gera constância. O resultado é inevitável.",
  },
]

export function Experience() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-card">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Uma Experiência que Liberta</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Este não é mais um app de dieta. É um atalho mental.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="grid gap-2 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
