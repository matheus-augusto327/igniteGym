import { Heading, HStack, Text, VStack } from "native-base";

export function HomeHeader() {
  return (
    <HStack>
      <VStack>
        <Text color="gray.100">Lulão</Text>
      </VStack>
      <Heading color="gray.100">Lucão</Heading>
    </HStack>
  );
}
