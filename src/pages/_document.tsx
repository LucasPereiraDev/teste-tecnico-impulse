import { Html, Head, Main, NextScript } from "next/document";
import { Atencao } from "../../components/atencao";
import { Header } from "../../components/header";
import { Form } from "../../components/form"
import { Beneficios } from "../../components/beneficios";
import { Depoimentos } from "../../components/depoimentos";
import { Especialista } from "../../components/especialista";
import { Faq } from "../../components/faq";




export default function Document() {
  return (
    <Html lang="PT-br">
      <Head />
      <body className="bg-zinc-900 text-sans bg-gradient-to-b from-gray-900 to-zinc-950">
        <Atencao />
        <Header />
        <Main />
        <Form />
        <Beneficios />
        <Depoimentos />
        <Especialista />
        <Faq />
        <NextScript />
      </body>
    </Html>
  );
}
