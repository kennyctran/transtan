import React from "react"
import Layout from "../components/Layout"

const EmoCheck = () => {
  return (
    <>
      <Layout>
        <main>
          <p>emo-check -- software engineer / project owner --</p>
          <p>a minimalist homepage for your emotions</p>
          <p>
            nearly 20% of americans report seeing a therapist, including me. one
            thing i’m always asked is to keep a journal, but i can never do it!
            that’s where emo-check comes in. it doubles as a homepage and
            includes a simple form to log how you’re feeling in the moment.
            then, you can view your history of emotions in your history tab. it
            looks like the stock market, but more volatile!
          </p>
          <p>
            technology: JavaScript, React, Material-UI, Express.js, Node, Mongo
            Atlas, Mongoose, Chart.js, React Router, webpack, babel, eslint,
            prettier, Heroku, yarn
          </p>
          <p>deployed at: emo-check.herokuapp.com</p>
          <p>github: github.com/kennyctran/emo-check</p>
        </main>
      </Layout>
    </>
  )
}

export default EmoCheck
