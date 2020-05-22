import { Box, Button, Flex, Heading, Text } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import BgImage from 'gatsby-background-image';
import React from 'react';

const Banner: React.FC = () => {
  const imageData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Box display={{ base: 'block', md: 'block' }}>
      <BgImage
        Tag="section"
        fluid={imageData.file.childImageSharp.fluid}
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          height: `80vh`,
          maxHeight: `50rem`,
        }}
      >
        <Box
          backgroundColor="rgba(255,255,255,0.75)"
          p={{ base: 5, md: 10 }}
          m={{ base: 5 }}
          borderRadius="lg"
          maxWidth="sm"
        >
          <Heading
            mb={2}
            fontSize={{ base: '2xl', md: '4xl' }}
            textAlign="center"
            color="orange.800"
          >
            Конфетка
          </Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }}>
            Сеть фирменных магазинов в городе Кокшетау. У нас - уникальный
            ассортемент, который вы не найдете нигде.
          </Text>
          <Flex
            flexDir={{ base: `column`, md: `row` }}
            justifyContent="space-between"
          >
            <Button
              mt={2}
              variantColor="orange"
              style={{ textTransform: `uppercase` }}
            >
              Где Мы
            </Button>
            <Button
              mt={2}
              leftIcon="info"
              style={{ textTransform: `uppercase` }}
            >
              О Нас
            </Button>
          </Flex>
        </Box>
      </BgImage>

      <Box />
    </Box>
  );
};

export default Banner;
