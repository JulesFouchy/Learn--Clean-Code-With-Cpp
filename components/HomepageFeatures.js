import clsx from "clsx"
import React from "react"

import styles from "./HomepageFeatures.module.css"

const FeatureList = [
  {
    title: "Improve your C++",
    Svg: require("../static/img/drawkit-daily-life-vector-illustration-07.svg")
      .default,
    description: (
      <>
        No matter your current level, there will be something for you to learn.{" "}
        <b>Improving</b> is what matters.
      </>
    ),
  },
  {
    title: "Learn general programming patterns",
    Svg: require("../static/img/holiday-season-7.svg").default,
    description: (
      <>
        Most lessons will be applicable to any programming language, not only
        C++.
      </>
    ),
  },
  {
    title: "Ease your workflow",
    Svg: require("../static/img/undraw_docusaurus_react.svg").default,
    description: <>With the appropriate tools, everything becomes easier.</>,
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
