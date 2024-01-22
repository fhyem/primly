import "./globals.css";
import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import StyledComponentsRegistry from "../lib/registry";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import Main from "./main";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://informative-eta.vercel.app"),
  title: {
    default: "Infomative - Your Gateway to Diverse Topics",
    template: `%s - Infomative - Your Gateway to Diverse Topics`,
  },
  description:
    "Explore a World of Knowledge and Inspiration with Infomative. Discover the Latest in Entertainment, Health, Illustration, Life Style, Music, Sports, Technology, Travel, Typography, and More. Dive into a Wealth of Informative Content Today!",
  applicationName: "Infomative",
  keywords: [
    "information",
    "knowledge",
    "entertainment",
    "health",
    "technology",
    "travel",
    "lifestyle",
    "music",
    "typography",
    "inspiration",
    "education",
    "news",
    "science",
    "culture",
    "art",
    "business",
    "history",
    "food",
    "fitness",
    "fashion",
    "sports",
    "environment",
    "finance",
    "tips",
    "trends",
    "wellness",
    "design",
    "productivity",
    "reviews",
    "how-to",
  ],
  authors: [
    {
      name: "Fhyem Bercha",
      url: "https://www.instagram.com/fhyem",
    },
  ],
  creator: "Fahim Ud Din",
  publisher: "Fhyem Bercha",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Travel with Khushlim",
    description:
      "Explore mighty Mountains of Pakistan with Khushlim Khan. With over 30 years of experience in the industry, Travel with Khushlim takes you on an Epic journey through mesmesrising Places Pakistan has to offer. Join us on this Epic Tour with the best guide in the industry.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="MUzhURRO1S3WZus6Xb82Hrj8FvGBDey_v_tVrpjiGiQ"
        />
        <meta name="robots" content="all" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Main className={poppins.className} id="main">
              {children}
              <Analytics />
            </Main>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
