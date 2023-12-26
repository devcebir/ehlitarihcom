import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${PoppinsFont.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
