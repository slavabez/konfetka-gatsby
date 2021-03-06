import { Button, Flex, Grid, Heading, Text } from '@chakra-ui/core';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

import ShopCard from './ShopCard';

const ShopList = () => {
  const [numToShow, setNumToShow] = useState(3);
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
              fluid(maxWidth: 300) {
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
      return data.assetsJson.shops
        .slice(0, numToShow)
        .map((p: any, i: any) => (
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

  const renderMoreButton = () => {
    if (
      data?.assetsJson?.shops?.length &&
      data?.assetsJson?.shops.length <= numToShow
    ) {
      // Show a link
      return null;
    }
    // Show more products
    return (
      <Button
        variant="outline"
        onClick={() => {
          setNumToShow(numToShow + 3);
        }}
      >
        Показать еще
      </Button>
    );
  };

  return (
    <Flex
      as="section"
      id="shops"
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
          base: `repeat(auto-fit, minmax(300px, 1fr))`,
        }}
        gap={6}
        w="100%"
        maxW="1000px"
        m="auto"
      >
        {renderShops()}
      </Grid>
      {renderMoreButton()}
    </Flex>
  );
};

export default ShopList;
