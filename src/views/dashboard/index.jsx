import React, { useState, useEffect } from "react";
import {
  Flex,
  Text,
  Input,
  Box,
  Spinner,
  Select,
  Button,
} from "@chakra-ui/react";
import { API_URL } from "../../config/api";
import { postRequest } from "../../hooks/usePost";

function Dashboard() {
  const [file, setFile] = useState();
  const [form, setForm] = useState("");
  const [jsonObj, setJsonObj] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFile(selectedFiles);
  };

  const postToServer = async () => {
    if (!file && !form) {
      console.log("No file selected");
      return;
    }

    const formdata = new FormData();
    for (let i = 0; i < file.length; i++) {
      formdata.append("files", file[i]);
    }

    for (let [key, value] of formdata.entries()) {
      console.log(key, value);
    }
    
    

    if (form === "partnership") {
      setIsLoading(true);
      const response = await postRequest(API_URL.POSTTOPARTNERSHIP, formdata);
      console.log(response);
      setJsonObj(response);
      setIsLoading(false);
    }
    if (form === "private") {
      setIsLoading(true);
      const response = await postRequest(API_URL.POSTTOPRIVATE, formdata);
      console.log(response);
      setJsonObj(response);
      setIsLoading(false);
    }
    if (form === "trust") {
      setIsLoading(true);
      const response = await postRequest(API_URL.POSTTOTRUST, formdata);
      console.log(response);
      setJsonObj(response);
      setIsLoading(false);
    }
    if (form === "deposit") {
      setIsLoading(true);
      const response = await postRequest(API_URL.POSTTODEPOSIT, formdata);
      console.log(response);
      setJsonObj(response);
      setIsLoading(false);
    }
  };

  return (
    <Box flexDirection="column">
      <Flex w="100%" h="50%" bg="gray.100" justify="center" align="center">
        <Text fontSize="3xl" color="gray.500">
          Document Digitization
        </Text>
      </Flex>
      <Flex flexDirection="column" justify="center" align="center">
        <Text fontSize="2xl" color="gray.500" marginTop="20px">
          Upload your images here
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
          border="1px solid #1b1c1e"
          cursor="pointer"
          onChange={handleFileChange}
          multiple
        />
      </Flex>
      <Flex flexDirection="column" justify="center" align="center">
        <Text fontSize="2xl" color="gray.500" marginTop="10px">
          Select your Form
        </Text>
        <Select
          placeholder="Select option"
          marginTop="10px"
          w="40%"
          h="50px"
          borderRadius="0px"
          border="1px solid #1b1c1e"
          focusBorderColor="1px solid #1b1c1e"
          cursor="pointer"
          _hover={{
            border: "1px solid #1b1c1e",
            boxShadow: "lg",
          }}
          value={form}
          onChange={(e) => setForm(e.target.value)}
        >
          <option value="partnership">Partnership</option>
          <option value="private">Private</option>
          <option value="trust">Trust</option>
          <option value="deposit">Deposit</option>
        </Select>
      </Flex>
      <Flex flexDirection="column" justify="center" align="center">
        <Button colorScheme="teal" marginTop="20px" onClick={postToServer}>
          Submit
        </Button>
      </Flex>
      <Flex flexDirection="column" justify="center" align="center">
        {isLoading && (
          <Spinner size="xl" color="teal" marginTop="50px" speed="1s" />
        )}

        {jsonObj && !isLoading && (
          <Text fontSize="md" color="gray.500" marginTop="40px">
            <pre>{JSON?.stringify(jsonObj, null, 2)}</pre>
          </Text>
        )}
      </Flex>
    </Box>
  );
}

export default Dashboard;
