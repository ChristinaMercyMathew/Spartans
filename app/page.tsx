"use client"

import { useState, useRef, useEffect } from "react"
import TeamMemberCard from "@/components/team-member-card"
import SportBadge from "@/components/sport-badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("spartans")
  const [filterMode, setFilterMode] = useState(true)
  const teamSectionRef = useRef<HTMLDivElement>(null)
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const offset = Math.max(0, rect.top * 0.4);
      setParallaxOffset(offset);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sportsCategories = [
    { id: "spartans", name: "Spartans" },
    { id: "football", name: "Football" },
    { id: "throwball", name: "Throwball" },
    { id: "carrom", name: "Carrom" },
    { id: "badminton", name: "Badminton" },
    { id: "snooker", name: "Snooker" },
    { id: "cricket", name: "Cricket" },
    { id: "table-tennis", name: "Table Tennis" },
    { id: "pickle-ball", name: "Pickle Ball" },
   
  ]
  const teamMembers = [
    { id: 1, name: "MPS", image: "/images/spartans/spartan-warrior-mps.png", sports: ["cricket"] },
    { id: 2, name: "Srivatsan", image: "/images/spartans/spartan-warrior-srivatsan.png", sports: ["football"] },
    { id: 3, name: "Amritha", image: "/images/spartans/spartan-warrior-amritha.png", sports: ["throwball"] },
    { id: 4, name: "Mercy", image: "/images/spartans/spartan-warrior-christina-mercy.png", sports: ["throwball", "badminton"] },
    { id: 5, name: "Dennis", image: "/images/spartans/spartan-warrior-dennis-lincy.png", sports: ["chess"] },
    { id: 6, name: "Manoprabha", image: "/images/spartans/spartan-warrior-manoprabha-kandiah.png", sports: ["throwball", "carrom"] },
    { id: 7, name: "Nithyashree", image: "/images/spartans/spartan-warrior-nithyashree.png", sports: [] },
    { id: 8, name: "Oviya", image: "/images/spartans/spartan-warrior-oviya-svapna.png", sports: ["carrom", "snooker"] },
    { id: 9, name: "Pinky", image: "/images/spartans/spartan-warrior-pinky-rani-rout.png", sports: ["throwball", "carrom", "snooker"] },
    { id: 10, name: "Rajitha", image: "/images/spartans/spartan-warrior-rajitha-lakshmi.png", sports: ["throwball", "badminton"] },
    { id: 11, name: "Saranya", image: "/images/spartans/spartan-warrior-saranya.png", sports: ["carrom", "table-tennis", "badminton","throwball"] },
    { id: 12, name: "SAM", image: "/images/spartans/spartan-warrior-shamita.png", sports: [ "badminton", "throwball"] },
    { id: 13, name: "Shawparnika", image: "/images/spartans/spartan-warrior-shawparnika.png", sports: [ "carrom", "table-tennis", "snooker", "badminton", "throwball"] },
    { id: 14, name: "Srinithi", image: "/images/spartans/spartan-warrior-srinithi-venkatesan.png", sports: [ "carrom", "table-tennis", "snooker", "badminton"] },
    { id: 15, name: "Akhilesh", image: "/images/spartans/spartan-warrior-akhilesh-subramanian.png", sports: [] },
    { id: 16, name: "Anirudh", image: "/images/spartans/spartan-warrior-anirudh-k-murthy.png", sports: ["cricket"] },
    { id: 17, name: "Antony", image: "/images/spartans/spartan-warrior-antony-devadoss-c.png", sports: ["cricket", "football", "carrom", "table-tennis", "snooker", "chess"] },
    { id: 18, name: "Chiranjeevi", image: "/images/spartans/spartan-warrior-chiranjeevi-penumala.png", sports: ["cricket", "badminton"] },
    { id: 19, name: "Damo", image: "/images/spartans/spartan-warrior-damo.png", sports: ["cricket", "football", "carrom", "table-tennis", "snooker", "badminton", "pickle-ball"] },
    { id: 20, name: "Dillibabu", image: "/images/spartans/spartan-warrior-dillibabu.png", sports: ["cricket", "football", "carrom", "table-tennis", "badminton", "chess"] },
    { id: 21, name: "Dinesh", image: "/images/spartans/spartan-warrior-dinesh-kumar-alagarsamy.png", sports: ["football", "carrom", "table-tennis", "snooker"] },
    { id: 22, name: "GP", image: "/images/spartans/spartan-warrior-gaurav-pandey.png", sports: ["football", "pickle-ball"] },
    { id: 23, name: "Gogulanadhan", image: "/images/spartans/spartan-warrior-gogulanadhan-m.png", sports: ["chess"] },
    { id: 24, name: "Hariharan", image: "/images/spartans/spartan-warrior-hariharan-bharathwaj.png", sports: [ "carrom", "table-tennis", "pickle-ball"] },
    { id: 25, name: "Johnson", image: "/images/spartans/spartan-warrior-johnson-thomas.png", sports: [ "football", "snooker", "badminton", "pickle-ball", "chess"] },
    { id: 26, name: "Krish", image: "/images/spartans/spartan-warrior-krish-prasanth.png", sports: ["table-tennis","pickle-ball"] },
    { id: 27, name: "Manivarna", image: "/images/spartans/spartan-warrior-manivarna-dirisina.png", sports: ["cricket"] },
    { id: 28, name: "Ibrahim", image: "/images/spartans/spartan-warrior-mohamed-ibrahim.png", sports: ["cricket"] },
    { id: 29, name: "Minhaj", image: "/images/spartans/spartan-warrior-mohamed-minhaj.png", sports: ["cricket"] },
    { id: 30, name: "Giresh", image: "/images/spartans/spartan-warrior-mohan-giresh.png", sports: ["football", "carrom", "table-tennis", "snooker", "badminton", "pickle-ball"] },
    { id: 31, name: "Nandakumar", image: "/images/spartans/spartan-warrior-nandakumar-m.png", sports: ["football", "carrom", "table-tennis", "badminton", "pickle-ball", "chess"] },
    { id: 32, name: "Prasanna", image: "/images/spartans/spartan-warrior-prasanna-venkatesh-bhupendran.png", sports: [] },
    { id: 33, name: "Rakesh", image: "/images/spartans/spartan-warrior-rakesh.png", sports: ["cricket", "football", "carrom", "table-tennis", "snooker", "badminton", "pickle-ball"] },
    { id: 34, name: "KCR", image: "/images/spartans/spartan-warrior-raghu-k-c.png", sports: ["cricket"] },
    { id: 35, name: "Sankrith", image: "/images/spartans/spartan-warrior-sankrith-sridhar.png", sports: ["cricket", "badminton"] },
    { id: 36, name: "Santhosh", image: "/images/spartans/spartan-warrior-santhosh-taluri.png", sports: ["cricket"] },
    { id: 37, name: "Vishnu", image: "/images/spartans/spartan-warrior-sri-vishnu-yarlagadda.png", sports: ["cricket", "table-tennis", "snooker", "badminton", "pickle-ball", "chess"] },
    { id: 38, name: "Srivatsan S", image: "/images/spartans/spartan-warrior-srivatsan-saravanan.png", sports: ["cricket", "football", "carrom", "table-tennis", "snooker", "badminton", "pickle-ball"] },
    { id: 39, name: "Stephen", image: "/images/spartans/spartan-warrior-stephen-francis.png", sports: ["cricket", "football", "badminton"] },
    { id: 40, name: "Suman", image: "/images/spartans/spartan-warrior-suman-mathiyazhagan.png", sports: ["cricket", "football", "carrom", "table-tennis", "badminton", "pickle-ball"] },
    { id: 41, name: "Suresh", image: "/images/spartans/spartan-warrior-suresh-kumar-d.png", sports: ["cricket", "carrom", "table-tennis", "snooker", "badminton", "pickle-ball"] },
    { id: 42, name: "Thangaraj", image: "/images/spartans/spartan-warrior-thangaraj-ravi.png", sports: ["cricket", "football", "carrom", "table-tennis", "chess"] },  
    { id: 43, name: "Sachin", image: "/images/spartans/spartan-warrior-sachin.png", sports: ["cricket", "table-tennis", "badminton"] },
    { id: 44, name: "Zaheer", image: "/images/spartans/spartan-warrior-zaheer.png", sports: ["cricket", "football", "table-tennis"] },
  ];
  
  type TeamMember = {
    id: number
    name: string
    image: string
    sports: string[]
  }

  const handleBadgeClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    if (teamSectionRef.current) {
      teamSectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const getSectionTitle = () => {
    if (activeCategory === "spartans") {
      return "THE SPARTAN WARRIORS"
    } else {
      const category = sportsCategories.find((cat) => cat.id === activeCategory)
      return category ? `${category.name.toUpperCase()} SPARTANS` : "THE SPARTAN WARRIORS"
    }
  }

  const isMemberActive = (member: TeamMember) => {
    if (activeCategory === "spartans") return true
    return member.sports.includes(activeCategory)
  }

  const scrollBadges = (direction: "left" | "right") => {
    const container = document.querySelector(".badge-container")
    if (container) {
      const scrollAmount = 300
      container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
     <section className="w-full relative bg-black hero-banner-container py-6 md:py-10"> 
  {/* Logo */}
  <div className="absolute z-20 top-4 sm:top-6 md:top-8 lg:top-14 xl:top-20 left-1/2 transform -translate-x-1/2">
    <img
      src="/images/spartans-logo.png"
      alt="Spartans Logo"
      className="w-40 sm:w-56 md:w-72 lg:w-[400px] xl:w-[460px] h-auto animate-fade-in-up"
    />
  </div>

  {/* Hero Image */}
  <div
    ref={heroRef}
    className="hero-image-wrapper pb-4 relative w-full mt-12 sm:mt-0"
    style={{
      transform: `translateY(${parallaxOffset}px)`,
      transition: "transform 0.4s linear",
      willChange: "transform",
    }}
  >
    <img
      src="/images/spartans-complete.jpg"
      alt="SPARTANS ARE BACK"
      className="hero-image mx-auto animate-fade-in-up"
    />
    {/* Fade at the bottom */}
    <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-b from-transparent to-black pointer-events-none" />
  </div>

  {/* Spacer to push content below the logo */}
  <div className="hero-spacer" />
</section>


      {/* Mission Statement */}

      <section className="w-full pt-6 py-6 md:py-10 bg-black">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="blue-red-gradient text-2xl sm:text-3xl md:text-4xl lg:text-[55px] leading-tight font-new-rocker font-bold text-center" >
            SPORTS IS OUR SECOND LANGUAGE
          </h2>
          <div className="overflow-hidden">
          <p
              className="font-new-rocker text-lg sm:text-xl md:text-2xl lg:text-[38px] leading-snug sm:leading-normal md:leading-tight lg:leading-[47px] mt-4 text-white mx-auto"
              style={{ maxWidth: "840px" }}
            >
              We play with passion and work with purpose. Fierce,focused and always ready for a challenge.
            </p>
          </div>
        </div>
      </section>

      {/* Scrollable Badge Section
      <section className="relative w-full bg-black py-16">
        <button
          onClick={() => scrollBadges("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/80 transition-all duration-300 hidden md:block"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="badge-section">
          <div className="badge-section-heading">
            <h2 className="blue-red-gradient text-4xl md:text-5xl lg:text-[55px] leading-tight font-new-rocker font-bold">
              MEET OUR SPARTANS
            </h2>
          </div>

          <div className="badge-container-wrapper">
            <div className="badge-container scrollbar-hide">
              <div className="badge-row">
                {sportsCategories.map((category) => (
                  <SportBadge
                    key={category.id}
                    sport={category.id}
                    isActive={activeCategory === category.id}
                    onClick={() => handleBadgeClick(category.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollBadges("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/80 transition-all duration-300 hidden md:block"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </section> */}
<section className="relative w-full bg-black py-6 sm:py-14 md:py-20">
  <div className="badge-section">
    <div className="badge-section-heading">
      {/* <h2 className="blue-red-gradient text-2xl pt-10 sm:text-3xl md:text-4xl lg:text-[55px] leading-tight font-new-rocker font-bold text-center">
        MEET OUR SPARTANS
      </h2> */}
    </div>

    {/* Wrap badges and arrows in a flex container */}
    <div className="relative flex items-center">
      {/* Left Arrow */}
      <button
        onClick={() => scrollBadges("left")}
        className="absolute left-0 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/80 transition-all duration-300 hidden md:block"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Scrollable badge row */}
      <div className="badge-container-wrapper flex-1">
        <div className="badge-container scrollbar-hide">
          <div className="badge-row">
            {sportsCategories.map((category) => (
              <SportBadge
                key={category.id}
                sport={category.id}
                isActive={activeCategory === category.id}
                onClick={() => handleBadgeClick(category.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scrollBadges("right")}
        className="absolute right-0 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/80 transition-all duration-300 hidden md:block"
        aria-label="Scroll right"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  </div>
</section>

      {/* Team Section */}
      <section ref={teamSectionRef} id="spartan-warriors" className="w-full py-6 sm:py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="blue-red-gradient text-2xl sm:text-3xl md:text-4xl lg:text-[55px] leading-tight font-new-rocker font-bold text-center">
              {getSectionTitle()}
            </h2>
            {/* Toggle Button
            <button
              onClick={() => setFilterMode(!filterMode)}
              className="bg-white text-black px-6 py-2 rounded font-bold text-lg transition-all duration-300 hover:bg-gray-300"
            >
              {filterMode ? "Show All (Highlight)" : "Show Only Selected"}
            </button> */}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-6 md:gap-12">
            {teamMembers
              .filter((member) => !filterMode || isMemberActive(member))
              .map((member, index) => (
                <div key={member.id}>
                  <TeamMemberCard
                    member={member}
                    index={index}
                    isActive={isMemberActive(member)}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
