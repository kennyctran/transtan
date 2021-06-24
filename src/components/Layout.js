import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/global.scss"

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
