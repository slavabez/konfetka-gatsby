import { Box } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const Banner: React.FC = () => {
  const imageData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={imageData.file.childImageSharp.fluid}
      alt="Рекламный баннер"
      style={{ minHeight: 250 }}
     />
  );
};

export default Banner;
