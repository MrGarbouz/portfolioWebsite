"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  const { t } = useLanguage()

  const educationItems = [
    {
      title: t("education.german.title"),
      period: t("education.german.period"),
    },
    {
      title: t("education.engineering.title"),
      period: t("education.engineering.period"),
    },
    {
      title: t("education.technical.title"),
      period: t("education.technical.period"),
    },
    {
      title: t("education.highschool.title"),
      period: t("education.highschool.period"),
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">{t("education.title")}</h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-primary pl-8 ml-4 space-y-10">
              {educationItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="absolute -left-[17px] bg-background p-1 rounded-full border-2 border-primary">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{item.period}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
