import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

const Philosophie = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="Philosophie" keywords={[`philosophie`, `ueber-uns`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>
            Seit 2002 führen wir mit großer Freude und Leidenschaft unser Studio
            Bellissima Nails & Cosmetics.
          </h2>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Ornella Galati-Rando und Giusy Magliari</figcaption>
          </figure>
          <h3>Unsere Philosophie</h3>
          <p>
            Wir sorgen dafür, dass Sie sich wohlfühlen und mit unseren
            verschiedenen Behandlungsangeboten das bestmögliche Resultat
            erzielen.
          </p>
          <p>
            Im Oktober 2008 haben wir gemeinsam unsere Ausbildung zur
            Kosmetikerin, Visagistin und Wellness Beraterin in Hannover
            erfolgreich abgeschlossen. Somit haben wir uns immer besser
            optimieren und spezialisieren können. Regelmäßig besuchen wir
            zahlreiche Fort- und Weiterbildungen sowie große Fachmessen, um für
            Sie stets auf dem aktuellen Stand der Beauty & Kosmetologie zu sein.
          </p>
          <p>
            Herkömmliche Behandlungen finden Sie bei uns nicht. Uns ist es
            wichtig, speziell auf Ihren Hautzustand einzugehen und diesen
            dauerhaft zu verbessern sowie den biologischen Alterungsprozess
            Ihrer Haut verzögern zu können. Neueste Behandlungsmethoden sowie
            apparative Kosmetik, wie Aquabrasion, Diamantabrasion, Bio-Face
            Lifting, Ultraschall, Hyaluronic Treatments und vieles mehr runden
            das Angebot ab. Die Behandlung im Institut und die tägliche Pflege
            zu Hause ergeben eine Einheit.
          </p>
          <p>
            Wir beraten Sie hinsichtlich Ihres persönlichen Pflegekonzepts und
            stellen Ihnen die passenden Produkte vor. Nur gemeinsam können wir
            sofort sichtbare Resultate mit Langzeitwirkung erzielen und Ihnen zu
            einer gesünderen, jünger wirkenden Haut verhelfen.
          </p>
          <p>Wir freuen uns auf Ihren Anruf!</p>
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
    benchAccounting: file(relativePath: { eq: "portrait.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <Philosophie location={props.location} data={data} {...props} />
    )}
  />
);
