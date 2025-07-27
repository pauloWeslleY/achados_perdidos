"use client";

import { Button, Dialog, Portal } from "@chakra-ui/react";

export function DialogFindProduct() {
  return (
    <Dialog.Root placement="center" motionPreset="slide-in-bottom">
      <Dialog.Trigger asChild>
        <Button variant="solid" rounded="2xl" w="full" colorPalette="sky">
          Achei
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            border="1px solid"
            borderColor="gray.800"
            rounded="xl"
          >
            <Dialog.Header flexDir="column" textAlign="center">
              <Dialog.Title>Ei, que bom que encontrou seu item!</Dialog.Title>
              <Dialog.Description>
                venha retirar aqui em nossa secretaria!
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button
                  variant="outline"
                  colorPalette="blue"
                  flex="1"
                  rounded="xl"
                >
                  Cancelar
                </Button>
              </Dialog.ActionTrigger>
              <Button flex="1" rounded="xl" colorPalette="blue">
                Confirmar
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
