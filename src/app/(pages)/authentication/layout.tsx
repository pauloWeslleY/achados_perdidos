import { Box, Container, Flex, SimpleGrid, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { type PropsWithChildren } from "react";

export default function AuthenticationLayout({ children }: PropsWithChildren) {
  return (
    <Container maxW="breakpoint-xl" h="full" py="10">
      <VStack gap="0" justify="center" h="full" w="full">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          shadow="md"
          rounded="2xl"
          w={{ base: "full", xl: "6xl" }}
          minH={{ base: "full", xl: "2xl" }}
        >
          <Box bg="whiteAlpha.950" roundedBottomLeft="2xl" roundedTopLeft="2xl">
            {children}
          </Box>

          <VStack py="9" px="6" gap="28">
            <Flex justify="end" alignSelf="start" w="full">
              <Image
                src="/logotipo.png"
                alt="logotipo"
                width={120}
                height={18}
              />
            </Flex>

            <Box>
              <Image
                src="/banner-auth.png"
                alt="Banner de autenticação"
                width={380}
                height={320}
              />
            </Box>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
