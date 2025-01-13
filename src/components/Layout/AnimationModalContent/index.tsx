import { Animation, AnimationModalContentRoot, Column } from "./styles";

interface Props {
  label: string;
  children: React.ReactNode;
  info?: React.ReactNode;
}

const AnimationModalContent = ({ children, label, info }: Props) => {
  return (
    <AnimationModalContentRoot>
      <Column>
        <h2>{label}</h2>
        <Animation>{children}</Animation>
      </Column>
      <Column>{info}</Column>
    </AnimationModalContentRoot>
  );
};

export default AnimationModalContent;
