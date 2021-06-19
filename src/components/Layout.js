import React from "react"
import Header from "./Header"
import "../styles/global.scss"

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout
