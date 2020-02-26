import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

const Kontakt = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="Kontakt" keywords={[`kontakt`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>Kontakt</h2>
          <p>
            Wir sorgen dafür, dass Sie sich wohlfühlen und mit unseren
            verschiedenen Behandlungsangeboten das bestmögliche Resultat
            erzielen.
          </p>
        </div>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <Kontakt location={props.location} data={data} {...props} />
    )}
  />
);
