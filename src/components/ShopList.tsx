import { Flex, Grid,Heading } from '@chakra-ui/core';
import React from 'react';

const shops = [
  {
    name: ``,
    address: ``,
    openingHours: ``,
    mapUrl: ``
  }
];

const ShopList = () => {

  const renderShops = () => {
    return <p>Shops</p>
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
          base: `repeat(auto-fit, minmax(250px, 1fr))`,
          md: `repeat(auto-fit, minmax(200px, 1fr))`,
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
