import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { CountdownTimer } from "@/components/countdown-timer"

export function FinalCta() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center space-y-6 text-center bg-card p-10 rounded-lg shadow-2xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline">
              A janela está fechando.
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Você chegou a tempo. O acesso ainda está liberado, mas não por muito tempo. Essa é sua chance de ter o controle de volta.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <CountdownTimer />
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6 font-bold shadow-lg shadow-secondary/20 animate-pulse">
                Liberar meu acesso
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
