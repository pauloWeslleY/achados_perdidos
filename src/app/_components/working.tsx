import {
  Box,
  Card,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";

import BallonIcon from "@/assets/icone-balão.svg";

export default function Working() {
  return (
    <Container as="section" maxW="breakpoint-xl" mt="10" spaceY="10">
      <Box color="sky.900" pt="20">
        <Heading size="6xl">Como Funcionamos?</Heading>
      </Box>

      <Grid templateColumns="repeat(12, 1fr)" gap="4">
        <GridItem asChild colSpan={{ base: 12, xl: 8 }} placeItems="center">
          <Flex
            flexDir="column"
            alignSelf={{ base: "center", xl: "flex-end" }}
            gap="20"
            w="full"
          >
            <Card.Root
              w={{ base: "full", xl: "md" }}
              h="fit-content"
              rounded="2xl"
              shadow="md"
            >
              <Card.Body>
                <Card.Title fontSize="3xl" color="sky.900">
                  Itens disponíveis:
                </Card.Title>
                <Card.Description
                  fontWeight="semibold"
                  fontSize="lg"
                  color="blackAlpha.950"
                >
                  Objetos não reclamados dentro do prazo são destinados ao
                  bazar.
                </Card.Description>
              </Card.Body>
            </Card.Root>

            <Card.Root
              w={{ base: "full", xl: "md" }}
              h="fit-content"
              rounded="2xl"
              shadow="md"
              placeSelf="flex-end"
            >
              <Card.Body>
                <Card.Title fontSize="3xl" color="sky.900">
                  Sustentabilidade:
                </Card.Title>
                <Card.Description
                  fontWeight="semibold"
                  fontSize="lg"
                  color="blackAlpha.950"
                >
                  Incentivamos a reutilização e evitamos o desperdício.
                </Card.Description>
              </Card.Body>
            </Card.Root>
          </Flex>
        </GridItem>

        <GridItem
          asChild
          colSpan={{ base: 12, xl: 4 }}
          placeItems="start"
          mt={{ base: 0, xl: "-10" }}
          ml={{ base: 0, xl: "-8" }}
        >
          <Box>
            <Image
              src={BallonIcon}
              alt="Icone do Balão"
              width={315}
              height={274}
            />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
