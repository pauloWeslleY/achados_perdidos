import { Box, Button as ChakraButton, Flex, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./button";

export default function NavBar() {
  return (
    <Box px="10" py="5" w="full">
      <HStack justify="space-between">
        <Image src="/logotipo.png" alt="logotipo" width={120} height={18} />

        <Flex align="center" gap="5">
          <ChakraButton
            asChild
            variant="plain"
            color="blackAlpha.900"
            size="lg"
          >
            <Link href="/">Sobre Nós</Link>
          </ChakraButton>
          <ChakraButton
            asChild
            variant="plain"
            color="blackAlpha.900"
            size="lg"
          >
            <Link href="/">Contatos</Link>
          </ChakraButton>

          <Button asChild size="sm" justifyContent="center">
            <Link href="/authentication/sign-in">Entrar</Link>
          </Button>
        </Flex>
      </HStack>
    </Box>
  );
}
