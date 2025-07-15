"use client";
import {
  Box,
  Button,
  chakra,
  Checkbox,
  Input,
  Link as ChakraLink,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

import { PasswordInput } from "@/components/ui/password-input";

export function FormSignIn() {
  return (
    <chakra.form
      display="flex"
      flexDirection="column"
      gap="4"
      mt="12"
      w="full"
      px="14"
    >
      <VStack gap="6">
        <Input
          placeholder="Email"
          rounded="xl"
          borderColor="gray.500"
          borderWidth="2px"
          _placeholder={{ color: "gray.400", fontSize: "md" }}
        />

        <PasswordInput
          placeholder="Senha"
          rounded="xl"
          borderColor="gray.500"
          borderWidth="2px"
          _placeholder={{ color: "gray.400", fontSize: "md" }}
        />

        <Checkbox.Root alignSelf="start" colorPalette="sky">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>
            Aceito as{" "}
            <ChakraLink href="/" colorPalette="blue">
              Políticas de Privacidade
            </ChakraLink>
            .
          </Checkbox.Label>
        </Checkbox.Root>
      </VStack>

      <Box
        asChild
        colorPalette="blue"
        color="sky.700"
        fontSize="sm"
        transition="color 0.2s ease-in-out"
        _hover={{ color: "sky.800/50", textDecoration: "underline" }}
      >
        <Link href="/">Esqueceu sua senha?</Link>
      </Box>

      <Button size="md" rounded="xl" colorPalette="sky" w="full">
        Login
      </Button>
    </chakra.form>
  );
}
