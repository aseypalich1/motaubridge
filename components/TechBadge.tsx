import Image from "next/image"
import type React from "react"

interface TechBadgeProps {
  name: string
  icon: string
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, icon }) => (
  <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
    <Image src={icon || "/placeholder.svg"} alt={`${name} icon`} width={20} height={20} className="mr-2" />
    <span>{name}</span>
  </div>
)

export default TechBadge

