"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
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
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              + 500 Receitas Fit
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-4xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {showcaseItems.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="overflow-hidden shadow-2xl border-2 border-border group h-full">
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={item.imageUrl}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={item.hint}
                        />
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  )
}
