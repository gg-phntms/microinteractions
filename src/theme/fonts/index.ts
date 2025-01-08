import { Geist, Roboto_Flex } from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
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

export const FONT_VARIABLES = [geist.variable, robotoFlex.variable].join(" ");
