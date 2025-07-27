import { Box } from "@chakra-ui/react";
import { type PropsWithChildren } from "react";

import { FooterMenu } from "@/app/_components/footer-menu";
import Footer from "@/components/footer";

import { Header } from "./_components/header";

export default function HomeProductLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />

      <Box h="full" flex="1">
        {children}
      </Box>

      <FooterMenu />

      <Footer />
    </>
  );
}
