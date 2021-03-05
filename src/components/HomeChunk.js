import * as React from "react"
import * as styles from "./HomeChunk.module.css"
import { Link } from "gatsby"

const HomeChunk = ({ image, btnText, customStyle, btnLink }) => {
  const [imgUrl] = React.useState({ background: `url("${image}")` })
  return (
    <section className={styles.container} style={{ ...imgUrl, ...customStyle }}>
      <Link to={btnLink}>
        <button className={styles.btn}>{btnText}</button>
      </Link>
    </section>
  )
}

export default HomeChunk
