import { Image } from "@mantine/core"

import image from "@/assets/img/logo.svg"
import styles from "@/components/Logo/styles.module.scss"

const Logo = () => {
  return <Image src={image} alt="Aviasales logo" className={styles.logo} />
}

export default Logo
