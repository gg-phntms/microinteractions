import { CodeRoot } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Code = ({ children }: Props) => {
  return <CodeRoot>{children}</CodeRoot>;
};

export default Code;
