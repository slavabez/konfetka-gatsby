import * as React from "react";
import { graphql, Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";

// Theme
import mainTheme from "../styles/theme";

// Layout
import Layout from "../layout/index";

import WaveSVG from "../images/optimized_wave.svg";

interface IIndexPageProps {
  location: {
    pathname: string;
  };
  data: {
    banner: {
      childImageSharp: {
        fluid: any;
      };
    };
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
  };
}

const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${mainTheme.palette.mainColor};
`;

const EmptyContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 82px;
  height: 30px;
  width: 100%;
  background-image: url(${WaveSVG});
`;

const FloatingTitle = styled.h1`
  color: ${mainTheme.palette.headerColor};
  text-align: center;
  padding: 0;
  margin: 0;
  text-shadow: #fff 0 0 4px;
`;

interface IBEProps {
  className?: any;
  imageData?: any;
}

const BannerElement = ({ className, imageData }: IBEProps) => {
  return (
    <BackgroundImage
      fluid={imageData}
      className={className}
      backgroundColor={mainTheme.palette.mainAccent}
    >
      {/*<FloatingTitle>Огромный ассортимент</FloatingTitle>*/}
    </BackgroundImage>
  );
};

const BannerSection = styled(BannerElement)`
  width: 100%;
  height: 200px;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ({ data, location }: IIndexPageProps) => {
  const { banner } = data;
  return (
    <Layout location={location}>
      <BannerSection imageData={banner.childImageSharp.fluid} />
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
