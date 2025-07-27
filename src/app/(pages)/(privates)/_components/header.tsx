"use client";

import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/home-products");
  };

  return (
    <Box as="header" w="full" bg="sky.400" px="12" py="3">
      <HStack justify="space-between">
        <Box onClick={handleGoHome} cursor="pointer">
          <Image src="/logotipo.png" alt="logotipo" width={120} height={18} />
        </Box>

        <VStack gap="1">
          <Avatar.Root shape="full" size="sm">
            <Avatar.Fallback name="Random User" />
            <Avatar.Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" />
          </Avatar.Root>

          <Text fontSize="sm">Minha Conta</Text>
        </VStack>
      </HStack>
    </Box>
  );
}
