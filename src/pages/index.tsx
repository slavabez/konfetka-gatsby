import React from "react";
import { Box, Text } from "@chakra-ui/core";
import Header from "../components/ResponsiveHeader";

const IndexPage = () => {
  return (
    <>
      <Header />
      <Box p={8}>
        <Text fontSize="x1">Привет</Text>
      </Box>
    </>
  );
};

export default IndexPage;
