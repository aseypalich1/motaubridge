"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqItems = [
    {
      question: "Что такое БРИДЖ?",
      answer:
        "БРИДЖ (Бесперебойная Резервная Информационная Децентрализованная Живучесть) - это инновационная технология, которая создает защищенное соединение между вашим устройством и интернетом. Она обеспечивает анонимность и безопасность в сети, используя динамическую маршрутизацию и шифрование данных.",
    },
    {
      question: "Почему стоит выбрать МОТАУ Бридж?",
      answer:
        "МОТАУ Бридж предлагает высокоскоростное защищенное соединение, надежную защиту данных, простой интерфейс и доступные тарифы. Мы не ведем логов активности пользователей и обеспечиваем круглосуточную поддержку.",
    },
    {
      question: "На скольких устройствах можно использовать МОТАУ Бридж?",
      answer:
        "Вы можете использовать МОТАУ Бридж одновременно на нескольких устройствах в рамках одной подписки. Точное количество зависит от выбранного тарифного плана.",
    },
    {
      question: "Как установить МОТАУ Бридж?",
      answer:
        "Установка МОТАУ Бридж проста: скачайте приложение с нашего сайта, установите его на ваше устройство, войдите в аккаунт и подключитесь к сети. Подробные инструкции доступны в разделе поддержки.",
    },
    {
      question: "Могу ли я отменить подписку?",
      answer:
        "Да, вы можете отменить подписку в любое время через ваш личный кабинет. Оплаченный период обслуживания будет доступен до окончания срока подписки.",
    },
    {
      question: "Как МОТАУ Бридж обеспечивает мою безопасность?",
      answer:
        "МОТАУ Бридж использует передовые алгоритмы шифрования и динамической маршрутизации. Ваши данные проходят через серию сменных узлов, что делает их практически невидимыми для посторонних. Мы также применяем принцип нулевого журналирования, что означает отсутствие записей о вашей онлайн-активности.",
    },
    {
      question: "Законно ли использование МОТАУ Бридж?",
      answer:
        "Да, использование МОТАУ Бридж полностью законно в большинстве стран. Однако мы рекомендуем ознакомиться с местным законодательством, так как в некоторых странах могут существовать ограничения на использование технологий шифрования.",
    },
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Часто задаваемые вопросы
      </motion.h1>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  )
}

