import { Text, TextWaveRoot } from "./styles";

const TextWave = () => {
  return (
    <TextWaveRoot>
      <Text aria-label="Text Wave">
        <span aria-hidden>T</span>
        <span aria-hidden>E</span>
        <span aria-hidden>X</span>
        <span aria-hidden>T</span>
        <span aria-hidden> </span>
        <span aria-hidden>W</span>
        <span aria-hidden>A</span>
        <span aria-hidden>V</span>
        <span aria-hidden>E</span>
      </Text>
    </TextWaveRoot>
  );
};

export default TextWave;
