import { Heading, HStack, Image, VStack, Text, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        alignItems="center"
        p={2}
        pr={4}
        mb={3}
        rounded="md"
      >
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSg-9gGp6nUR8Ft0pRTIXe0vrP1WBRQ4i1-w5NAIwqoQ&s",
          }}
          alt="Imagem do exercícios"
          w={16}
          h={16}
          mr={4}
          rounded="md"
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading fontSize="lg" color="white">
            Remada unilateral
          </Heading>
          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 séries x 1 repetições
          </Text>
        </VStack>
        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
}
