import Page from "@/components/Layout/Page";
import { Column } from "@/components/Layout/Page/styles";
import Link from "next/link";
import { LeftAlign } from "./styles";

export default function About() {
  return (
    <Page>
      <Column width="extraNarrow">
        <h1>About</h1>
        <p>
          The aim of this app is to <strong>ease communication</strong> between
          designers and devs. A designer should be able to share specific
          animations with a developer, who can then adjust it to suit their
          needs.
        </p>
        <LeftAlign>
          <h3>Animations should be simple</h3>
          <p>
            We don&apos;t want to distract from the original purpose of the
            website, just enhance it. We also want them to be as painless as
            possible to implement.
          </p>
          <p>
            To that end,{" "}
            <strong>every animation in the gallery uses native CSS. </strong>
            Here&apos;s a few things to consider when designing animations for
            CSS.
          </p>
          <ul>
            <li>
              <strong>Stick to two states.</strong> The element might do a bunch
              of different things between those two states, and you might layer
              several animations, but fundamentally you&apos;ll mostly be
              transitioning between &quot;on&quot; and &quot;off&quot;.
            </li>
            <li>
              <strong>Scale, transform and rotate.</strong> These are the basic
              ingredients of most of the animations in the gallery - anything
              fancier will generally require GSAP.
            </li>
            <li>
              <strong>Take advantage of easing.</strong> Easing functions are
              super powerful, and resources like{" "}
              <Link href="https://easingwizard.com" target="_blank">
                Easing Wizard
              </Link>{" "}
              make life a whole lot easier.
            </li>
          </ul>
          <p>Happy animating!</p>
        </LeftAlign>
      </Column>
    </Page>
  );
}
