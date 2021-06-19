import React from "react"
import CONSTANTS from "../constants/diverr.constants.js"
import Layout from "../components/Layout"
import ProjectLinks from "../components/ProjectLinks"
import ProjectDescription from "../components/ProjectDescription"

const Diverr = () => {
  return (
    <>
      <Layout>
        <main>
          <ProjectDescription
            title={"diverr -- architecture owner / software engineer --"}
            pitch={"a site for divers"}
            description={`storing paper logs can be a pain for divers. built with a six-person
            agile team, diverr is first and foremost a place where you can store
            personal dive logs and then easily look back on them by filtering
            them. and the dive community also has so many exciting adventures,
            it would be a shame to not share your adventures with others. diverr
            lets you upload and share photos from your dives! and of course you
            can see all the other exciting dive photos of others.`}
            technology={`technology: JavaScript, Next.js, React, Material-UI, Husky, AWS,
            Vercel, GitHub Actions, Postgres, Prettier, ESLint, Jest, Enzyme,
            Puppeteer`}
          />
          <ProjectLinks
            deployment={CONSTANTS.DEPLOYMENT}
            github={CONSTANTS.GITHUB}
          />
        </main>
        <section>
          <img src="inital-page-load.gif" alt="diverr inital page load" />
        </section>
      </Layout>
    </>
  )
}

export default Diverr
