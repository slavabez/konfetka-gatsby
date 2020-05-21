import { Box, Heading, Text } from '@chakra-ui/core';
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
              fixed(width: 200) {
                ...GatsbyImageSharpFixed
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
          fixedImageProps={p.image.childImageSharp.fixed}
        />
      ));
    }
    return <Text>Нет продуктов</Text>;
  };

  return (
    <Box as="section" m="2">
      <Heading as="h1" size="xl" textAlign="center">
        Ассортимент
      </Heading>
      {renderProducts()}
    </Box>
  );
};

export default AssortmentSection;
