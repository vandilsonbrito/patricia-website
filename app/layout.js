import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title:
    "TCC, Artigo Científico, Projeto de Pesquisa, Relatório e Pôster Científico.",
  description:
    "A Professora Patrícia Cruz atua como Mentora acadêmica há mais de 4 anos e já ajudou centenas de alunos a atingirem seus objetivos com excelência, seja com TCC (Trabalho de Conclusão de Curso), Artigo Científico, Projeto de Pesquisa, Relatório, Pôster Científico entre outros trabalhos acadêmicos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/favicon.ico" />
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body> 
    </html>
  );
}
