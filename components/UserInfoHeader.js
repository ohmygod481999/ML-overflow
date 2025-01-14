import {
  Text,
  Button,
  Heading,
  IconButton,
  HStack,
  Flex,
  Spacer,
  Divider,
  VStack,
} from "@chakra-ui/react";

function UserInfoHeader() {
  return (
    <VStack>
      <Flex paddingX="110px" paddingTop="20px" w="100vw" h="15vh" mb="-20px">
        <HStack>
          <Heading size="lg" paddingBottom="10px">
            {" "}
            Minh Nguyen{" "}
          </Heading>
          <Spacer />
          <Text> 3000 Followers </Text>
          <Spacer />
          <Text> About </Text>
          <Spacer />
          <Button borderRadius="40px"> Follow </Button>
        </HStack>
        <Spacer />
        <HStack>
          <Button variant="outline" borderRadius="40px">
            {" "}
            Sign in{" "}
          </Button>
          <Button variant="ghost" borderRadius="40px">
            {" "}
            Get started{" "}
          </Button>
          <IconButton />
        </HStack>
      </Flex>
      <Divider h="10px" />
    </VStack>
  );
}

export default UserInfoHeader;
