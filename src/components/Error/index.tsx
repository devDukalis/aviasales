import { FC } from "react"
import { Button, Paper, Text, Title } from "@mantine/core"

import theme from "@/theme"

interface Props {
  message: string
}

const Error: FC<Props> = ({ message }) => {
  const onRetry = () => window.location.reload()

  return (
    <Paper p="md" shadow="sm" style={{ textAlign: "center", marginTop: "20px" }}>
      <Title order={3} c="red" ff={"Open-Sans-Semi-Bold"}>
        Что-то пошло не так!
      </Title>
      <Text ff={"Open-Sans-Regular"} c={theme.colors?.fontMain?.[0]}>
        {message}
      </Text>
      <Button onClick={onRetry} mt={10} tt={"uppercase"} ff={"Open-Sans-Regular"}>
        Попробовать снова
      </Button>
    </Paper>
  )
}

export default Error
