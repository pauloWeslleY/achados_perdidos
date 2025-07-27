import { Box, Container, For, HStack, Tabs } from "@chakra-ui/react";

import { CardProduct } from "../_components/card-product";

const LoadMenu = [
  "Objetos",
  "Eletrônicos",
  "Acessórios",
  "Materiais & Livros",
  "Jogo & Esportes",
];

const LoadProducts = Array.from({ length: 4 }).map((_, index) => ({
  id: index,
  name: `Product ${index}`,
}));

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

                  <HStack w="full" wrap="wrap" gap="5" py="10">
                    <For each={LoadProducts}>
                      {(product) => {
                        return (
                          <CardProduct key={product.id} name={product.name} />
                        );
                      }}
                    </For>
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
