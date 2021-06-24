import React from "react"
import { SocialIcon } from "react-social-icons"
import * as style from "../styles/header.module.scss"

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <h1 className={style.logo}>Kenny--Tran</h1>
      <SocialIcon url="https://www.linkedin.com/in/kennyctran" />
      <SocialIcon url="https://www.github.com/kennyctran" />
      <SocialIcon url="https://kennyctran.com" />
    </div>
  )
}

export default Header
