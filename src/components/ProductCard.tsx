import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  imageName: any;
}

const ProductCard: React.FC = (props: ProductCardProps) => {
  return <div>Product card</div>;
};

export default ProductCard;
