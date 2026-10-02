"use client"

import {
  createContext,
  useContext,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react"
import { ResponsiveContainer, Tooltip, type TooltipProps } from "recharts"

import { cn } from "@/lib/utils"

export type ChartConfig = Record<
  string,
  {
    label?: ReactNode
    color?: string
  }
>

const ChartContext = createContext<ChartConfig>({})

function ChartContainer({
  config,
  className,
  children,
}: {
  config: ChartConfig
  className?: string
  children: ReactNode
}) {
  const colors = Object.fromEntries(
    Object.entries(config)
      .filter(([, value]) => value.color)
      .map(([key, value]) => [`--color-${key}`, value.color]),
  ) as CSSProperties

  return (
    <ChartContext.Provider value={config}>
      <div
        data-slot="chart"
        style={colors}
        className={cn("[&_.recharts-layer]:outline-hidden", className)}
      >
        <ResponsiveContainer width="100%" height="100%">
          {children as ReactElement}
        </ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

function ChartTooltip(props: TooltipProps<number, string> & { content?: ReactElement }) {
  return <Tooltip {...props} />
}

type TooltipEntry = {
  name?: string
  value?: number | string
  color?: string
  payload?: Record<string, unknown>
}

function ChartTooltipContent({
  active,
  payload,
  hideLabel,
  nameKey,
}: {
  active?: boolean
  payload?: TooltipEntry[]
  hideLabel?: boolean
  nameKey?: string
}) {
  const config = useContext(ChartContext)

  if (!active || !payload?.length) return null

  return (
    <div className="grid min-w-32 gap-2 rounded-lg border bg-popover px-3 py-2 text-sm text-popover-foreground shadow-xl">
      {!hideLabel && <p className="font-medium">{String(payload[0]?.name ?? "")}</p>}
      {payload.map((entry, index) => {
        const key = String(entry.payload?.[nameKey ?? "name"] ?? entry.name ?? index)
        const item = config[key]
        return (
          <div key={`${key}-${index}`} className="flex items-center gap-2">
            <span
              className="size-2.5 rounded-[3px]"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-muted-foreground">{item?.label ?? key}</span>
            <span className="ml-auto font-mono font-medium tabular-nums">
              {entry.value}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export { ChartContainer, ChartTooltip, ChartTooltipContent }
