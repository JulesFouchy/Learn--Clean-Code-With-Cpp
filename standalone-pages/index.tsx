import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"

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

function HomepageFeatures() {
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

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={siteConfig.customFields.main_page_link}
          >
            Let's get started 🚀
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
