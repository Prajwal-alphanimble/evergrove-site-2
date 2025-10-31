"use client"

import { useState, useEffect } from "react"
import { ServiceContent } from "@/app/services/component/ServiceContent"
import { useSearchParams } from "next/navigation"
import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { Building2, TreePine, Zap, Wrench, Cog } from "lucide-react"
import { TextReveal } from "@/components/ui/text-reveal"
import { Sparkles } from "@/components/ui/sparkles"
import { Particles } from "@/components/ui/particles"

export default function ServicesClient() {
  const searchParams = useSearchParams()
  const [selectedService, setSelectedService] = useState("architecture-design")
  const [isMounted, setIsMounted] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => setIsMounted(true), [])

  useEffect(() => {
    const service = searchParams.get("service")
    if (service) {
      setSelectedService(service)
    }
  }, [searchParams])

  const services = [
    { 
      id: "architecture-design", 
      name: "Architecture & Design",
      shortName: "Architecture",
      icon: Building2
    },
    { 
      id: "landscape-design", 
      name: "Landscape Design",
      shortName: "Landscape", 
      icon: TreePine
    },
    { 
      id: "infrastructure", 
      name: "Infrastructure",
      shortName: "Infrastructure",
      icon: Zap
    },
    { 
      id: "building-services", 
      name: "Building Services",
      shortName: "Services",
      icon: Cog
    },
    { 
      id: "execution", 
      name: "Project Execution",
      shortName: "Execution",
      icon: Wrench
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image src="/team.jpg" alt="Our Services" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <Particles count={25} className="opacity-30" />

        <div className="absolute inset-0 flex items-center justify-center">
          {isMounted ? (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.25, 0.25, 0.75] }}
              className="text-center"
            >
              <Sparkles>
                <TextReveal className="font-display text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-4 sm:mb-6">
                  Our Services
                </TextReveal>
              </Sparkles>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1, ease: [0.25, 0.25, 0.25, 0.75] }}
                className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4"
              >
                Comprehensive solutions that transform visions into reality through expert design and flawless execution
              </motion.p>
            </motion.div>
          ) : (
            <div className="text-center">
              <Sparkles>
                <TextReveal className="font-display text-6xl md:text-8xl font-bold text-white mb-6">
                  Our Services
                </TextReveal>
              </Sparkles>
              <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Comprehensive solutions that transform visions into reality through expert design and flawless execution
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Services Content */}
      <section className="py-10 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          {isMounted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-8 md:mb-16 overflow-x-auto p-4"
            >
              <div className="bg-card rounded-2xl p-2 shadow-lg flex flex-nowrap min-w-max">
                <button
                  onClick={() => setSelectedService("architecture-design")}
                  className={`px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 mr-2 text-sm sm:text-base whitespace-nowrap ${
                    selectedService === "architecture-design"
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Building2 className="inline-block w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2" />
                  Architecture & Design
                </button>
                <button
                  onClick={() => setSelectedService("landscape-design")}
                  className={`px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 mr-2 text-sm sm:text-base whitespace-nowrap ${
                    selectedService === "landscape-design"
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <TreePine className="inline-block w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2" />
                  Landscape Design
                </button>
                <button
                  onClick={() => setSelectedService("infrastructure")}
                  className={`px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 mr-2 text-sm sm:text-base whitespace-nowrap ${
                    selectedService === "infrastructure"
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Zap className="inline-block w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2" />
                  Infrastructure
                </button>
                <button
                  onClick={() => setSelectedService("building-services")}
                  className={`px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 mr-2 text-sm sm:text-base whitespace-nowrap ${
                    selectedService === "building-services"
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Cog className="inline-block w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2" />
                  Building Services
                </button>
                <button
                  onClick={() => setSelectedService("execution")}
                  className={`px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 mr-2 text-sm sm:text-base whitespace-nowrap ${
                    selectedService === "execution"
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Wrench className="inline-block w-5 h-5 mr-2" />
                  Project Execution
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="flex justify-center mb-16">
              <div className="bg-card rounded-2xl p-2 shadow-lg">
                <button
                  onClick={() => setSelectedService("architecture-design")}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    selectedService === "architecture-design"
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Building2 className="inline-block w-5 h-5 mr-2" />
                  Architecture & Design
                </button>
                <button
                  onClick={() => setSelectedService("landscape-design")}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    selectedService === "landscape-design"
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <TreePine className="inline-block w-5 h-5 mr-2" />
                  Landscape Design
                </button>
                <button
                  onClick={() => setSelectedService("infrastructure")}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    selectedService === "infrastructure"
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Zap className="inline-block w-5 h-5 mr-2" />
                  Infrastructure
                </button>
                <button
                  onClick={() => setSelectedService("building-services")}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    selectedService === "building-services"
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Cog className="inline-block w-5 h-5 mr-2" />
                  Building Services
                </button>
                <button
                  onClick={() => setSelectedService("execution")}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    selectedService === "execution"
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Wrench className="inline-block w-5 h-5 mr-2" />
                  Project Execution
                </button>
              </div>
            </div>
          )}

          {/* Service Content */}
          <motion.div
            key={selectedService}
            initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMounted ? { duration: 0.5 } : {}}
            className="bg-card rounded-2xl shadow-lg overflow-hidden"
          >
            <ServiceContent service={selectedService} />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
