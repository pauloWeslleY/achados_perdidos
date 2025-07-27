"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { BiCalendar } from "react-icons/bi";
import { TiTime } from "react-icons/ti";

import { DialogFindProduct } from "../../_components/dialog-find-product";

export default function ProductDetail() {
  return (
    <Container maxW="7xl">
      <Box py="10">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap="8">
          <Box>
            <Image
              src="/card-image.png"
              alt="Card image"
              width={600}
              height={600}
            />
          </Box>
          <VStack align="flex-start" h="full" justify="space-between">
            <div>
              <Heading size="4xl">GUARDA-CHUVA</Heading>

              <Box spaceY="3" pt="8">
                <Text color="gray.600" fontWeight="semibold">
                  Descrição do objeto
                </Text>
                <Text>
                  O item está em bom estado e sem identificação. Foi entregue à
                  recepção pela colaboradora Marlene.
                </Text>
              </Box>
            </div>

            <Box>
              <Box spaceY="2">
                <Text fontWeight="semibold">
                  Local
                  <Text as="span" display="block" fontWeight="light">
                    Lab 07
                  </Text>
                </Text>
                <Text fontWeight="semibold">
                  Achado por:
                  <Text as="span" display="block" fontWeight="light">
                    Marlene (colaboradora)
                  </Text>
                </Text>
              </Box>

              <HStack gap="8" mt="10">
                <Flex>
                  <Icon as={BiCalendar} boxSize="5" />
                  <Text>10/07</Text>
                </Flex>

                <Flex>
                  <Icon as={TiTime} boxSize="5" />
                  <Text>10:30</Text>
                </Flex>
              </HStack>

              <Box mt="10">
                <DialogFindProduct />
              </Box>
            </Box>
          </VStack>
        </SimpleGrid>
      </Box>
    </Container>
  );
}
