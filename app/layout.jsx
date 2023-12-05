import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Providers from "./Providers";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`flex flex-col px-96 max-[1440px]:px-64 max-[1024px]:px-32 max-[768px]:px-16 max-[425px]:px-8 max-[375px]:px-4 ${PoppinsFont.className}`}
      >
        <Providers>
          {" "}
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
