import { Roboto } from "next/font/google";
import "./global.css";
import logoImg from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <div className="container">
          <header className="headerContainer">
            <Link href="/">
              <Image src={logoImg} alt="logo" />
            </Link>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
