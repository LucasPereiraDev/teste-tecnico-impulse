import { Html, Head, Main, NextScript } from "next/document";
import { Atencao } from "../../components/atencao";
import { Header } from "../../components/header";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-zinc-900">
        <Atencao />
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
