import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ErrorBoundary } from "react-error-boundary"

import App from "@/components/App"
import ErrorFallback from "@/components/ErrorFallback"

import "@/scss/vendors/normalize.scss"
import "@/index.scss"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
