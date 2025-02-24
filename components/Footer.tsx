"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaTelegramPlane, FaVk } from "react-icons/fa"
import { Mail, Phone, MapPin } from "lucide-react"
import { useTheme } from "next-themes"

const contactItems = [
  {
    icon: <FaTelegramPlane className="h-5 w-5" />,
    label: "Telegram",
    href: "https://t.me/motaubridge",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <FaVk className="h-5 w-5" />,
    label: "VKontakte",
    href: "https://vk.com/motaubridge",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-blue-600",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    href: "mailto:info@motaubridge.ru",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Телефон",
    href: "tel:+79001234567",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Адрес",
    href: "https://goo.gl/maps/your-address",
    gradient: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(124,58,237,0.06) 50%, rgba(109,40,217,0) 100%)",
    iconColor: "text-purple-500",
  },
]

const itemVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.5 },
  hover: { opacity: 1, scale: 2.5 },
}

const Footer = () => {
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"

  return (
    <footer className="bg-background/80 backdrop-blur-lg border-t border-border/40">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-primary">МОТАУ Бридж</h3>
            <p className="text-sm text-muted-foreground">Безопасный и быстрый VPN сервис</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Быстрые ссылки</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Тарифы
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Юридическая информация</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-md font-semibold mb-4">Связаться с нами</h4>
            <div className="flex flex-wrap gap-4">
              {contactItems.map((item) => (
                <motion.div key={item.label} className="relative" initial="initial" whileHover="hover">
                  <motion.div
                    className="absolute inset-0 rounded-full z-0"
                    variants={glowVariants}
                    style={{
                      background: item.gradient,
                    }}
                  />
                  <motion.a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border/40 ${item.iconColor}`}
                    variants={itemVariants}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    {item.icon}
                    <span className="sr-only">{item.label}</span>
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border/40 mt-8 pt-8 text-sm text-center text-muted-foreground">
          © {new Date().getFullYear()} МОТАУ Бридж. Все права защищены.
        </div>
      </div>
    </footer>
  )
}

export default Footer

