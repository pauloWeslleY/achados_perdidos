"use client";

import {
  Box,
  Button,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

import { FooterAuthLink } from "../_components/footer-auth-link";
import { FormSignIn } from "./form-sign-in";

export default function SignIn() {
  return (
    <VStack pt="12" px="8">
      <Box textAlign="center">
        <Heading size="5xl">Bem Vindo (a)!</Heading>
        <Text color="gray.600">Por Favor, insira seus dados</Text>
      </Box>

      <FormSignIn />

      <Stack direction="column" justify="center" w="full" px="14">
        <Text color="gray.600" textAlign="center">
          Ou continue com
        </Text>

        <Button variant="outline" rounded="xl" size="md" w="full">
          <Icon as={FcGoogle} boxSize="6" />
          Continuar com o Google
        </Button>

        <FooterAuthLink />
      </Stack>
    </VStack>
  );
}
