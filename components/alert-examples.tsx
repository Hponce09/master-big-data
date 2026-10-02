import { Terminal } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const Default = () => (
  <Alert>
    <Terminal />
    <AlertTitle>Default Alert</AlertTitle>
    <AlertDescription>
      You can add components and dependencies to your app using the CLI.
    </AlertDescription>
  </Alert>
)

const Destructive = () => (
  <Alert variant="destructive">
    <Terminal />
    <AlertTitle>Destructive Alert</AlertTitle>
    <AlertDescription>
      You can add components and dependencies to your app using the CLI.
    </AlertDescription>
  </Alert>
)

export { Default, Destructive }
