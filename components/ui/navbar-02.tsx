import Link from "next/link"

import { Button } from "@/components/ui/button"

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#analitica", label: "Analítica" },
]

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-slate-950/35 backdrop-blur-xl">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
      >
        <Link href="#inicio" className="text-lg font-semibold tracking-tight">
          masteer<span className="text-cyan-300">.</span>
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-cyan-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button
          className="border border-cyan-200/30 bg-cyan-300/10 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.12)] hover:bg-cyan-300/20"
          render={<Link href="#contacto" />}
        >
          Contactar
        </Button>
      </nav>
    </header>
  )
}
