import React from "react"
import CONSTANTS from "../constants/questapi.constants"
import Layout from "../components/Layout"
import ProjectLinks from "../components/ProjectLinks"
import ProjectDescription from "../components/ProjectDescription"

const QuestAPI = () => {
  return (
    <>
      <Layout>
        <main>
          <ProjectDescription
            title={"QuestAPI -- software engineer --"}
            pitch={"a scalable REST API to support the Atelier e-commerce site"}
            description={`QuestAPI provides an automatic Extract, Transform and Load process
            for the required CSV data, which populates a Mongo instance without
            any need for manual user interaction. That process, combined with
            tests covering 77% of the code base, and a simple straightforward
            API that interacts with Mongo and Redis instances which are
            containerized with Docker, means that the service is easily scalable
            both vertically and horizontally in the future.`}
            technology={`technology: Node, Express.js, MongoDB, Mongoose, Redis, Jest, AWS,
            Docker, SuperTest, Loader.io, yarn`}
          />
          <ProjectLinks github={CONSTANTS.GITHUB} />
        </main>
      </Layout>
    </>
  )
}

export default QuestAPI
