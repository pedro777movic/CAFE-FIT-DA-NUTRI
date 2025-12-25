"use client"

import { useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { Users } from "lucide-react"

const notifications = [
  "Uma vaga acabou de ser preenchida.",
  "Novo membro entrou agora.",
  "Acesso liberado para mais um usuário.",
  "Mais uma pessoa retomou o controle.",
]

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function ActivityNotifications() {
  const { toast } = useToast()

  useEffect(() => {
    let timer: NodeJS.Timeout

    const showRandomToast = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)]
      
      toast({
        description: (
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <span>{randomNotification}</span>
          </div>
        ),
        className: "bg-card border-primary/50 text-foreground",
      })

      // Schedule the next toast
      const nextInterval = getRandomInt(8000, 20000) // 8 to 20 seconds
      timer = setTimeout(showRandomToast, nextInterval)
    }

    // Start the first toast after an initial delay
    timer = setTimeout(showRandomToast, getRandomInt(5000, 10000)) // 5 to 10 seconds

    return () => {
      clearTimeout(timer)
    }
  }, [toast])

  return null
}
