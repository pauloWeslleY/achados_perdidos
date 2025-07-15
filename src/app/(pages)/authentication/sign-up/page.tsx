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

import { FormSignUp } from "./form-sign-up";

export default function SignUp() {
  return (
    <VStack pt="12" px="8">
      <Box textAlign="center">
        <Heading size="5xl">Criar Conta</Heading>
        <Text color="gray.600">Por Favor, insira seus dados</Text>
      </Box>

      <FormSignUp />

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
            <Link href="/authentication/sign-in">Faça Login</Link>
          </Box>
        </Flex>
      </Stack>
    </VStack>
  );
}
