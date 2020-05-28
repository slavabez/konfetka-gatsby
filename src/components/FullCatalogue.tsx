import { Box, Button, Flex, Grid, Heading, Text } from '@chakra-ui/core';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

import ProductCard from './ProductCard';

const CatalogueSection = () => {
  const [itemsToShow, setItemsToShow] = useState(4);
  const data = useStaticQuery(graphql`
    {
      assetsJson {
        categories {
          name
          products {
            name
            description
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
    }
  `);

  console.log(data);

  const renderProducts = (products: any[]) => {
    if (products) {
      return products.map((p: any, i: any) => (
        <ProductCard
          key={i.toString()}
          name={p.name}
          description={p.description}
          fluidImageProps={p.image.childImageSharp.fluid}
        />
      ));
    }
    return <Text>Уже скоро...</Text>;
  };

  const renderCategories = () => {
    if (data?.assetsJson?.categories && data.assetsJson.categories?.length) {
      return data.assetsJson.categories.map((cat: any) => {
        return (
          <Flex
            as="section"
            m="2"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Heading
              as="h1"
              size="xl"
              textAlign="center"
              mt={{ base: 5 }}
              mb={{ base: 5 }}
              color="orange.900"
            >
              {cat.name}
            </Heading>
            <Grid
              gridTemplateColumns={{
                base: `repeat(auto-fit, minmax(250px, 1fr))`,
                md: `repeat(auto-fit, minmax(200px, 1fr))`,
              }}
              gap={6}
              w="100%"
              maxW="1000px"
              m="auto"
            >
              {renderProducts(cat.products)}
            </Grid>
          </Flex>
        );
      });
    }
      return null;

  };

  return <Box as="section">{renderCategories()}</Box>;
};

export default CatalogueSection;
