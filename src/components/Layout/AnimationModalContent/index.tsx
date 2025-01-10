import {
  Animation,
  AnimationModalContentRoot,
  Column,
  Controls,
} from "./styles";

interface Props {
  label: string;
  children: React.ReactNode;
}

const AnimationModalContent = ({ children, label }: Props) => {
  return (
    <AnimationModalContentRoot>
      <Column>
        <h2>{label}</h2>
        <Animation>{children}</Animation>
        <Controls />
      </Column>
      <Column>
        <p>Lorem ipsum</p>
      </Column>
    </AnimationModalContentRoot>
  );
};

export default AnimationModalContent;
