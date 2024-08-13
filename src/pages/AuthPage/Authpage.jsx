import { Box, Container, Flex, VStack, Image } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const Authpage = () => {
  return (
    <Flex minH="100vh" justifyContent="center" alignItems="center" px={4}>
      <Container maxW="container.md" padding={0}>
        <Flex direction={{ base: "column", md: "row" }} gap={4}>
          {/* Left hand side */}
          <Box display={{ base: 'none', md: 'block' }} flex={1}>
            <Image src="/auth.png" h={650} alt="Phone img" />
          </Box>
          
          {/* Right hand side */}
          <VStack spacing={4} align="stretch" flex={1}>
            <AuthForm />
            <Box textAlign="center">Get the app</Box>
            <Flex gap={5} justifyContent="center">
              <Image src="/playstore.png" h="10" alt="Playstore Logo" />
              <Image src="/microsoft.png" h="10" alt="Microsoft Logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Authpage;
