"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  plan: { name: string; price: number; period: string }
}

export const PaymentModal = ({ isOpen, onClose, plan }: PaymentModalProps) => {
  const router = useRouter()
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the payment process, e.g., using a payment gateway API.
    // This is a placeholder for that logic.  Replace with your actual payment integration.
    console.log("Payment attempt for plan:", plan, "email:", email)
    onClose()
    router.push("/signup") // Redirect to signup after successful payment (replace with your success page)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Оплата плана {plan.name}</DialogTitle>
          <DialogDescription>
            Стоимость: {plan.price} ₽ / {plan.period}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Оплатить</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

