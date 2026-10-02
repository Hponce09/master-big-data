import type { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

type AlertProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "destructive"
}

function Alert({ className, variant = "default", ...props }: AlertProps) {
  return (
    <div
      role="alert"
      data-slot="alert"
      data-variant={variant}
      className={cn(
        "relative grid w-full grid-cols-[auto_1fr] gap-x-3 gap-y-1 rounded-lg border p-4 text-sm [&>svg]:col-start-1 [&>svg]:row-span-2 [&>svg]:mt-0.5 [&>svg]:size-4",
        variant === "default" && "border-white/15 bg-slate-950/65 text-white",
        variant === "destructive" &&
          "border-rose-400/35 bg-rose-950/45 text-rose-50 [&>svg]:text-rose-100",
        className,
      )}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      data-slot="alert-title"
      className={cn("col-start-2 font-medium leading-none", className)}
      {...props}
    />
  )
}

function AlertDescription({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-description"
      className={cn("col-start-2 text-sm text-slate-300 [&_p]:leading-relaxed", className)}
      {...props}
    />
  )
}

export { Alert, AlertDescription, AlertTitle }
