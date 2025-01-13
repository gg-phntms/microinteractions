import Code from "@/components/Layout/Code";
import { InfoRoot } from "@/components/Layout/Info/styles";

const WobbleInfo = () => {
  return (
    <InfoRoot>
      <p>A jelly-like squash and stretch in place.</p>
      <h3>Uses</h3>
      <ul>
        <li>
          Showing that something has changed, when it might not otherwise be
          obvious (e.g. text, or two similar images).
        </li>
        <li>Drawing attention to something.</li>
      </ul>
      <h3>How to</h3>
      <p>
        Squash the element by reducing its height and increasing its width,
        return it to its original scale, then squash it again at a smaller
        amplitude.
      </p>
      <p>
        You can also translate it a little to make it look as if the element is
        resting on the ground, as shown in the example.
      </p>
      <p>
        CSS is shown below. This is for a square; you'll need to adjust the
        values for wider elements (e.g. text).
      </p>
      <Code>
        {`animation: wobble 0.5s;

@keyframes wobble {
  0% {
    scale: 1 1;
  }
  30% {
    scale: 1.2 0.8;
    translate: 0 10%;
  }
  60% {
    scale: 1 1;
    translate: 0 0;
  }
  80% {
    scale: 1.05 0.95;
    translate: 0 2.5%;
  }
  100% {
    scale: 1 1;
  }
}`}
      </Code>
    </InfoRoot>
  );
};

export default WobbleInfo;
