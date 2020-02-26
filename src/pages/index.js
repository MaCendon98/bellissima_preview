import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import Bio from "../components/bio"
import PostCard from "../components/postCard";

import "../style/normalize.css";
import "../style/all.scss";
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  let postCounter = 0;

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Start"
        keywords={[`nagelstudio`, `kosmetikstudio`, `hannover`]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h1 className="page-head-title">
            {data.site.siteMetadata.description}
          </h1>
          <h4 className="page-head-subtitle">
            Entspannen, Wohlfühlen, Genießen. <br />
            Bei uns bist du richtig.
          </h4>
          <a href="/" className="button primary large">
            Termin vereinbaren
          </a>
        </header>
      )}
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++;
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          );
        })}
      </div>
      <div className="page-intro post-content-body">
        <h4>Entspannen, Wohlfühlen, Genießen.</h4>
        <p>
          Neue Technologien bereichern den Markt, um die Jugendlichkeit und
          Spannkraft der Haut zu erhalten. Die Welt der apparativen Kosmetik ist
          vielfältig und spannend.
        </p>
        <p>
          Die Möglichkeiten, die Hautstruktur zu verbessern, Konturen zu
          optimieren und unliebsame Fettpolster und Cellulite loszuwerden, ohne
          gleich zum Skalpell greifen zu müssen, sind gegeben. Der erste
          Eindruck sollte perfekt sein: ob schöne Haut, gepflegte Hände und
          Nägel oder perfekter Wimpernaufschlag. All dies und mehr ermöglichen
          wir Ihnen in unserem Studio.
        </p>
      </div>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
);
