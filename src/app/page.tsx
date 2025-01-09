import Anticipate from "@/components/Animations/Anticipate";
import Bounce from "@/components/Animations/Bounce";
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ducimus
          voluptas doloribus corrupti qui perspiciatis neque beatae placeat
          architecto dolores, ullam reprehenderit? Suscipit incidunt enim
          exercitationem, odio consequuntur consequatur ratione!
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
            <Wobble />
            <p>Wobble</p>
          </InteractionPanel>
          <InteractionPanel>
            <p>example</p>
          </InteractionPanel>
          <InteractionPanel>
            <p>example</p>
          </InteractionPanel>
          <InteractionPanel>
            <p>example</p>
          </InteractionPanel>
          <InteractionPanel>
            <p>example</p>
          </InteractionPanel>
        </Gallery>
      </Column>
    </HomePageRoot>
  );
}
