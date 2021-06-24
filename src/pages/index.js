import React from "react"
import Layout from "../components/Layout"
import Project from "../components/Project"
import * as style from "../styles/home.module.scss"

const Home = () => {
  return (
    <>
      <Layout>
        <main className="mainBox">
          <div className={style.introBox}>
            <div>
              <h2>
                kenny is a software engineer in New York, NY
              </h2>
            </div>
            <div>
              <p className={style.introItems}>
                some technology i’ve worked with: JavaScript React Redux Next.js
                Material-UI SASS/SCSS jQuery Node Express.js MongoDB MySQL Mocha
                Jest Enzyme SuperTest AWS Docker Heroku Vercel GitHub Actions
              </p>
            </div>
            <div>
              <p className={style.introItems}>
                drop by my Github: github.com/kennyctran drop by my LinkedIn:
                linkedin.com/in/kennyctran see my non-engineer things here:
                kennyctran.com
              </p>
            </div>
          </div>
        </main>
        <section className={style.projectsLayout}>
          <Project
            title={"diverr"}
            src={"diverr-home.gif"}
            alt={"diverr application homepage"}
          />
          <Project
            title={"Atelier"}
            src={"atelier.png"}
            alt={"Atelier related products feature"}
          />
          <Project
            title={"emo-check"}
            src={"emocheckhome.JPG"}
            alt={"emo-check homepage"}
          />
          <Project
            title={"QuestAPI"}
            src={"questapi.png"}
            alt={"QuestAPI data flow"}
          />
          <Project
            title={"SpiceItUp"}
            src={"spiceitupcount.gif"}
            alt={"SpiceItUp application counting text"}
          />
          <Project
            title={"Basic jQuery Calculator"}
            src={"jquerycalculator.jpeg"}
            alt={"A basic calculator built with jQuery"}
          />
        </section>
      </Layout>
    </>
  )
}

export default Home
