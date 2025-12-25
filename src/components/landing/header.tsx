import { Button } from "@/components/ui/button"
import { Dumbbell } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <Dumbbell className="h-6 w-6 text-primary" />
        <span className="sr-only">Fit Domination</span>
      </Link>
      <span className="ml-4 text-2xl font-bold font-headline">Fit Domination</span>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Button>Get the App</Button>
      </nav>
    </header>
  )
}
