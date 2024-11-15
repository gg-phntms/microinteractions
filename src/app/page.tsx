import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Phantom Next Starter</h1>
      <Image
        src="/assets/images/crab.png"
        alt="crab"
        width={360}
        height={270}
      />
    </main>
  );
}
