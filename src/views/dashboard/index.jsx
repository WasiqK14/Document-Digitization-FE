import React from "react";
import { Flex, Text, Input, Box, Spinner, Select } from "@chakra-ui/react";

const json = {
  name: "John Doe",
  age: 32,
  email: "johndoe@example.com",
  address: {
    street: "123 Street",
    city: "City",
    state: "State",
    country: "Country",
    postalCode: "Postal Code",
  },
  phoneNumbers: [
    {
      type: "mobile",
      number: "123-456-7890",
    },
    {
      type: "home",
      number: "123-456-0987",
    },
  ],
};

function Dashboard() {
  return (
    <Box flexDirection="column">
      <Flex w="100%" h="50%" bg="gray.100" justify="center" align="center">
        <Text fontSize="3xl" color="gray.500">
          Document Digitization
        </Text>
      </Flex>
      <Flex flexDirection="column" justify="center" align="center">
        <Text fontSize="2xl" color="gray.500" marginTop="20px">
          Upload your document here
        </Text>
        <Input
          placeholder="Enter your text here"
          marginTop="20px"
          type="file"
          w="40%"
          h="40%"
          bg="white"
          borderRadius="0px"
          color="black"
          boxShadow="md"
          _hover={{ boxShadow: "lg" }}
          _focus={{ boxShadow: "lg" }}
          border="1px solid #1b1c1e"
        />
      </Flex>
      <Flex flexDirection="column" justify="center" align="center">
        <Text fontSize="2xl" color="gray.500" marginTop="10px">
          Select your Bank
        </Text>
        <Select
          placeholder="Select option"
          marginTop="10px"
          w="40%"
          h="40%"
          borderRadius="0px"
        >
          <option value="option1">Faisal Bank</option>
          <option value="option2">Allied Bank</option>
        </Select>
      </Flex>
      <Flex flexDirection="column" justify="center" align="center">
        <Text fontSize="lg" color="gray.500" marginTop="40px">
          <pre>{JSON.stringify(json, null, 2)}</pre>
        </Text>
      </Flex>
    </Box>
  );
}

export default Dashboard;
