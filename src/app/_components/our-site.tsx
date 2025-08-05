import {
  Box,
  Card,
  Container,
  Flex,
  For,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

import BoxHeartIcon from "@/assets/caixa-coração.svg";
import { OurSiteData } from "@/data/our-site.data";

export default function OurSite() {
  return (
    <Container as="section" maxW="breakpoint-xl" my="10" spaceY="4">
      <Box color="sky.900" pt="20">
        <Heading size="6xl">Em Nosso Site</Heading>
        <Text fontSize="2xl" fontWeight="bold">
          Você encontra:
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap="10">
        <Box pos="relative" h="lg" w="full">
          <Box asChild objectFit="cover">
            <Image src={BoxHeartIcon} alt="Caixa de coração" fill />
          </Box>
        </Box>

        <Flex wrap="wrap" gap="12">
          <For each={OurSiteData}>
            {(item, index) => {
              return (
                <Card.Root
                  key={index}
                  as="article"
                  w="240px"
                  rounded="2xl"
                  shadow="md"
                >
                  <Card.Header alignItems="center">
                    <Box pos="relative" boxSize="16">
                      <Box asChild objectFit="cover">
                        <Image src={item.icon} alt={item.title} fill />
                      </Box>
                    </Box>
                    <Card.Title
                      bgGradient="to-l"
                      gradientFrom="sky.700"
                      gradientTo="sky.900"
                      bgClip="text"
                    >
                      {item.title}
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Text textAlign="center" fontWeight="semibold">
                      {item.description}
                    </Text>
                  </Card.Body>
                </Card.Root>
              );
            }}
          </For>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
