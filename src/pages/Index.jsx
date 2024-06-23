import { Container, VStack, Heading, Text, Button, Input, Box, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const toast = useToast();

  const handleDownload = () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a URL.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate download action
    toast({
      title: "Download Started",
      description: `Downloading from ${url}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl">Download Your Files</Heading>
        <Text>Enter the URL of the file you want to download.</Text>
        <Input 
          placeholder="Enter URL" 
          size="lg" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
        />
        <Button 
          leftIcon={<FaDownload />} 
          colorScheme="blue" 
          size="lg" 
          onClick={handleDownload}
        >
          Download
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;