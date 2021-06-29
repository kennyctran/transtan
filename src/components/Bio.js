import React from "react"
import * as style from "../styles/home.module.scss"

function Bio() {
  return (
    <>
      <div>
        <h2>kenny is a software engineer in New York, NY</h2>
        <h3>
          he is currently a teaching fellow at{" "}
          <a
            href="https://www.hackreactor.com/"
            target="_blank"
            rel="noreferrer"
          >
            Hack Reactor
          </a>
        </h3>
        <h3>
          he is also doing contract work with{" "}
          <a href="https://stepladder.ai/" target="_blank" rel="noreferrer">
            StepLadder
          </a>
        </h3>
      </div>
      <div>
        <p className={style.introItems}>
          technology: JavaScript React Redux Next.js Material-UI SASS/SCSS
          jQuery Node Express.js MongoDB MySQL Mocha Jest Enzyme SuperTest AWS
          Docker Heroku Vercel GitHub Actions
        </p>
      </div>
      <div>
        <p className={style.introItems}>
          drop by my Github: github.com/kennyctran drop by my LinkedIn:
          linkedin.com/in/kennyctran see my non-engineer things here:
          kennyctran.com
        </p>
      </div>
    </>
  )
}

export default Bio
