import React from "react";
import {
  Container,
  Link
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
       <Link href={`/top-artists`}>
         Top Artists
       </Link>
     
    </Container>
  )
}
