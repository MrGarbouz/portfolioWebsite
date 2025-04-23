"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { Download } from "lucide-react"

export default function About() {
  const { t } = useLanguage()

  const languages = [
    { name: t("about.language.arabic"), level: 100, proficiency: t("about.language.native") },
    { name: t("about.language.french"), level: 85, proficiency: t("about.language.advanced") },
    { name: t("about.language.english"), level: 75, proficiency: t("about.language.advanced") },
    { name: t("about.language.german"), level: 60, proficiency: t("about.language.intermediate") },
    
   
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">{t("about.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-lg font-medium">{t("about.intro")}</p>
              <p className="text-muted-foreground">{t("about.description")}</p>
              <p className="text-muted-foreground">{t("about.interests")}</p>

              <Button variant="outline">
                <a href="/cv.pdf">
                <Download className="h-5 w-5" />
                {t("about.cv")}</a>
              </Button>
            </div>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">{t("about.languages")}</h3>
                <div className="space-y-4">
                  {languages.map((language, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{language.name}</span>
                        <span className="text-sm text-muted-foreground">{language.proficiency}</span>
                      </div>
                      <Progress value={language.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
