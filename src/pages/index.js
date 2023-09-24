import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import styles from './index.module.css'

function HomepageHeader () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <main className={clsx('hero hero--primary', styles.heroBanner)}>
      <h1 className="hero__title">{siteConfig.title}</h1>
      <p className="hero__subtitle">{siteConfig.tagline}</p>

      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--lg"
          to="/docs/About">
          Get Started
        </Link>
      </div>
    </main>
  )
}

export default function Home () {
  return (
    <Layout
      title="Buda"
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  )
}
