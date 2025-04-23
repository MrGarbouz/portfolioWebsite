"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const { t } = useLanguage()

  const technologies = ["React", "Angular", "Laravel", "PHP", "MySQL", "JavaScript", "HTML/CSS","Wordpress"]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">{t("experience.title")}</h2>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Briefcase className="text-primary h-5 w-5" />
                    <CardTitle>{t("experience.lisacom.title")}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{t("experience.lisacom.period")}</span>
                  </div>
                </div>
                <div className="text-lg font-medium">{t("experience.lisacom.company")}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{t("experience.lisacom.description")}</p>

                <div>
                  <p className="font-medium mb-2">{t("experience.lisacom.technologies")}</p>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
