import React from "react"
import Layout from "../components/Layout"
import * as style from "../styles/home.module.scss"

const Home = () => {
  return (
    <>
      <Layout>
        <main className="mainBox">
          <div className={style.introBox}>
            <div>
              <h1 className={'h1'}>kenny is a software engineer in New York, NY</h1>
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
        <section>
          <img src="diverr-home.gif" alt="diverr application homepage" className={style.projectImage}/>
        </section>
      </Layout>
    </>
  )
}

export default Home
