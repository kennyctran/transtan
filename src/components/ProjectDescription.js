import React from "react"

const ProjectDescription = ({ title, pitch, description, technology }) => {
  return (
    <>
      <h6>{title}</h6>
      <p>{pitch}</p>
      <p>{description}</p>
      <p>{technology}</p>
    </>
  )
}

export default ProjectDescription
