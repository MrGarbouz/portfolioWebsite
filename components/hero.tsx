"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Mohamed Amine Garbouz</h1>
            <h2 className="text-2xl md:text-3xl text-primary font-semibold">{t("hero.title")}</h2>
            <p className="text-xl text-muted-foreground">{t("hero.subtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="https://github.com/MrGarbouz">{t("hero.cta.projects")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="mailto:aminegarbouz01@gmail.com">{t("hero.cta.contact")}</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/MrGarbouz/portfolio3" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/office_13.jpg"
                alt="Mohamed Amine Garbouz"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="#about">
            <Button variant="ghost" size="icon" className="animate-bounce">
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll down</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
