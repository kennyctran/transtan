import React from "react"

const ProjectLinks = (props) => {
  return (
    <>
      {props.deployment && <p>deployment: {props.deployment}</p>}
      {props.github && <p>github: {props.github}</p>}
    </>
  )
}

export default ProjectLinks;
