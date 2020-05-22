import { Box, Grid, Heading, Text } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import ProductCard from './ProductCard';

const AssortmentSection = () => {
  const data = useStaticQuery(graphql`
    {
      assetsJson {
        products {
          name
          description
          price
          image {
            childImageSharp {
              fluid(maxWidth: 250) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      }
    }
  `);

  const renderProducts = () => {
    if (data?.assetsJson?.products) {
      return data.assetsJson.products.map((p: any, i: any) => (
        <ProductCard
          key={i.toString()}
          name={p.name}
          description={p.description}
          fluidImageProps={p.image.childImageSharp.fluid}
        />
      ));
    }
    return <Text>Нет продуктов</Text>;
  };

  return (
    <Box as="section" m="2">
      <Heading
        as="h1"
        size="xl"
        textAlign="center"
        mt={{ base: 5 }}
        mb={{ base: 5 }}
        color="orange.900"
      >
        Топ Ассортимент
      </Heading>
      <Grid
        gridTemplateColumns={{ base: `repeat(auto-fit, minmax(250px, 1fr))` }}
        gap={6}
        maxW="1000px"
        m="auto"
      >
        {renderProducts()}
      </Grid>
    </Box>
  );
};

export default AssortmentSection;
