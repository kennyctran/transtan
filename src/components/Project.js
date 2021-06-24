import React from "react"
import * as style from "../styles/project.module.scss"

function Project({ title, src, alt }) {
  return (
    <div className={style.project}>
      <h3>{title}</h3>
      <img src={src} alt={alt} className={style.projectImage} />
    </div>
  )
}

export default Project
