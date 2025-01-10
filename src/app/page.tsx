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
import { Column, HomePageRoot } from "./styles";

export default function Home() {
  return (
    <HomePageRoot>
      <Column>
        <h1>Micro-interactions</h1>
        <p>
          A collection of simple animations to explore and adapt. Made to help
          designers with inspiration, and developers with implementation.
        </p>

        <Gallery>
          <InteractionPanel>
            <Bounce />
            <p>Bounce</p>
          </InteractionPanel>
          <InteractionPanel>
            <Anticipate />
            <p>Anticipate</p>
          </InteractionPanel>
          <InteractionPanel>
            <BounceAnticipate />
            <p>Bounce + Anticipate</p>
          </InteractionPanel>
          <InteractionPanel modal>
            <Wobble />
            <p>Wobble</p>
          </InteractionPanel>
          <InteractionPanel>
            <TextWave />
            <p>Text Wave</p>
          </InteractionPanel>
          <InteractionPanel>
            <Tunnel />
            <p>Tunnel</p>
          </InteractionPanel>
          <InteractionPanel>
            <Shadow />
            <p>Shadow</p>
          </InteractionPanel>
          <InteractionPanel>
            <Pulse />
            <p>Pulse</p>
          </InteractionPanel>
        </Gallery>
      </Column>
    </HomePageRoot>
  );
}
