import type { Metadata } from "next";

import RootBody from "@/components/Layout/RootBody";

import Navbar from "@/components/Layout/Navbar";
import "@/theme/global.scss";

export const metadata: Metadata = {
  title: "Micro-interactions",
  description: "A collection of simple animations to explore and adapt.",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <RootBody>
        <Navbar />
        {children}
      </RootBody>
    </html>
  );
}
