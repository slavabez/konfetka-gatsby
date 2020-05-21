import { Box } from "@chakra-ui/core";
import Img from "gatsby-image";
import PropTypes from 'prop-types';
import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  fixedImageProps: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  fixedImageProps,
}) => {
  return <Box>
    <h1>{name}</h1>
    <p>{description}</p>
    <Img fixed={fixedImageProps} />
  </Box>;
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  fixedImageProps: PropTypes.object.isRequired,
};

export default ProductCard;
