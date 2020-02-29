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
          <p>Giusy Magliari & Ornella Galati Rando</p>
          <a href="tel:+4951139080588">0511 39080588</a>
          <br />
          <a href="mailto:info@bellissima-hannover.com">
            info@bellissima-hannover.com
          </a>
          <iframe
            className="google-maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9738.287060519562!2d9.766468!3d52.396313!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x10393a28cb3136f8!2sBellissima%20Nails%20%26%20Cosmetics!5e0!3m2!1sde!2sde!4v1582974157773!5m2!1sde!2sde"
            frameborder="0"
            allowfullscreen=""
          ></iframe>
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
