"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import { PaymentModal } from "./payment-modal"

interface PricingCardProps {
  name: string
  price: number
  period: string
  features: string[]
  featured?: boolean
}

export function PricingCard({ name, price, period, features, featured }: PricingCardProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  return (
    <>
      <motion.div
        className={`relative p-6 rounded-lg border transition-all duration-300 ${
          featured
            ? "bg-gradient-to-br from-primary to-accent border-primary/40 shadow-lg"
            : "bg-card border-border hover:border-primary/50"
        }`}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        {featured && (
          <motion.div
            className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Sparkles className="inline-block mr-1 h-4 w-4" />
            Популярный
          </motion.div>
        )}
        <div className="space-y-6">
          <div>
            <h3 className={`text-xl font-bold ${featured ? "text-white" : "text-foreground"}`}>{name}</h3>
            <div className="mt-2 flex items-baseline">
              <span className={`text-5xl font-extrabold tracking-tight ${featured ? "text-white" : "text-foreground"}`}>
                {price} ₽
              </span>
              <span className={`ml-1 text-sm font-medium ${featured ? "text-blue-100" : "text-muted-foreground"}`}>
                /{period}
              </span>
            </div>
          </div>
          <Button
            className={`w-full text-lg font-semibold transition-all duration-300 ${
              featured ? "bg-white text-primary hover:bg-accent hover:text-accent-foreground" : ""
            }`}
            onClick={() => setShowPaymentModal(true)}
          >
            Выбрать БРИДЖ
          </Button>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Check className={`h-5 w-5 ${featured ? "text-accent" : "text-green-500"}`} />
                <span className={`text-sm ${featured ? "text-white" : "text-muted-foreground"}`}>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        plan={{ name, price, period }}
      />
    </>
  )
}

