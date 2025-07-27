"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";

import { FooterAuthLink } from "../_components/footer-auth-link";

export default function ForgotPassword() {
  return (
    <VStack pt="32" px="8">
      <Box rounded="full" bg="blue.400" p="5">
        <Icon as={MdEmail} boxSize="12" color="whiteAlpha.950" />
      </Box>

      <Box textAlign="center" my="5" spaceY="2">
        <Heading size="4xl">Esqueceu sua senha?</Heading>
        <Text color="gray.500" w="2/3" mx="auto">
          Digite seu email para receber instruções de recuperação.
        </Text>
      </Box>

      <Flex as="form" w="full" flexDir="column" gap="8" px="14">
        <InputGroup startElement={<Icon as={MdEmail} boxSize="5" />}>
          <Input
            placeholder="Email"
            rounded="xl"
            borderColor="gray.500"
            borderWidth="2px"
            _placeholder={{ color: "gray.400", fontSize: "md" }}
          />
        </InputGroup>

        <Button size="md" rounded="xl" colorPalette="blue" w="full" h="12">
          <Icon as={MdEmail} boxSize="5" />
          Enviar código
        </Button>
      </Flex>

      <FooterAuthLink mt="7" />
    </VStack>
  );
}
