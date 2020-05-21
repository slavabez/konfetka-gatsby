import { Box, Heading } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const AssortmentSection = () => {
  const data = useStaticQuery(graphql`
    {
      allAssetsJson {
        edges {
          node {
            products {
              image
              name
              description
              price
            }
          }
        }
      }
    }

  `);

  return (
    <Box as="section" m="2">
      <Heading as="h1" size="xl" textAlign="center">
        Ассортимент
      </Heading>
    </Box>
  );
};

export default AssortmentSection;
