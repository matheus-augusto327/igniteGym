import { Heading, HStack, Text, VStack } from "native-base";
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        size={16}
        source={{ uri: "https://github.com/matheus-augusto327.png" }}
        alt="Imagem do usuário"
        mr={4}
      />
      <VStack>
        <Text color="gray.100" fontSize="md">
          Lulão
        </Text>
      </VStack>
      <Heading color="gray.100" fontSize="md">
        Lucão
      </Heading>
    </HStack>
  );
}
