import { Html, Head, Main, NextScript } from "next/document";
import { Atencao } from "../../components/atencao";
import { Header } from "../../components/header";
import { Form } from "../../components/form"
import { Beneficios } from "../../components/beneficios";
import { Depoimentos } from "../../components/depoimentos";



export default function Document() {
  return (
    <Html lang="PT-br">
      <Head />
      <body className="bg-zinc-900">
        <Atencao />
        <Header />
        <Main />
        <Form />
        <Beneficios />
        <Depoimentos />
        <NextScript />
      </body>
    </Html>
  );
}
