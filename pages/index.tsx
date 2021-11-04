import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
  Text
} from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "purple.700");
  return (
    <>
    <Flex justifyContent="center" mt={3} position="relative">
      <Text fontSize="3xl"> Form Test </Text>
    </Flex>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" bg={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Log in</Heading>
          <Input
            placeholder="email@example.com"
            variant="filled"
            type="email"
            mb={3}
          />
          <Input
            placeholder="********"
            variant="filled"
            type="password"
            mb={6}
          />
          <Button colorScheme="facebook" mb={6}>
            Log in
          </Button>
          <Button onClick={toggleColorMode}> Toggle color </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
