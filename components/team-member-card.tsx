import Image from "next/image"

interface TeamMember {
  id: number
  name: string
  image?: string
  sports: string[]
}

interface TeamMemberCardProps {
  member: TeamMember
  index?: number
  isActive?: boolean
}

export default function TeamMemberCard({ member, index = 0, isActive = true }: TeamMemberCardProps) {
  // Default images if none provided
  const defaultImages = [
    "/images/spartan-warrior-1.png",
    "/images/spartan-warrior-2.png",
    "/images/spartan-warrior-3.png",
  ]

  const imageToUse = member.image || defaultImages[index % defaultImages.length]

  return (
    <div className="flex flex-col items-center transition-all duration-300">
      {/* Spartan warrior image */}
      <div
        className={`relative w-full aspect-square mb-3 transition-all duration-300 ${
          isActive ? "" : "grayscale opacity-30 blur-sm"
        }`}
      >
        <Image src={imageToUse || "/placeholder.svg"} alt={member.name} fill className="object-contain" priority />
      </div>

      {/* Player name */}
      <h3
        className={`text-xl font-new-rocker text-3xl md:text-[36px] lg:text-[48px] leading-[100%] tracking-normal text-white mb-3 transition-all duration-300 ${isActive ? "" : "opacity-50"}`}
      >
        {member.name}
      </h3>
    </div>
  )
}
