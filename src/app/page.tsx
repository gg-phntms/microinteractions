import Gallery from "@/components/Gallery";
import InteractionPanel from "@/components/InteractionPanel";
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
            <p>hi</p>
          </InteractionPanel>
          <InteractionPanel>
            <p>hi</p>
          </InteractionPanel>
          <InteractionPanel>
            <p>hi</p>
          </InteractionPanel>
          <InteractionPanel>
            <p>hi</p>
          </InteractionPanel>
          <InteractionPanel>
            <p>hi</p>
          </InteractionPanel>
          <InteractionPanel>
            <p>hi</p>
          </InteractionPanel>
          <InteractionPanel>
            <p>hi</p>
          </InteractionPanel>
        </Gallery>
      </Column>
    </HomePageRoot>
  );
}
