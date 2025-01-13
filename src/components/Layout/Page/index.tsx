import { PageRoot } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Page = ({ children }: Props) => {
  return <PageRoot>{children}</PageRoot>;
};

export default Page;
