import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/core';
import React from 'react';

import { Layout } from '../components/Layout';

export default function IndexPage(): JSX.Element {
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();
  const btnRef = React.useRef();

  const renderDrawer = () => {
    if (isOpen) {
      return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      );
    }

    return null;
  };

  return (
    <Layout>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Ваш браузер очень устарел</AlertTitle>
        <AlertDescription>
          Для более удобного использования нашего сайта обновите ваш браузер
        </AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
      <Button ref={btnRef} onClick={onOpen}>
        Toggle
      </Button>

      {renderDrawer()}

      <Box>
        <Stack spacing={2}>
          <Text fontSize="6xl">Такой вот текст</Text>
          <Text fontSize="5xl">Такой вот текст</Text>
          <Text fontSize="4xl">Такой вот текст</Text>
          <Text fontSize="3xl">Такой вот текст</Text>
          <Text fontSize="2xl">Такой вот текст</Text>
          <Text fontSize="xl">Такой вот текст</Text>
          <Text fontSize="lg">Такой вот текст</Text>
          <Text fontSize="md">Такой вот текст</Text>
          <Text fontSize="sm">Такой вот текст</Text>
          <Text fontSize="xs">Такой вот текст</Text>
        </Stack>
      </Box>
    </Layout>
  );
}
