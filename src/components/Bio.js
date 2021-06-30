import React from "react"
import * as style from "../styles/home.module.scss"

function Bio() {
  return (
    <>
      <div>
        <h2>kenny is a software engineer in New York, NY</h2>
        <h3>
          - teaching fellow at{" "}
          <a
            href="https://www.hackreactor.com/"
            target="_blank"
            rel="noreferrer"
          >
            Hack Reactor
          </a>
        </h3>
        <h3>
          - contract software engineer with{" "}
          <a href="https://stepladder.ai/" target="_blank" rel="noreferrer">
            StepLadder
          </a>
        </h3>
      </div>
      <div className={style.introBox}>
        <div>
          <h6>front-end tools</h6>
          <p className={style.introItems}>
            JavaScript, React, Redux, Next.js, jQuery, HTML
          </p>
        </div>
        <div>
          <h6>front-end styling tools</h6>
          <p className={style.introItems}>
            CSS, Sass/SCSS, Less.js, TailwindCSS, Material-UI
          </p>
        </div>
        <div>
          <h6>back-end and database tools</h6>
          <p className={style.introItems}>
            Node, Express.js, MongoDB, MySQL SQLite
          </p>
        </div>
        <div>
          <h6>testing tools</h6>
          <p className={style.introItems}>
            Mocha, Jest, Enzyme, SuperTest
          </p>
        </div>
        <div>
          <h6>deployment tools</h6>
          <p className={style.introItems}>
            AWS, Docker, Heroku, Vercel, GitHub Actions
          </p>
        </div>
        <div>
          <h6>developer tools</h6>
          <p className={style.introItems}>
            Git, Webpack, Babel, yarn, npm, Trello, Jira, Asana
          </p>
        </div>
      </div>
      <div>
        {/* <p className={style.introItems}>
          drop by my Github: github.com/kennyctran drop by my LinkedIn:
          linkedin.com/in/kennyctran see my non-engineer things here:
          kennyctran.com
        </p> */}
        <article className={style.extraBox}>
          + see my actor side{" "}
          <a href="http://www.kennyctran.com/" target="_blank" rel="noreferrer">
            here
          </a>
        </article>
      </div>
    </>
  )
}

export default Bio
