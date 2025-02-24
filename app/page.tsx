"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Network, Zap } from "lucide-react"
import { PricingCard } from "@/components/PricingCard"
import { BackgroundGradient } from "@/components/BackgroundGradient"

export default function Home() {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-primary mb-4" />,
      title: "Невидимый щит",
      description: "Ваши цифровые следы растворяются в множестве точек, оставляя лишь эфемерный шлейф.",
    },
    {
      icon: <Network className="w-12 h-12 text-primary mb-4" />,
      title: "Динамическая маршрутизация",
      description: "Алгоритмы перенаправляют данные через серию сменных узлов, создавая уникальный поток.",
    },
    {
      icon: <Zap className="w-12 h-12 text-primary mb-4" />,
      title: "Адаптивная архитектура",
      description: "Система самостоятельно выбирает оптимальные маршруты, гарантируя стабильное соединение.",
    },
  ]

  const plans = [
    {
      name: "Базовый БРИДЖ",
      price: 149,
      period: "месяц",
      features: ["Бесперебойное соединение", "Защита 1 устройства", "Базовая скорость передачи данных"],
    },
    {
      name: "Стандарт БРИДЖ",
      price: 279,
      period: "2 месяца",
      features: [
        "Резервные маршруты",
        "Защита до 3 устройств",
        "Повышенная скорость передачи",
        "Приоритетная поддержка",
      ],
      featured: true,
    },
    {
      name: "Премиум БРИДЖ",
      price: 399,
      period: "3 месяца",
      features: [
        "Информационная целостность",
        "Защита до 5 устройств",
        "Максимальная скорость передачи",
        "24/7 VIP поддержка",
      ],
    },
    {
      name: "Ультра БРИДЖ",
      price: 699,
      period: "6 месяцев",
      features: [
        "Полная децентрализация",
        "Защита до 10 устройств",
        "Непревзойденная живучесть системы",
        "Персональный менеджер",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-background text-foreground overflow-hidden">
        <BackgroundGradient />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Добро пожаловать в цифровой лабиринт <br className="hidden md:block" />
              <span className="text-primary">МОТАУ Бридж</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Где каждое соединение превращается в невидимый след свободы.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link href="/signup">Начать путешествие</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Почему выбирают МОТАУ Бридж?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-6 rounded-lg bg-background shadow-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="flex justify-center"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* БРИДЖ Explanation */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Что такое БРИДЖ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2">Б</h3>
              <p>Бесперебойная</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Р</h3>
              <p>Резервная</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">И</h3>
              <p>Информационная</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Д</h3>
              <p>Децентрализованная</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Ж</h3>
              <p>Живучесть</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Передовые технологии МОТАУ БРИДЖ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 mb-6 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 102" className="w-16 h-16 text-primary">
                  <title>Outline</title>
                  <path
                    d="M57 101.302C82.339 98.332 102 76.7874 102 50.6508C102 24.5142 82.339 2.96957 57 0V20.3448C70.722 23.3233 81 35.5367 81 50.1508C81 64.7648 70.722 76.9782 57 79.9568V101.302Z"
                    fill="currentColor"
                  />
                  <path
                    d="M45 0V101.302C19.661 98.332 0 76.7874 0 50.6508C0 24.5142 19.661 2.96957 45 0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Outline</h3>
              <p className="text-center text-muted-foreground">
                Outline обеспечивает надежную и эффективную маршрутизацию данных, гарантируя высокую производительность
                МОТАУ БРИДЖ.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-24 h-24 mb-6 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-500 rounded-full opacity-20 animate-pulse"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 774 1348" className="w-16 h-16" fill="#88171A">
                  <title>WireGuard</title>
                  <path d="M349.026 774.836c-12.168 6.44-21.541 11.184-30.71 16.292-37.523 20.901-69.603 48.261-95.162 82.767-8.264 11.156-13.945 12.054-26.528 4.36C32.934 778.154 22.415 526.937 201.176 417.574c139.044-85.064 316.679-33.074 383.241 94.85 12.615 24.244 14.218 61.567 6.229 86.947-27.583 87.859-92.71 137.102-182.101 158.021 26.353-22.562 47.33-48.145 53.006-83.494 6.725-35.606-.388-67.807-21.041-97.072-31.371-44.452-92.029-62.74-142.721-43.492-55.034 20.896-85.181 71.123-79.746 132.863 5.048 57.351 48.564 94.519 129.983 108.639zM0 1061.47c13.148-88.716 117.033-170.411 204.881-161.091-27.209 36.796-39.777 78.423-42.81 119.941-29.191 5.38-56.703 8.99-83.411 15.77-26.296 6.68-51.778 16.56-78.66 25.38zm651.834-226.999c-7.404-6.401-12.095-6.399-20.776-.844-29.453 18.843-59.533 36.695-90.239 53.555-17.562 9.664-36.584 16.675-58.609 26.516 7.563 1.952 11.202 2.865 14.828 3.83 82.338 21.913 126.327 94.192 106.841 175.162-17.329 71.99-90.422 118.03-161.255 105.88-59.053-10.12-110.601-59.16-119.21-117.91-9.381-64.03 22.509-125.621 79.246-151.42 31.472-14.31 63.79-26.766 101.187-41.229 35.697-16.445 74.289-29.435 105.458-52.322 77.355-56.801 125.123-134.005 143.746-228.4 11.155-56.543 10.401-112.838-15.466-166.525-19.852-41.202-52.43-71.133-87.43-98.447-36.018-28.108-74.148-53.518-110.002-81.821-9.702-7.658-16.252-20.865-20.742-32.84-1.903-5.075 4.287-18.837 8.426-19.58 22.087-3.826 44.414-6.106 66.818-6.823 25.82-.975 51.714-.149 77.572.191 5.605.074 13.216-.653 16.438 2.514 13.394 13.167 23.898 4.698 33.194-3.965 7.824-7.29 13.399-16.992 19.621-25.168-3.776-.555-11.519-2.505-19.304-2.689-26.004-.616-52.036-.221-78.022-1.176-4.629-.17-9.09-4.935-13.629-7.579 4.776-1.898 9.537-5.399 14.331-5.444 44.848-.421 89.703-.25 134.593-.25.053-23.336-31.136-55.291-58.846-63.95-.207 3.158-.4 6.097-.606 9.233-27.531.654-54.556.141-79.106-12.914-6.469-3.44-10.697-11.089-15.962-16.798-6.629-7.188-12.068-16.43-20.148-21.12-16.565-9.615-34.648-16.583-51.931-25-61.418-29.915-126.278-28.863-195.945-22.485C392.549 13.346 430.159 22.1 467.77 30.855c-.428 2.286-.856 4.573-1.285 6.86-50.308 6.74-97.898-11.71-147.101-18.545 17.66 10.485 35.873 20.008 54.561 28.527 18.965 8.51 38.52 15.705 58.077 23.58-24.846 21.229-49.777 25.887-81.008 18.751-17.073-3.901-35.133-5.972-52.565-5.121-18.005.88-36.14 5.31-52.49 16.238 17.506 8.875 33.642 16.24 48.863 25.165 6.278 3.681 13.473 9.93 15.223 16.377 4.192 15.44 5.402 31.689 7.817 47.623-28.667 3.247-79.074 32.4-89.261 51.373 44.06 8.478 92.031-1.777 134.061 26.617-13.845 10.477-46.086 23.507-57.912 32.457 14.621 3.831 48.498 1.955 61.751 1.057 11.157-.756 16.307-1.029 20.881 2.735l129.702 101.542c13.637 10.993 68.719 63.13 83.097 95.902 12.241 27.902 13.74 51.638 13.736 57.431.029 22.933-4.247 45.667-12.605 67.022-4.488 11.399-17.658 36.651-44.826 66.084-42.107 45.616-96.27 70.274-155.501 82.486-137.721 28.395-252.153 175.47-219.85 337.614 37.714 189.29 246.647 291.78 417.386 201.74 110.359-58.21 168.871-171.76 153.193-295.36-9.471-74.673-43.252-135.579-99.88-184.539zM580.281 103.537c4.917-3.762 9.98-6.922 16.085-1.891 3.472 2.861 6.845 5.824 11.051 9.414-5.221 2.757-9.459 5.077-13.78 7.256-6.049 3.051-10.571 1.013-14.232-3.807-2.971-3.909-3.507-7.617.876-10.972z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">WireGuard</h3>
              <p className="text-center text-muted-foreground">
                WireGuard предоставляет современный протокол шифрования, обеспечивая максимальную безопасность и
                скорость работы МОТАУ БРИДЖ.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Выберите свой идеальный БРИДЖ</h2>
          <p className="text-center text-lg mb-12 text-muted-foreground">Найдите план, который подходит именно вам!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PricingCard {...plan} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы погрузиться в мир цифровой свободы?</h2>
            <p className="text-xl md:text-2xl mb-8">
              Присоединяйтесь к тем, кто уже открыл для себя новые горизонты анонимности с МОТАУ Бридж.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
                <Link href="/signup">Начать путешествие</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

