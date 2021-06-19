import React from "react"
import Layout from "../components/Layout"

const Diverr = () => {
  return (
    <>
      <Layout>
        <main>
          <p>diverr -- architecture owner / software engineer --</p>
          <p>a site for divers</p>
          <p>
            storing paper logs can be a pain for divers. built with a six-person
            agile team, diverr is first and foremost a place where you can store
            personal dive logs and then easily look back on them by filtering
            them. and the dive community also has so many exciting adventures,
            it would be a shame to not share your adventures with others. diverr
            lets you upload and share photos from your dives! and of course you
            can see all the other exciting dive photos of others.
          </p>
          <p>
            technology: JavaScript, Next.js, React, Material-UI, Husky, AWS,
            Vercel, GitHub Actions, Postgres, Prettier, ESLint, Jest, Enzyme,
            Puppeteer
          </p>
          <p>deployed at: diverr-pi.vercel.app</p>
          <p>github: github.com/hratx-blue-ocean/Diverr</p>
        </main>
        <section>
          <img src="inital-page-load.gif" alt="diverr inital page load" />
        </section>
      </Layout>
    </>
  )
}

export default Diverr
