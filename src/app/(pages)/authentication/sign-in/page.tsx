"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

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

        <Flex gap="1.5" justify="center">
          <Text color="gray.500">Ja possui uma conta?</Text>

          <Box
            asChild
            color="sky.700"
            transition="color 0.2s ease-in-out"
            _hover={{ color: "sky.800/50", textDecoration: "underline" }}
          >
            <Link href="/authentication/sign-up">Criar Conta</Link>
          </Box>
        </Flex>
      </Stack>
    </VStack>
  );
}
