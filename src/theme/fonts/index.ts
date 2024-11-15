import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const FONT_VARIABLES = [geist.variable].join(" ");
