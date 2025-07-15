"use client";

import {
  Container,
  Grid,
  GridItem,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { BsTwitterX } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <Container maxW="breakpoint-xl" my="10">
        <Grid templateColumns="repeat(12, 1fr)" gap="4">
          <GridItem colSpan={{ base: 12, xl: 8 }}>
            <Text fontWeight="semibold">CENTRAL DE RELACIONAMENTO</Text>
            <Text>(11) 3322-0050 (Telefone/WhatsApp)</Text>
            <Text>0800-055-1000 (Interior de SP, somente telefone fixo)</Text>
          </GridItem>

          <GridItem asChild colSpan={{ base: 12, xl: 4 }}>
            <HStack color="sky.900" justifyContent="flex-end" gap="8">
              <Icon as={BsTwitterX} boxSize="6" />
              <Icon as={BsYoutube} boxSize="6" />
              <Icon as={BsFacebook} boxSize="6" />
              <Icon as={BsInstagram} boxSize="6" />
              <Icon as={BsLinkedin} boxSize="6" />
            </HStack>
          </GridItem>
        </Grid>
      </Container>
    </footer>
  );
}
