import React from "react";
import styled, { ThemeProvider } from "styled-components";

import theme from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";

import PageHead from "../components/Head";

interface ILayoutProps {
  children: any;
  location: {
    pathname: string;
  };
}

const Wrapper = styled.div`
  display: flex;
`;

export default ({ children, location }: ILayoutProps) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <PageHead pathname={location.pathname} />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Wrapper>
  );
};
