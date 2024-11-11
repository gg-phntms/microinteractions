import type { Metadata } from "next";

import RootBody from "@/components/RootBody";

import "@/theme/global.scss";

export const metadata: Metadata = {
  title: "Next Starter",
  description: "CHANGE ME :)",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <RootBody>{children}</RootBody>
    </html>
  );
}
