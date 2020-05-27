import { Box, Button, Flex, Grid, Heading, Text } from '@chakra-ui/core';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

import ProductCard from './ProductCard';

const AssortmentSection = () => {
  const [itemsToShow, setItemsToShow] = useState(4);
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
      return data.assetsJson.products
        .slice(0, itemsToShow)
        .map((p: any, i: any) => (
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

  const renderMoreButtons = () => {
    if (itemsToShow >= 12) {
      // Show a link
      return (
        <Button variantColor="orange">
          <Link to="/products">Посмотреть ассортимент</Link>
        </Button>
      );
    }
    // Show more products
    return (
      <Button
        variant="outline"
        onClick={() => {
          setItemsToShow(itemsToShow + 4);
        }}
      >
        Показать еще
      </Button>
    );
  };

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
        Топ Ассортимент
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
        {renderProducts()}
      </Grid>
      {renderMoreButtons()}
    </Flex>
  );
};

export default AssortmentSection;
