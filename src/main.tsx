import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ErrorBoundary } from "react-error-boundary"
import { MantineProvider } from "@mantine/core"
import { Provider } from "react-redux"

import theme from "@/theme"
import ErrorFallback from "@/components/ErrorFallback"
import App from "@/components/App"
import { store } from "@/redux/store"

import "@/scss/vendors/normalize.scss"
import "@mantine/core/styles.css"
import "@/index.scss"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    </MantineProvider>
  </StrictMode>,
)
