import React from "react"
import { SocialIcon } from "react-social-icons"
import * as style from "../styles/header.module.scss"

const iconStyle = {
  height: "2.5rem",
  width: "2.5rem",
}

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <h1 className={style.logo}>Kenny--Tran</h1>
      <div className={style.socialContainer}>
        <SocialIcon
          url="https://www.linkedin.com/in/kennyctran"
          style={iconStyle}
          target="_blank"
        />
        <SocialIcon
          url="https://www.github.com/kennyctran"
          style={iconStyle}
          target="_blank"
        />
        <SocialIcon
          url="https://kennyctran.com"
          style={iconStyle}
          target="_blank"
        />
      </div>
    </div>
  )
}

export default Header
