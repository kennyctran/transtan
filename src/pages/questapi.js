import React from "react"
import Layout from "../components/Layout"

const QuestAPI = () => {
  return (
    <>
      <Layout>
        <main>
          <p>QuestAPI -- software engineer --</p>
          <p>a scalable REST API to support the Atelier e-commerce site</p>
          <p>
            QuestAPI provides an automatic Extract, Transform and Load process
            for the required CSV data, which populates a Mongo instance without
            any need for manual user interaction. That process, combined with
            tests covering 77% of the code base, and a simple straightforward
            API that interacts with Mongo and Redis instances which are
            containerized with Docker, means that the service is easily scalable
            both vertically and horizontally in the future.
          </p>
          <p>
            technology: Node, Express.js, MongoDB, Mongoose, Redis, Jest, AWS,
            Docker, SuperTest, Loader.io, yarn
          </p>
          <p>github: github.com/Pipes36/QuestAPI</p>
        </main>
      </Layout>
    </>
  )
}

export default QuestAPI
