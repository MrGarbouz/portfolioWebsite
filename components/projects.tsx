"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: "ForumFlux Platform",
      description:
        "ForumFlux is a modern web application designed to facilitate communication and collaboration between students and educators.",
      image: "/ForumFlex.png?height=400&width=600",
      technologies: ["React", "Typescript",  "Tailwind CSS"],
      demoUrl: "#",
      codeUrl: "https://github.com/MrGarbouz/ForumFlex",
    },
    {
      title: "Tic-tac-toe Game",
      description:
        "Player-1 starts playing the game and both the players make their moves in consecutive turns.",
      image: "/xo.png?height=400&width=600",
      technologies: ["Html", "CSS","javascript"],
      demoUrl: "#",
      codeUrl: "https://github.com/MrGarbouz/web_game",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with a modern design.",
      image: "/portfolio.png?height=400&width=600",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      demoUrl: "#",
      codeUrl: "",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">{t("projects.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image }
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="pt-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div>
                      <p className="text-sm font-medium mb-2">{t("projects.technologies")}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button asChild size="sm" variant="outline">
                      <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        {t("projects.code")}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
