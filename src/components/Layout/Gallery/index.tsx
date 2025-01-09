import { GalleryRoot } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Gallery = ({ children }: Props) => {
  return <GalleryRoot>{children}</GalleryRoot>;
};

export default Gallery;
