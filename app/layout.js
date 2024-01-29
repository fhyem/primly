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
  metadataBase: new URL("https://travelwithkhushlim.vercel.app/"),
  title: {
    default: "Travel with Khushlim",
    template: `%s - Travel - Your travel Guide`,
  },
  description:
    "Explore mighty Mountains of Pakistan with Khushlim Khan. With over 30 years of experience in the industry, Travel with Khushlim takes you on an Epic journey through mesmesrising Places Pakistan has to offer. Join us on this Epic Tour with the best guide in the industry.",
  applicationName: "Infomative",
  keywords: [
    "hunza",
    "skardu",
    "gilgit",
    "pakistan",
    "trekking",
    "travel",
    "tour",
    "culture",
  ],
  authors: [
    {
      name: "Fahim Ud Din",
      url: "https://www.instagram.com/fhyem/",
    },
  ],
  creator: "Fahim Ud Din",
  publisher: "Fhyem Ud Din",
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
        {/* <meta
          name="google-site-verification"
          content="MUzhURRO1S3WZus6Xb82Hrj8FvGBDey_v_tVrpjiGiQ"
        />
        <meta name="robots" content="all" /> */}
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
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
