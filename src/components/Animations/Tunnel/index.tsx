import { InnerSquare, Square, TunnelRoot } from "./styles";

const Tunnel = () => {
  return (
    <TunnelRoot>
      <Square>
        <InnerSquare />
        <InnerSquare />
        <InnerSquare />
        <InnerSquare />
      </Square>
    </TunnelRoot>
  );
};

export default Tunnel;
