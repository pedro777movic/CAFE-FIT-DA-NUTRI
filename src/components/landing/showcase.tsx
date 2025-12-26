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

const showcaseItems2 = [
    {
      id: "showcase-6",
      imageUrl: "https://picsum.photos/seed/15/800/600",
      alt: "Showcase image 6",
      hint: "fit dessert"
    },
    {
      id: "showcase-7",
      imageUrl: "https://picsum.photos/seed/16/800/600",
      alt: "Showcase image 7",
      hint: "quick breakfast"
    },
    {
      id: "showcase-8",
      imageUrl: "https://picsum.photos/seed/17/800/600",
      alt: "Showcase image 8",
      hint: "protein shake"
    },
    {
      id: "showcase-9",
      imageUrl: "https://picsum.photos/seed/18/800/600",
      alt: "Showcase image 9",
      hint: "healthy lunch"
    },
    {
      id: "showcase-10",
      imageUrl: "https://picsum.photos/seed/19/800/600",
      alt: "Showcase image 10",
      hint: "meal prep"
    },
  ]

export function Showcase() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
    const plugin2 = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
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
        <div className="flex flex-col gap-4">
            <ScrollReveal delay={200}>
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-full mx-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{
                align: "start",
                loop: true,
                }}
            >
                <CarouselContent>
                {showcaseItems.map((item) => (
                    <CarouselItem key={item.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <div className="p-1 h-full">
                        <Card className="overflow-hidden shadow-2xl border-2 border-border group h-full">
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                            src={item.imageUrl}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
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
            <ScrollReveal delay={400}>
            <Carousel
                plugins={[plugin2.current]}
                className="w-full max-w-full mx-auto"
                onMouseEnter={plugin2.current.stop}
                onMouseLeave={plugin2.current.reset}
                opts={{
                align: "start",
                loop: true,
                direction: 'right'
                }}
            >
                <CarouselContent>
                {showcaseItems2.map((item) => (
                    <CarouselItem key={item.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <div className="p-1 h-full">
                        <Card className="overflow-hidden shadow-2xl border-2 border-border group h-full">
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                            src={item.imageUrl}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
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
      </div>
    </section>
  )
}
