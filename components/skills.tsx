"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { Code, Database, Globe, Layers, MessageSquare, Puzzle, Server, Users } from "lucide-react"

export default function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t("skills.frontend"),
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Angular", level: 70 },
      ],
    },
    {
      title: t("skills.backend"),
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "PHP", level: 85 },
        { name: "Laravel", level: 80 },
        { name: "Java EE", level: 70 },
        { name: "Python", level: 65 },
      ],
    },
    {
      title: t("skills.databases"),
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Oracle", level: 75 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      title: t("skills.tools"),
      icon: <Puzzle className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 85 },
        { name: "MS Office", level: 80 },
        { name: "WordPress", level: 75 },
        { name: "Figma", level: 65 },
      ],
    },
  ]

  const softSkills = [
    { name: t("skills.softskill.learning"), icon: <Code /> },
    { name: t("skills.softskill.organization"), icon: <Layers /> },
    { name: t("skills.softskill.teamwork"), icon: <Users /> },
    { name: t("skills.softskill.communication"), icon: <MessageSquare /> },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">{t("skills.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center gap-2">
                  <div className="text-primary">{category.icon}</div>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-center mb-6">{t("skills.softskills")}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6 flex flex-col items-center gap-2">
                  <div className="text-primary p-3 rounded-full bg-primary/10">{skill.icon}</div>
                  <h4 className="font-medium">{skill.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
