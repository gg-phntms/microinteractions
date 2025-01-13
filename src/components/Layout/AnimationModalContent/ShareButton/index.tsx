import { useEffect, useState } from "react";
import { ShareButtonRoot } from "./styles";

interface Props {
  href: string;
  close: boolean;
}

const ShareButton = ({ href, close }: Props) => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  useEffect(() => {
    if (close) setIsButtonPressed(false);
  }, [close]);

  const handleClick = () => {
    setIsButtonPressed(true);
    navigator.clipboard.writeText(href);
  };

  return (
    <ShareButtonRoot onClick={handleClick} disabled={isButtonPressed}>
      {isButtonPressed ? "Link copied!" : "Copy link"}
    </ShareButtonRoot>
  );
};

export default ShareButton;
