import { FC } from "react"
import { Title, Button, Text, Paper } from "@mantine/core"
import { FallbackProps } from "react-error-boundary"

import theme from "@/theme"

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <Paper p="md" shadow="sm" style={{ textAlign: "center", marginTop: "20px" }}>
      <Title order={3} c="red" ff={"Open-Sans-Semi-Bold"}>
        Что-то пошло не так!
      </Title>
      <Text lineClamp={5} ff={"Open-Sans-Regular"} c={theme.colors?.fontMain?.[0]}>
        Error: {error.message}
      </Text>

      <Button onClick={resetErrorBoundary} mt={10} tt={"uppercase"} ff={"Open-Sans-Regular"}>
        Попробовать снова
      </Button>
    </Paper>
  )
}

export default ErrorFallback
