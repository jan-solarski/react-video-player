import "./index.css";
import { Player } from "./components/Player";
import { Flex, Heading } from "@chakra-ui/react";

export default function App() {
  return (
    <Flex flexDir="column" px="1rem" className="App">
      <Heading mb="2rem">React Video Player</Heading>
      <Player src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
    </Flex>
  );
}
