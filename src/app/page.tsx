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
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

import { FooterMenu } from "./_components/footer-menu";
import OurSite from "./_components/our-site";
import Working from "./_components/working";

export default function Home() {
  return (
    <div>
      <NavBar />

      <Box as="main">
        <Container as="section" maxW="breakpoint-xl">
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
      </Box>

      <Box>
        <FooterMenu />
        <Footer />
      </Box>
    </div>
  );
}
