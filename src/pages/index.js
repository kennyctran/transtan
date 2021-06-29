import React from "react"
import Layout from "../components/Layout"
import Project from "../components/Project"
import Bio from "../components/Bio"
import * as style from "../styles/home.module.scss"

const Home = () => {
  return (
    <>
      <Layout>
        <main className="mainBox">
          <div className={style.introBox}>
            <Bio />
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
