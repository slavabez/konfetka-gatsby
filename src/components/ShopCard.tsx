import {
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
} from '@chakra-ui/core';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  address: string;
  openingHours: string;
  mapUrl: string;
  fluidImageProps: any;
}

const ShopCard: React.FC<ProductCardProps> = ({
  name,
  description,
  fluidImageProps,
  openingHours,
  mapUrl,
  address,
}) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

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
      <Flex flexGrow={1}>
        <Img
          fluid={{ ...fluidImageProps }}
          alt={name}
          style={{ margin: 'auto', flexGrow: '1' }}
        />
      </Flex>
      <Box p="6">
        <Flex>
          <Button flexGrow={1} mr={2}>
            <Link href={mapUrl} isExternal>
              На карте <Icon name="external-link" mx="2px" />
            </Link>
          </Button>

          <IconButton
            variant="outline"
            icon={show ? 'chevron-up' : 'chevron-down'}
            onClick={() => {
              handleToggle();
            }}
            aria-label="Показать информацию о магазине"
          />
        </Flex>
        <Collapse isOpen={show}>
          {description}
          {address}
          {openingHours}
          {}
        </Collapse>
      </Box>
    </Flex>
  );
};

ShopCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  fluidImageProps: PropTypes.object.isRequired,
  openingHours: PropTypes.string.isRequired,
  mapUrl: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default ShopCard;
