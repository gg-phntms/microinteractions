import { InfoRoot } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Info = ({ children }: Props) => {
  return <InfoRoot>{children}</InfoRoot>;
};

export default Info;
