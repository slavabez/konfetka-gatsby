import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import theme from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";

import PageHead from "../components/Head";
import Img from "gatsby-image";
import WaveSVG from "../images/optimized_wave.svg";

const GET_LOGO_QUERY = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

interface ILayoutProps {
  children: any;
  location: {
    pathname: string;
  };
}

const DocumentWrapper = styled.div`
  display: flex;
`;

const PageWrapper = styled.div`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.palette.mainColor};
`;

const DecorativeWave = styled.div`
  position: absolute;
  z-index: 10;
  top: 82px;
  height: 30px;
  width: 100%;
  background-image: url(${WaveSVG});
`;

export default ({ children, location }: ILayoutProps) => {
  const { file } = useStaticQuery(GET_LOGO_QUERY);

  return (
    <DocumentWrapper>
      <GlobalStyles />
      <PageHead pathname={location.pathname} />
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <Logo>
            <Img fixed={file.childImageSharp.fixed} />
          </Logo>
          {children}
        </PageWrapper>
      </ThemeProvider>
    </DocumentWrapper>
  );
};
