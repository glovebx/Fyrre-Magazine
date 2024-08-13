import Container from "@/components/ui/container";
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductContextProvider from "@/context/ProductContext";
import ArticleContextProvider from "@/context/ArticleContext";

export const metadata: Metadata = {
  title: "Guluart",
  description: "Jewelry & Art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="/logos/FyrreMagazineFavicon.svg"
          type="image/x-icon"
        />
      </head>
      <body>
        <ArticleContextProvider>
          <ProductContextProvider>
            <Container>
              <Header />
              {children}
              <Footer />
            </Container>
          </ProductContextProvider>
        </ArticleContextProvider>
      </body>
    </html>
  );
}
