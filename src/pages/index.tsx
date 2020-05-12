import {
  Stack,
  Text,
} from '@chakra-ui/core';
import React from 'react';

import { Layout } from '../components/Layout';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>

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
    </Layout>
  );
}
