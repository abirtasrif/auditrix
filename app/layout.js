import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Auditrix. - Accounting Services",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={montserrat.className}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
