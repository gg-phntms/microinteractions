import ShareButton from "./ShareButton";
import { Animation, AnimationModalContentRoot, Column } from "./styles";

interface Props {
  label: string;
  children: React.ReactNode;
  close: boolean;
  param: string;
  info?: React.ReactNode;
}

const AnimationModalContent = ({
  children,
  label,
  info,
  close,
  param,
}: Props) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const link = `${url}?=${param}`;

  return (
    <AnimationModalContentRoot>
      <Column>
        <h2>{label}</h2>
        <Animation>{children}</Animation>
      </Column>
      <Column>
        <ShareButton close={close} href={link} />
        {info}
      </Column>
    </AnimationModalContentRoot>
  );
};

export default AnimationModalContent;
