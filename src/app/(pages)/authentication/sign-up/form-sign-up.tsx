"use client";
import {
  Button,
  chakra,
  Checkbox,
  Input,
  Link,
  VStack,
} from "@chakra-ui/react";

import { PasswordInput } from "@/components/ui/password-input";

export function FormSignUp() {
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
          placeholder="Nome Completo"
          rounded="xl"
          borderColor="gray.500"
          borderWidth="2px"
          _placeholder={{ color: "gray.400", fontSize: "md" }}
        />

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

        <PasswordInput
          placeholder="Confirmar Senha"
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
            <Link href="/" colorPalette="sky">
              Políticas de Privacidade
            </Link>
            .
          </Checkbox.Label>
        </Checkbox.Root>
      </VStack>

      <Button size="md" rounded="xl" colorPalette="sky" w="full">
        Cadastrar
      </Button>
    </chakra.form>
  );
}
