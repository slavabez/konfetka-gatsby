import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import BackgroundImage from "gatsby-background-image";
import mainTheme from "../styles/theme";
import styled from "styled-components";

const BANNER_IMAGE_QUERY = graphql`
  {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

interface IBannerProps {
  className?: string;
  text?: any;
}

const FloatingTitle = styled.h2`
  color: ${mainTheme.palette.headerColor};
  padding: 0;
  margin: 0;
`;

const BannerElement = (props: IBannerProps) => {
  const { file } = useStaticQuery(BANNER_IMAGE_QUERY);
  return (
    <BackgroundImage
      fluid={file.childImageSharp.fluid}
      className={props.className}
      backgroundColor={mainTheme.palette.mainAccent}
    >
      {props.text ? <FloatingTitle>{props.text}</FloatingTitle> : null}
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

export default BannerSection;
