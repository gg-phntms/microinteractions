import Anticipate from "@/components/Animations/Anticipate";
import Bounce from "@/components/Animations/Bounce";
import BounceAnticipate from "@/components/Animations/BounceAnticipate";
import Pulse from "@/components/Animations/Pulse";
import Shadow from "@/components/Animations/Shadow";
import TextWave from "@/components/Animations/TextWave";
import Tunnel from "@/components/Animations/Tunnel";
import Wobble from "@/components/Animations/Wobble";
import WobbleInfo from "@/components/Animations/Wobble/WobbleInfo";
import Gallery from "@/components/Layout/Gallery";
import InteractionPanel from "@/components/Layout/InteractionPanel";
import { Column, Description, HomePageRoot } from "./styles";

export default function Home() {
  return (
    <HomePageRoot>
      <Column>
        <h1>Micro-interactions</h1>
        <Description>
          A collection of simple animations to explore and adapt. Made to help
          designers with inspiration, and developers with implementation.
        </Description>

        <Gallery>
          <InteractionPanel label="Bounce" animation={<Bounce />} />
          <InteractionPanel label="Anticipate" animation={<Anticipate />} />
          <InteractionPanel
            label="Bounce + Anticipate"
            animation={<BounceAnticipate />}
          />
          <InteractionPanel
            label="Wobble"
            animation={<Wobble />}
            info={<WobbleInfo />}
          />
          <InteractionPanel label="Text Wave" animation={<TextWave />} />
          <InteractionPanel label="Tunnel" animation={<Tunnel />} />
          <InteractionPanel label="Shadow" animation={<Shadow />} />
          <InteractionPanel label="Pulse" animation={<Pulse />} />
        </Gallery>
      </Column>
    </HomePageRoot>
  );
}
