"use client"

import { useLanguage } from "./language-provider"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="font-bold text-xl">
              <span className="text-primary">M.</span>Garbouz
            </Link>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              href="https://github.com/MrGarbouz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="mailto:aminegarbouz01@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Mohamed Amine Garbouz. {t("footer.rights")}.
          </div>
        </div>
      </div>
    </footer>
  )
}
