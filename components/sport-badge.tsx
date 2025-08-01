"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface SportBadgeProps {
  sport: string
  isActive?: boolean
  onClick?: () => void
}

export default function SportBadge({ sport, isActive = false, onClick }: SportBadgeProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Get badge image path based on sport
  const getBadgeImage = () => {
    switch (sport) {
      case "spartans":
        return "/images/badge-spartan.png"
      case "cricket":
        return "/images/badge-cricket.png"
      case "badminton":
        return "/images/badge-badminton.png"
      case "football":
        return "/images/badge-football.png"
      case "table-tennis":
        return "/images/badge-tt.png"
      case "snooker":
        return "/images/badge-snooker.png"
      case "throwball":
        return "/images/badge-throwball.png"
      case "pickle-ball":
        return "/images/badge-pickle-ball.png"
      case "chess":
        return "/images/badge-chess.png"
      case "carrom":
        return "/images/badge-carrom.png"
      default:
        return "/images/spartans-badge.png"
    }
  }

  // Get sport name for alt text
  const getSportName = () => {
    switch (sport) {
      case "spartans":
        return "Spartans"
      case "cricket":
        return "Cricket"
      case "badminton":
        return "Badminton"
      case "football":
        return "Football"
      case "table-tennis":
        return "Table Tennis"
      case "snooker":
        return "Snooker"
      case "throwball":
        return "Throwball"
      case "pickle-ball":
        return "Pickle Ball"
      case "chess":
        return "Chess"
      case "carrom":
        return "Carrom"
      default:
        return sport
    }
  }

  return (
    <div
      className="badge-card min-w-[130px] md:min-w-[160px] flex flex-col flex-shrink-0 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className={cn("badge-inner", isActive || isHovered ? "active" : "")}>
        <Image
          src={getBadgeImage() || "/images/spartans-badge.png"}
          alt={getSportName()}
          width={180}
          height={180}
          className="badge-image"
        />
      </div>
      <p className="mt-2 font-new-rocker font-normal text-xl sm:text-2xl md:text-[28px] lg:text-[32px] leading-[1] text-white text-center">
        {getSportName()}
      </p>
      
    </div>
  )
}
