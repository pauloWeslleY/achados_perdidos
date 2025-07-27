"use client";

import { Button, Card } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import { DialogFindProduct } from "./dialog-find-product";

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
      <Card.Footer gap="2" flexDir="column">
        <DialogFindProduct />
        <Button
          asChild
          variant="outline"
          rounded="2xl"
          colorPalette="blue"
          w="full"
        >
          <Link href={`/home-products/${name}`}>Detalhes</Link>
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}
