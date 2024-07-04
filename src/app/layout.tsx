import "bootstrap/dist/css/bootstrap.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../../styles/global.scss";
import BootstrapClient from "@/components/BootstrapClient";

const lato_init = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "puneet kumar portfolio app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={lato_init.variable}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
};

export default RootLayout;
