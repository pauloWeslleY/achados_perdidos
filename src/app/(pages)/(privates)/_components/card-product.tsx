"use client";

import { Button, Card, Dialog, Portal } from "@chakra-ui/react";
import Image from "next/image";

interface CardProductProps {
  name: string;
}

export function CardProduct({ name }: CardProductProps) {
  return (
    <Card.Root flex="1 1 225px" overflow="hidden" shadow="lg" rounded="2xl">
      <Image
        src="/card-image.png"
        alt="Card image"
        width={300}
        height={300}
        objectFit="cover"
      />

      <Card.Body gap="2">
        <Card.Title>Nome: {name}</Card.Title>
      </Card.Body>
      <Card.Footer gap="2">
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
                  <Dialog.Title>
                    Ei, que bom que encontrou seu item!
                  </Dialog.Title>
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
      </Card.Footer>
    </Card.Root>
  );
}
