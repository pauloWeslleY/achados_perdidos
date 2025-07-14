import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

import { Button } from "@/components/button";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <NavBar />

      <Box as="main" h="full">
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap="10" h="md">
            <VStack gap="1" w="full">
              <Heading>
                Ache & Recupere
                <Text as="span">Com facilidade</Text>
              </Heading>

              <Text as="p">
                Perdeu algum item pessoal ? Ache-o com flexibilidade pelo
                Achados SENAI !
              </Text>

              <Button>Inscreva-se</Button>
            </VStack>

            <Box w="200px">
              <Box
                asChild
                pos="relative"
                objectFit="cover"
                maxH="300px"
                w="220px"
              >
                <Image src="/banner-home.png" alt="logotipo" fill />
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  );
}
