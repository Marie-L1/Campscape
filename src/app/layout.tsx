import type { Metadata } from "next";
import "./globals.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Campscape",
  description: "Travel UX/UI App for Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
