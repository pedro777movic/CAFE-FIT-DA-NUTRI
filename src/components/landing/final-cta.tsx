import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MinimalCountdown } from "@/components/minimal-countdown"

export function FinalCta() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center space-y-6 text-center bg-card p-10 rounded-lg shadow-2xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline">
              Você chegou até aqui.
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Este é o ponto de decisão. Apenas quem está pronto avança.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow">
                Liberar meu acesso
              </Button>
              <MinimalCountdown hours={7} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
