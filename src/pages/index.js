import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HeaderImg from "@site/static/img/header_back.png";

import styles from "./index.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      {/* <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div> */}
      <div className="headerWrapper">
        <div className="left">
          <div className="left__title">____ Learn Dapp ____</div>
          <div className="left__content">
            Decentralized application programming made{" "}
            <span className="cursive">Simple</span>
          </div>
          <div className="left__subContent">
            A complete tutorial/blog series (still in making!) - Helps you build
            a blockchain based decentralized application from scratch (even
            deploy it!){" "}
          </div>
          <button
            className="left__button"
            onClick={() => (window.location.href = "/docs/intro")}
          >
            Learn Now
          </button>
        </div>
        <div className="right">
          <img src={HeaderImg} />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Learn Dapp`}
      description="Decentralized Applications Development Made Easy"
    >
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
