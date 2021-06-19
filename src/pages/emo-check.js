import React from "react"
import CONSTANTS from "../constants/emo-check.constants"
import Layout from "../components/Layout"
import ProjectLinks from "../components/ProjectLinks"
import ProjectDescription from "../components/ProjectDescription"

const EmoCheck = () => {
  return (
    <>
      <Layout>
        <main>
          <ProjectDescription
            title={"emo-check -- software engineer / project owner --"}
            pitch={"a minimalist homepage for your emotions"}
            description={`nearly 20% of americans report seeing a therapist, including me. one
            thing i’m always asked is to keep a journal, but i can never do it!
            that’s where emo-check comes in. it doubles as a homepage and
            includes a simple form to log how you’re feeling in the moment.
            then, you can view your history of emotions in your history tab. it
            looks like the stock market, but more volatile!`}
            technology={`technology: JavaScript, React, Material-UI, Express.js, Node, Mongo
            Atlas, Mongoose, Chart.js, React Router, webpack, babel, eslint,
            prettier, Heroku, yarn`}
          />
          <ProjectLinks
            github={CONSTANTS.GITHUB}
            deployment={CONSTANTS.DEPLOYMENT}
          />
        </main>
      </Layout>
    </>
  )
}

export default EmoCheck
