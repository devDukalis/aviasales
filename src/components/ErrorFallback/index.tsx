import { FC } from "react"
import { Alert, Button, Container, Center, Grid } from "@mantine/core"
import { FallbackProps } from "react-error-boundary"

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Center style={{ flexDirection: "column", height: "100%" }}>
        <Grid justify="center" style={{ width: "100%", padding: "0 16px" }}>
          <Grid.Col span={12} style={{ maxWidth: "400px", width: "100%" }}>
            <Alert title="Something went wrong..." color="red" style={{ marginBottom: "20px" }}>
              <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                <p style={{ margin: 0, maxWidth: 352 }}>Error: {error.message}</p>
              </div>
            </Alert>
            <Button onClick={resetErrorBoundary} color="blue" fullWidth>
              Try again
            </Button>
          </Grid.Col>
        </Grid>
      </Center>
    </Container>
  )
}

export default ErrorFallback
