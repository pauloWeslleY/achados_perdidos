import {
  Button as ChakraButton,
  Container,
  For,
  HStack,
} from "@chakra-ui/react";

const foundations = ["FIESP", "CIESP", "SENAI", "SESI", "IRS"];

export function FooterMenu() {
  return (
    <Container maxW="breakpoint-xl" my="10" spaceY="10">
      <HStack
        justify="space-between"
        color="sky.900"
        pt="20"
        pb="5"
        borderBottomWidth="1px"
        borderColor="gray.900"
        w="full"
      >
        <For each={foundations}>
          {(link, index) => {
            return (
              <ChakraButton
                key={index}
                variant="ghost"
                rounded="xl"
                colorPalette="blue"
                color="blue.950"
                size="lg"
              >
                {link}
              </ChakraButton>
            );
          }}
        </For>
      </HStack>
    </Container>
  );
}
