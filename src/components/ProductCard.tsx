import { Box, Flex, Heading } from '@chakra-ui/core';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  fluidImageProps: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  fluidImageProps,
}) => {
  return (
    <Flex
      overflow="hidden"
      maxW="sm"
      /* borderWidth={1}
      borderColor="orange.200" */
      rounded="lg"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Flex flexGrow={1}>
        <Img
          fluid={{ ...fluidImageProps }}
          alt={name}
          style={{ margin: 'auto', flexGrow: '1' }}
        />
      </Flex>
      <Box p="6">
        <Heading
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          size="lg"
          isTruncated
          textAlign="center"
          color="orange.500"
        >
          {name}
        </Heading>
        <Box isTruncated>{description}</Box>
      </Box>
    </Flex>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  fluidImageProps: PropTypes.object.isRequired,
};

export default ProductCard;
