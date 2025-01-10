import Anticipate from "@/components/Animations/Anticipate";
import Bounce from "@/components/Animations/Bounce";
import BounceAnticipate from "@/components/Animations/BounceAnticipate";
import Pulse from "@/components/Animations/Pulse";
import Shadow from "@/components/Animations/Shadow";
import TextWave from "@/components/Animations/TextWave";
import Tunnel from "@/components/Animations/Tunnel";
import Wobble from "@/components/Animations/Wobble";
import Gallery from "@/components/Layout/Gallery";
import InteractionPanel from "@/components/Layout/InteractionPanel";
import { Column, Description, HomePageRoot } from "./styles";

export default function Home() {
  return (
    <HomePageRoot>
      <Column>
        <h1>Micro-interactions</h1>
        <Description>
          A collection of simDescriptionle animations to explore and adapt. Made
          to help designers with inspiration, and developers with
          implementation.
        </Description>

        <Gallery>
          <InteractionPanel label="Bounce">
            <Bounce />
          </InteractionPanel>
          <InteractionPanel label="Anticipate">
            <Anticipate />
          </InteractionPanel>
          <InteractionPanel label="Bounce + Anticipate" modal>
            <BounceAnticipate />
          </InteractionPanel>
          <InteractionPanel label="Wobble" modal>
            <Wobble />
          </InteractionPanel>
          <InteractionPanel label="Text Wave">
            <TextWave />
          </InteractionPanel>
          <InteractionPanel label="Tunnel">
            <Tunnel />
          </InteractionPanel>
          <InteractionPanel label="Shadow">
            <Shadow />
          </InteractionPanel>
          <InteractionPanel label="Pulse">
            <Pulse />
          </InteractionPanel>
        </Gallery>
      </Column>
    </HomePageRoot>
  );
}
