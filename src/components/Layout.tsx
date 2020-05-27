import { Box, Flex, Text } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './Header';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          name
          description
        }
      }
    }
  `);

  return (
    <React.StrictMode>
      <Helmet
        titleTemplate={`%s - ${data.site.siteMetadata.name}`}
        defaultTitle={data.site.siteMetadata.name}
      >
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <Header />
      <Box as="main">{children}</Box>
      <Flex
        as="footer"
        backgroundColor="orange.400"
        p={4}
        alignItems="center"
        justifyContent="center"
        mt={10}
      >
        <Text color="white" >
          Конфетка, г. Кокшетау, {new Date().getFullYear()}
        </Text>
      </Flex>
    </React.StrictMode>
  );
}
