import { Flex, Grid, Heading, Text } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import ShopCard from './ShopCard';

const ShopList = () => {
  const data = useStaticQuery(graphql`
    {
      assetsJson {
        shops {
          name
          description
          address
          mapUrl
          openingHours
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

  const renderShops = () => {
    if (data?.assetsJson?.shops) {
      return data.assetsJson.shops.map((p: any, i: any) => (
        <ShopCard
          key={i.toString()}
          name={p.name}
          description={p.description}
          fluidImageProps={p.image.childImageSharp.fluid}
          address={p.address}
          mapUrl={p.mapUrl}
          openingHours={p.openingHours}
        />
      ));
    }
    return <Text>Нет продуктов</Text>;
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
        Наши Магазины
      </Heading>
      <Grid
        gridTemplateColumns={{
          base: `repeat(auto-fit, minmax(320px, 1fr))`,
          md: `repeat(auto-fit, minmax(320px, 1fr))`,
        }}
        gap={6}
        w="100%"
        maxW="1000px"
        m="auto"
      >
        {renderShops()}
      </Grid>
    </Flex>
  );
};

export default ShopList;
