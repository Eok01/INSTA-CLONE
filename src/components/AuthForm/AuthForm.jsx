import { Box, VStack, Image, Input, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Add a state to handle login/signup toggle
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleAuth = () => {
    if (!inputs.email || !inputs.password || (!isLogin && !inputs.confirmPassword)) {
      alert("Please fill all the fields");
      return;
    }

    navigate("/");
  }

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram' />
          <Input 
            placeholder='Email'
            fontSize={14}
            type='email'
            value={inputs.email}
            onChange={(e) => setInputs({...inputs, email: e.target.value})}
          />
          <Input 
            placeholder='Password'
            fontSize={14}
            type='password'
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}
          />
          {!isLogin && ( // Render the second password input conditionally
            <Input 
              placeholder='Confirm Password'
              fontSize={14}
              type='password'
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            />
          )}
          <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14} onClick={handleAuth}>
            {isLogin ? "Log in" : "Sign Up"}
          </Button>
          {/* Or Section */}
          <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
            <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
            <Text mx={1} color={"gray.500"}>OR</Text>
            <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
          </Flex>

          <Flex>
            <Image src="/google.png" w={5} alt="Google logo"></Image>
            <Text mx="2" color={"blue.200"}> Log in with Google</Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
            {isLogin ? "Sign Up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default AuthForm;
