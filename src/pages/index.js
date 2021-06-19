import React from "react"
import Layout from "../components/Layout"
import style from "../styles/home.module.scss"

const Home = () => {
  return (
    <>
      <Layout>
        <main>
          <p>kenny is a software engineer in New York, NY</p>
          <p>
            some technology i’ve worked with: JavaScript React Redux Next.js
            Material-UI SASS/SCSS jQuery Node Express.js MongoDB MySQL Mocha
            Jest Enzyme SuperTest AWS Docker Heroku Vercel GitHub Actions
          </p>
          <p>
            drop by my Github: github.com/kennyctran drop by my LinkedIn:
            linkedin.com/in/kennyctran see my non-engineer things here:
            kennyctran.com
          </p>
        </main>
        <section>
          <img src="diverr-home.gif" alt="diverr application homepage" />
        </section>
      </Layout>
    </>
  )
}

export default Home
