import Navbar from "@/components/ui/navbar-02"
import { ChartRadialSimple } from "@/components/chart-radial-simple"
import { Button } from "@/components/ui/button"
import { Default, Destructive } from "@/components/alert-examples"
import Link from "next/link"

export default function Demo() {
  return (
    <main className="relative isolate min-h-svh overflow-hidden bg-[#050713] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[radial-gradient(ellipse_at_50%_-15%,rgba(34,211,238,0.24),transparent_48%),linear-gradient(135deg,#050713_10%,#0b1027_55%,#10081f)]"
      >
        <div className="animate-aurora absolute -top-52 left-[8%] h-[36rem] w-[36rem] rounded-full bg-cyan-400/35 blur-[100px]" />
        <div className="animate-aurora-delayed absolute top-16 -right-48 h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/30 blur-[110px]" />
        <div className="animate-aurora absolute -bottom-80 left-[28%] h-[40rem] w-[40rem] rounded-full bg-blue-600/35 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.075)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>
      <Navbar />
      <section
        id="inicio"
        className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
      >
        <div className="text-center lg:text-left">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/[0.07] px-4 py-2 text-xs font-medium tracking-[0.18em] text-cyan-100 uppercase shadow-[0_0_30px_rgba(34,211,238,0.08)]">
            <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
            Dashboard inteligente
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
            Tus datos, en una nueva <span className="text-cyan-200">dimensión.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg lg:mx-0">
            Explora tus proyectos y métricas desde un espacio diseñado para ver
            más, entender mejor y avanzar con claridad.
          </p>
          <Button
            className="mt-9 h-11 border border-cyan-100/40 bg-cyan-300 text-slate-950 shadow-[0_0_36px_rgba(34,211,238,0.28)] hover:bg-cyan-200"
            render={<Link href="#proyectos" />}
          >
            Explorar proyectos
          </Button>
        </div>
        <div className="w-full">
          <ChartRadialSimple />
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl px-6 pb-16" aria-labelledby="alerts-heading">
        <h2 id="alerts-heading" className="mb-5 text-xl font-semibold">
          Alertas
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Default />
          <Destructive />
        </div>
      </section>
    </main>
  )
}
