"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "de"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Web Developer",
    "hero.subtitle": "I’m a student specializing in IT development with a focus on backend development and creating websites from the ground up.",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Contact Me",

    // About
    "about.title": "About Me",
    "about.intro":
      "Hello! I'm Mohamed Amine Garbouz, a passionate web developer from Morocco.",
    "about.description":
      "I'm 24 years old and focused on application development training in Germany. With expertise in React and Laravel, I enjoy building responsive and dynamic web applications that solve real-world problems.",
    "about.interests":
      "When I'm not coding, I enjoy football, traveling, cycling, and exploring new programming concepts.",
    "about.cv": "Download CV",
    "about.languages": "Languages",
    "about.language.arabic": "Arabic",
    "about.language.german": "German",
    "about.language.english": "English",
    "about.language.french": "French",
    "about.language.native": "Native",
    "about.language.intermediate": "Intermediate",
    "about.language.advanced": "Advanced",

    // Skills
    "skills.title": "Technical Skills",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.databases": "Databases",
    "skills.tools": "Tools",
    "skills.softskills": "Soft Skills",
    "skills.softskill.learning": "Quick Learning",
    "skills.softskill.organization": "Organizational Skills",
    "skills.softskill.teamwork": "Teamwork",
    "skills.softskill.communication": "Communication",

    // Experience
    "experience.title": "Professional Experience",
    "experience.lisacom.title": "Web Developer",
    "experience.lisacom.company": "Lisacom",
    "experience.lisacom.period": "August 2023 - November 2023",
    "experience.lisacom.description":
      "Developed interactive web applications with React and Angular. Created logic and data-based web applications with Laravel. Maintained frontend components and optimized UX/UI.",
    "experience.lisacom.technologies": "Technologies used:",

    // Education
    "education.title": "Education",
    "education.german.title": "Intensive German Language Course (A1-B1)",
    "education.german.period": "January 2024 - August 2024",
    "education.engineering.title": "University Diploma in Engineering for Application Design and Development",
    "education.engineering.period": "2022 - 2023",
    "education.technical.title": "Technical Diploma in IT Development",
    "education.technical.period": "2020 - 2022",
    "education.highschool.title": "High School Diploma in Physics",
    "education.highschool.period": "2018 - 2019",

    // Projects
    "projects.title": "Projects",
    "projects.view": "View Project",
    "projects.code": "View Code",
    "projects.technologies": "Technologies:",

    // Contact
    "contact.title": "Get In Touch",
    "contact.description":
      "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.info.email": "Email:",
    "contact.info.phone": "Phone:",

    // Footer
    "footer.rights": "All rights reserved",
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.about": "Über mich",
    "nav.skills": "Fähigkeiten",
    "nav.experience": "Erfahrung",
    "nav.education": "Bildung",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",

    // Hero
    "hero.title": "Webentwickler",
    "hero.subtitle": "Ich bin ein Student der Fachrichtung IT-Entwicklung mit Schwerpunkt auf Backend-Entwicklung und der Erstellung von Websites von Grund auf.",
    "hero.cta.projects": "Projekte ansehen",
    "hero.cta.contact": "Kontaktieren",

    // About
    "about.title": "Über Mich",
    "about.intro":
      "Hallo! Ich bin Mohamed Amine Garbouz, ein leidenschaftlicher Webentwickler aus Marokko .",
    "about.description":
      "Ich bin 24 Jahre alt und möchte eine Ausbildung in Fachinformatik mit der Fachrichtung Anwendungsentwicklung in Deutschland machen. Mit meiner Expertise in React und Laravel entwickle ich gerne responsive und dynamische Webanwendungen, die reale Probleme lösen..",
    "about.interests":
      "Wenn ich nicht programmiere, genieße ich Fußball, Reisen, Radfahren und das Erkunden neuer Programmierkonzepte.",
    "about.cv": "Lebenslauf herunterladen",
    "about.languages": "Sprachen",
    "about.language.arabic": "Arabisch",
    "about.language.german": "Deutsch",
    "about.language.english": "Englisch",
    "about.language.french": "Französisch",
    "about.language.native": "Muttersprache",
    "about.language.intermediate": "Mittelstufe",
    "about.language.advanced": "Fortgeschritten",

    // Skills
    "skills.title": "Technische Fähigkeiten",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.databases": "Datenbanken",
    "skills.tools": "Tools",
    "skills.softskills": "Soft Skills",
    "skills.softskill.learning": "Schnelles Lernen",
    "skills.softskill.organization": "Organisationsfähigkeit",
    "skills.softskill.teamwork": "Teamarbeit",
    "skills.softskill.communication": "Kommunikation",

    // Experience
    "experience.title": "Berufserfahrung",
    "experience.lisacom.title": "Webentwickler",
    "experience.lisacom.company": "Lisacom",
    "experience.lisacom.period": "August 2023 - November 2023",
    "experience.lisacom.description":
      "Entwicklung interaktiver Webanwendungen mit React und Angular. Erstellung von logik- und datenbasierten Webanwendungen mit Laravel. Wartung von Frontend-Komponenten und Optimierung der UX/UI.",
    "experience.lisacom.technologies": "Verwendete Technologien:",

    // Education
    "education.title": "Bildung",
    "education.german.title": "Intensiver Deutschkurs (A1-B1)",
    "education.german.period": "Januar 2024 - August 2024",
    "education.engineering.title": "Universitätsdiplom in Ingenieurwesen für Anwendungsdesign und -entwicklung",
    "education.engineering.period": "2022 - 2023",
    "education.technical.title": "Technisches Diplom in IT-Entwicklung",
    "education.technical.period": "2020 - 2022",
    "education.highschool.title": "Abitur in Physik",
    "education.highschool.period": "2018 - 2019",

    // Projects
    "projects.title": "Projekte",
    "projects.view": "Projekt ansehen",
    "projects.code": "Code ansehen",
    "projects.technologies": "Technologien:",

    // Contact
    "contact.title": "Kontakt",
    "contact.description":
      "Kontaktieren Sie mich gerne, wenn Sie einen Entwickler suchen, eine Frage haben oder einfach in Kontakt treten möchten.",
    "contact.form.name": "Name",
    "contact.form.email": "E-Mail",
    "contact.form.message": "Nachricht",
    "contact.form.submit": "Nachricht senden",
    "contact.info.email": "E-Mail:",
    "contact.info.phone": "Telefon:",

    // Footer
    "footer.rights": "Alle Rechte vorbehalten",
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
})

export const useLanguage = () => useContext(LanguageContext)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}
