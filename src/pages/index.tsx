import * as React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

// Theme
import mainTheme from "../styles/theme";

// Layout
import Layout from "../layout/index";

// Components
import Image from "../components/Image";

interface IIndexPageProps {
  location: {
    pathname: string;
  };
  data: {
    logo: {
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${mainTheme.palette.darkPrimary};
`;

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  a {
    padding: 0 0.5rem;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
  }
`;

export default ({ data, location }: IIndexPageProps) => {
  const { logo, site } = data;
  return (
    <Layout location={location}>
      <Wrapper>
        <Header>
          <Image img={logo.childImageSharp} />
          <LinksContainer>
            <Link to="/">Home</Link>
            <Link to="/finder">Finder</Link>
            <a href="#footer">Contacts</a>
          </LinksContainer>
        </Header>
      </Wrapper>
    </Layout>
  );
};

export const indexPageQuery = graphql`
  query IndexPageQuery {
    logo: file(relativePath: { eq: "logo.png" }) {
      ...fluidImage
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
