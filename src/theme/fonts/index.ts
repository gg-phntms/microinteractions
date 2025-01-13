import { Geist, JetBrains_Mono, Roboto_Flex } from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-jetbrains",
});
const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  weight: "variable",
  axes: [
    "GRAD",
    "XOPQ",
    "XTRA",
    "YOPQ",
    "YTAS",
    "YTDE",
    "YTFI",
    "YTLC",
    "YTUC",
    "opsz",
    "slnt",
    "wdth",
  ],
  variable: "--font-roboto",
});

export const FONT_VARIABLES = [
  geist.variable,
  jetBrains.variable,
  robotoFlex.variable,
].join(" ");
