import { FC } from "react"
import { Alert, Button, Container, Center, Grid, Text } from "@mantine/core"
import { FallbackProps } from "react-error-boundary"

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <Container fluid style={{ height: "100vh" }} p={0}>
      <Center style={{ flexDirection: "column" }}>
        <Grid style={{ width: "100%" }}>
          <Grid.Col span={12} style={{ maxWidth: "400px", width: "100%" }}>
            <Alert
              title="Что-то пошло не так..."
              color="red"
              style={{ marginBottom: "20px" }}
              ff={"Open-Sans-Semi-Bold"}>
              <Text lineClamp={5} style={{ margin: 0, maxWidth: 352 }} ff={"Open-Sans-Regular"}>
                Error: {error.message}
              </Text>
            </Alert>
            <Button onClick={resetErrorBoundary} color="blue" fullWidth tt={"uppercase"}>
              Попробуйте снова
            </Button>
          </Grid.Col>
        </Grid>
      </Center>
    </Container>
  )
}

export default ErrorFallback
