import { Box, Flex, type FlexProps, Text } from "@chakra-ui/react";
import Link from "next/link";

export function FooterAuthLink(props: FlexProps) {
  return (
    <Flex {...props} gap="1.5" justify="center">
      <Text color="gray.500">Não possui uma conta?</Text>

      <Box
        asChild
        color="sky.700"
        transition="color 0.2s ease-in-out"
        _hover={{ color: "sky.800/50", textDecoration: "underline" }}
      >
        <Link href="/authentication/sign-up">Cadastre-se</Link>
      </Box>
    </Flex>
  );
}
