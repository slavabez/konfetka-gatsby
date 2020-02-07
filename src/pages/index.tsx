import * as React from "react";
import { graphql, Link } from "gatsby";

// Theme

// Layout
import Layout from "../layout/index";

import BannerSection from "../components/Banner";

interface IIndexPageProps {
  location: {
    pathname: string;
  };
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
  };
}

export default ({ location }: IIndexPageProps) => {
  return (
    <Layout location={location}>
      <BannerSection />
    </Layout>
  );
};

export const indexPageQuery = graphql`
  query IndexPageQuery {
    banner: file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
