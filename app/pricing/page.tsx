"use client"

import { motion } from "framer-motion"
import { PricingCard } from "@/components/PricingCard"

export default function Pricing() {
  const plans = [
    {
      name: "Базовый",
      months: 1,
      price: 149,
      features: ["Безлимитный трафик", "Защита 1 устройства", "Базовая скорость", "Защита данных"],
    },
    {
      name: "Стандарт",
      months: 2,
      price: 279,
      features: [
        "Безлимитный трафик",
        "Защита до 3 устройств",
        "Высокая скорость",
        "Защита данных",
        "Приоритетная поддержка",
      ],
      featured: true,
    },
    {
      name: "Премиум",
      months: 3,
      price: 399,
      features: [
        "Безлимитный трафик",
        "Защита до 5 устройств",
        "Максимальная скорость",
        "Защита данных",
        "24/7 VIP поддержка",
      ],
    },
    {
      name: "Ультра",
      months: 6,
      price: 699,
      features: [
        "Безлимитный трафик",
        "Защита до 10 устройств",
        "Максимальная скорость",
        "Защита данных",
        "Персональный менеджер",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Тарифы МОТАУ Бридж
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PricingCard
              name={plan.name}
              price={plan.price}
              period={`${plan.months} ${plan.months === 1 ? "месяц" : "месяца"}`}
              features={plan.features}
              featured={plan.featured}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

