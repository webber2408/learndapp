import React from "react";
import Layout from "@theme/Layout";
import HeaderImg from "@site/static/img/header_back.png";

import "./index.css";

function HomepageHeader() {
  return (
    <header>
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
  return (
    <Layout
      title={`Learn Dapp`}
      description="Decentralized Applications Development Made Easy"
    >
      <HomepageHeader />
    </Layout>
  );
}
