import { Box, Flex, Icon, Link as ChakraLink, Text } from '@chakra-ui/core';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

const MenuItems: React.FC = ({ children }) => (
  <Text
    mt={{ base: 4, md: 0 }}
    mr={6}
    mb={{ base: 4, md: 0 }}
    display="block"
    fontSize="xl"
    ml={{ base: 4, md: 0 }}
  >
    {children}
  </Text>
);

MenuItems.propTypes = {
  children: PropTypes.node,
};

MenuItems.defaultProps = {
  children: [],
};

const Header: React.FC = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle: () => void = () => setShow(!show);

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      bg="orange.400"
      color="white"
      {...props}
    >
      <Box style={{ flexGrow: 1, marginRight: '0.5rem', maxHeight: '80px' }}>
        <GatsbyLink to="/">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Конфетка Логотип"
            style={{ maxWidth: '275px' }}
          />
        </GatsbyLink>
      </Box>

      <Box
        display={{ base: 'block', md: 'none' }}
        onClick={handleToggle}
        padding="1rem"
      >
        <svg
          fill="white"
          width="2rem"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
      >
        <MenuItems>
          <a href="#about_us">Где мы</a>
        </MenuItems>
        <MenuItems>
          <a href="#shops">Магазины</a>
        </MenuItems>
        <MenuItems>
          <a href="#assortment">Ассортимент</a>
        </MenuItems>
        <MenuItems>
          <ChakraLink
            href="https://www.instagram.com/konfetka.kz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Инстаграм <Icon name="external-link" mx="2px" />
          </ChakraLink>
        </MenuItems>
      </Box>
    </Flex>
  );
};

export default Header;
