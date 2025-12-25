import { Dumbbell } from 'lucide-react'

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border bg-background">
      <div className="flex items-center gap-2">
        <Dumbbell className="h-5 w-5 text-primary" />
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Fit Domination. All rights reserved.</p>
      </div>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6 text-xs text-muted-foreground">
         {/* Footer links can be added here */}
      </nav>
    </footer>
  )
}
