import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

const showcaseItems = [
  {
    id: "showcase-1",
    imageUrl: "https://picsum.photos/seed/10/800/600",
    alt: "Showcase image 1",
    hint: "food app"
  },
  {
    id: "showcase-2",
    imageUrl: "https://picsum.photos/seed/11/800/600",
    alt: "Showcase image 2",
    hint: "healthy meal"
  },
  {
    id: "showcase-3",
    imageUrl: "https://picsum.photos/seed/12/800/600",
    alt: "Showcase image 3",
    hint: "recipe plan"
  },
  {
    id: "showcase-4",
    imageUrl: "https://picsum.photos/seed/13/800/600",
    alt: "Showcase image 4",
    hint: "mobile fitness"
  },
  {
    id: "showcase-5",
    imageUrl: "https://picsum.photos/seed/14/800/600",
    alt: "Showcase image 5",
    hint: "easy cooking"
  },
]

export function Showcase() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">+ 500 Receitas Fit</h2>
          </div>
        </ScrollReveal>
        <div className="flex flex-col items-center gap-8">
          {showcaseItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 100} className="w-full max-w-lg">
              <Card className="overflow-hidden shadow-2xl border-2 border-border group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.imageUrl}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 512px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={item.hint}
                  />
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
