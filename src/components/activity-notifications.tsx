"use client"

import { useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { Users, Droplet, Brain, Utensils } from "lucide-react"

// Estratégia de Notificação: Desejo, Normalização, Prova Social Evolutiva, Expansão de Consciência
const notifications = [
  // Desejo (Sensorial) - 40%
  { text: "Panqueca de banana com cacau liberada no café da manhã.", icon: <Utensils className="h-5 w-5 text-primary" /> },
  { text: "Sobremesa liberada hoje: brownie fit de 15 minutos.", icon: <Utensils className="h-5 w-5 text-primary" /> },
  { text: "Receita simples, ingredientes comuns, resultado leve.", icon: <Utensils className="h-5 w-5 text-primary" /> },
  { text: "Bateu a vontade de doce? Mousse de maracujá fit liberado.", icon: <Utensils className="h-5 w-5 text-primary" /> },

  // Prova Social Evolutiva (Não Agressiva) - 30%
  { text: "Relato comum: menos culpa, mais controle.", icon: <Users className="h-5 w-5 text-primary" /> },
  { text: "Silvana perdeu 7kg em 3 meses comendo comida de verdade.", icon: <Users className="h-5 w-5 text-primary" /> },
  { text: "Carlos voltou a usar uma calça que não servia há 1 ano.", icon: <Users className="h-5 w-5 text-primary" /> },

  // Expansão de Consciência - 20%
  { text: "Não é dieta. É ambiente.", icon: <Brain className="h-5 w-5 text-primary" /> },
  { text: "Quando a escolha está pronta, a mente relaxa.", icon: <Brain className="h-5 w-5 text-primary" /> },
  { text: "Organização alimentar reduz a ansiedade.", icon: <Brain className="h-5 w-5 text-primary" /> },

  // Normalização (Vida Real) & Escassez Sutil - 10%
  { text: "Constância vence intensidade.", icon: <Droplet className="h-5 w-5 text-primary" /> },
  { text: "O acesso está sendo liberado em grupos para garantir o suporte.", icon: <Droplet className="h-5 w-5 text-primary" /> },
]


function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function ActivityNotifications() {
  const { toast } = useToast()

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    const showRandomToast = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)]
      
      toast({
        description: (
          <div className="flex items-center gap-2">
            {randomNotification.icon}
            <span>{randomNotification.text}</span>
          </div>
        ),
        className: "bg-card border-primary/50 text-foreground",
      })

      // Schedule the next toast
      const nextInterval = getRandomInt(12000, 25000) // 12 to 25 seconds for a less intrusive feel
      timer = setTimeout(showRandomToast, nextInterval)
    }

    // Start the first toast after an initial delay
    const initialDelay = getRandomInt(8000, 15000); // 8 to 15 seconds
    if (typeof window !== 'undefined') {
      timer = setTimeout(showRandomToast, initialDelay);
    }

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [toast])

  return null
}
