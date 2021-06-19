import React from "react"
import CONSTANTS from "../constants/atelier.constants.js"
import Layout from "../components/Layout"
import ProjectLinks from "../components/ProjectLinks"
import ProjectDescription from "../components/ProjectDescription"

const Atelier = () => {
  return (
    <>
      <Layout>
        <main>
          <ProjectDescription
            title={"Atelier -- software engineer --"}
            pitch={"an e-commerce platform for east coast millenials"}
            description={`built with a two-person team, Atelier's Product Detail page reqiured
            a rework in order to attract younger customers with a sleek view
            while noting the possibility of future scaling. The company also
            required use of their REST API, which was blackboxed.`}
            technology={`technology: React, Redux, SCSS, React Router, webpack, Jest, Enzyme,
            SuperTest, Express.js, Redux-Thunk, yarn`}
          />
          <ProjectLinks github={CONSTANTS.GITHUB} />
        </main>
        <section></section>
      </Layout>
    </>
  )
}

export default Atelier
