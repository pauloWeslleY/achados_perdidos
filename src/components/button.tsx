"use client";

import {
  type ButtonProps as ChakraButtonProps,
  chakra,
  defineRecipe,
  type RecipeVariantProps,
  useRecipe,
} from "@chakra-ui/react";
import { type ComponentProps } from "react";

const buttonRecipe = defineRecipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    bgGradient: "to-r",
    gradientFrom: "sky.700",
    gradientTo: "sky.500",
    color: "sky.900",
    fontWeight: "bold",
    letterSpacing: "0.05em",
    rounded: "4xl",
    shadow: "md",
    transition: "background-color 0.2s ease-in-out",
    _hover: {
      bgGradient: "to-r",
      gradientFrom: "sky.500",
      gradientTo: "sky.700",
    },
  },
  variants: {
    variant: {
      solid: { bg: "red.200", color: "white" },
      outline: { borderWidth: "1px", borderColor: "red.200" },
    },
    size: {
      sm: { paddingY: "2", paddingX: "8", fontSize: "md" },
      lg: { paddingY: "4", paddingX: "8", fontSize: "lg" },
    },
  },
});

type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe>;

type ButtonProps = ButtonVariantProps &
  ComponentProps<"button"> &
  ChakraButtonProps;

export const Button = (props: ButtonProps) => {
  const { variant, size, ...restProps } = props;

  const recipe = useRecipe({ recipe: buttonRecipe });
  const styles = recipe({ variant, size });

  return <chakra.button css={styles} {...restProps} />;
};
