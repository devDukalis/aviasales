import { FC } from "react"
import { Result, Button } from "antd"
import { FallbackProps } from "react-error-boundary"

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <Result
      status="error"
      title="Something went wrong"
      subTitle={error.message}
      extra={
        <Button type="primary" onClick={resetErrorBoundary}>
          Try again
        </Button>
      }
    />
  )
}

export default ErrorFallback
