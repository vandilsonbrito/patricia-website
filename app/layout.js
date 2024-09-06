import { Montserrat } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import "aos/dist/aos.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title:
    "TCC, Artigo Científico, Projeto de Pesquisa, Relatório e Pôster Científico.",
  description:
    "A Professora Patrícia Cruz atua como Mentora acadêmica há mais de 4 anos e já ajudou centenas de alunos a atingirem seus objetivos com excelência, seja com TCC (Trabalho de Conclusão de Curso), Artigo Científico, Projeto de Pesquisa, Relatório, Pôster Científico entre outros trabalhos acadêmicos.",
  alternates: {
    canonical: 'https://www.profapatriciacruz.com.br',
  },
  openGraph: {
    title: 'Prof. Patrícia Cruz - TCC, Artigo Científico, Projeto de Pesquisa, Relatório e Pôster Científico.',
    description: 'A Professora Patrícia Cruz atua como Mentora acadêmica há mais de 4 anos e já ajudou centenas de alunos a atingirem seus objetivos com excelência, seja com TCC (Trabalho de Conclusão de Curso), Artigo Científico, Projeto de Pesquisa, Relatório, Pôster Científico entre outros trabalhos acadêmicos.',
    images: [
      {
        url: 'https://asset.cloudinary.com/ds7cszkkx/11ee1628b8bf7a83b10e520fe14bc034',
        alt: 'Professora Mentora Patrícia Cruz',
        width: 400,
        height: 250
      }
    ],
    url: 'https://www.profapatriciacruz.com.br',
    type: 'website',
  },
  robots: 'index, follow',
  googleSiteVerification: '64LQpDDzIeHpBpF81MezaSfEKxt6bvyeYEaAGQZYPiQ',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
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
