import { Box, Container, For, HStack, Tabs } from "@chakra-ui/react";

import { CardProduct } from "../_components/card-product";

const LoadMenu = [
  "Objetos",
  "Eletrônicos",
  "Acessórios",
  "Materiais & Livros",
  "Jogo & Esportes",
];

export default function HomeProductPage() {
  return (
    <Container maxW="7xl">
      <Box pt="14">
        <Tabs.Root defaultValue={LoadMenu[0]} w="full">
          <Tabs.List>
            <For each={LoadMenu}>
              {(menu, index) => {
                return (
                  <Tabs.Trigger
                    key={index}
                    value={menu}
                    flex="1"
                    justifyContent="center"
                    fontSize={{ base: "md", xl: "xl" }}
                  >
                    {menu}
                  </Tabs.Trigger>
                );
              }}
            </For>
          </Tabs.List>

          <For each={LoadMenu}>
            {(menu, index) => {
              return (
                <Tabs.Content key={index} value={menu}>
                  {menu}

                  <HStack w="full" wrap="wrap" gap="10" mt="5">
                    <CardProduct />
                  </HStack>
                </Tabs.Content>
              );
            }}
          </For>
        </Tabs.Root>
      </Box>
    </Container>
  );
}
