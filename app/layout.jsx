import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Providers from "./Providers";
import Footer from "@/components/footer";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`flex flex-col justify-between h-screen ${PoppinsFont.className}`}
      >
        <Providers>
          {" "}
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
