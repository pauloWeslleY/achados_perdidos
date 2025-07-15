import {
  Box,
  Button as ChakraButton,
  Container,
  For,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

import { Button } from "@/components/button";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

import OurSite from "./_components/our-site";
import Working from "./_components/working";

const foundations = ["FIESP", "CIESP", "SENAI", "SESI", "IRS"];

export default function Home() {
  return (
    <div>
      <NavBar />

      <Box as="main" h="full">
        <Container maxW="breakpoint-xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} gap="10">
            <VStack align="start" justify="center" gap="1">
              <Heading size="7xl" color="sky.900" spaceY="8">
                Ache &
                <Text as="span" display="block" lineHeight="0" mt="4">
                  Recupere
                </Text>
                <Text
                  as="span"
                  display="block"
                  bgGradient="to-l"
                  gradientFrom="sky.800"
                  gradientTo="sky.700"
                  bgClip="text"
                >
                  Com facilidade
                </Text>
              </Heading>

              <Text as="p" color="sky.900" fontSize="xl">
                Perdeu algum item pessoal ? Ache-o com flexibilidade pelo
                Achados SENAI !
              </Text>

              <Button size="lg" mt="3">
                Inscreva-se
              </Button>
            </VStack>

            <Box pos="relative" h="2xl" w="full">
              <Box asChild objectFit="cover">
                <Image src="/banner-home.png" alt="Banner Home" fill />
              </Box>
            </Box>
          </SimpleGrid>
        </Container>

        <OurSite />

        <Working />

        <Container maxW="breakpoint-xl" my="10" spaceY="10">
          <HStack
            justify="space-between"
            color="sky.900"
            pt="20"
            pb="5"
            borderBottomWidth="1px"
            borderColor="gray.900"
            w="full"
          >
            <For each={foundations}>
              {(link, index) => {
                return (
                  <ChakraButton
                    key={index}
                    variant="ghost"
                    rounded="xl"
                    colorPalette="blue"
                    color="blue.950"
                    size="lg"
                  >
                    {link}
                  </ChakraButton>
                );
              }}
            </For>
          </HStack>
        </Container>
      </Box>

      <Footer />
    </div>
  );
}
