import { Image } from "antd"

import image from "@/assets/img/logo.svg"

const Logo = () => {
  return <Image src={image} preview={false} width={60} height={60} />
}

export default Logo
