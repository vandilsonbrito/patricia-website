import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Banner from "@/components/Banner/Banner";
import SectionIntro from "@/components/SectionIntro/SectionIntro";
import SectionPresentation from "@/components/SectionPresentation/SectionPresentation";
import SectionSocialProof from "@/components/SectionSocialProof/SectionSocialProof";
import Head from 'next/head';

export const Metadata = {
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
  
};

export default function Home() {
  return (
    <main className="w-full h-full bg-secundary">
      <Head>
            <link rel="amphtml" href="https://www.profapatriciacruz.com.br?page=amp" />
            {/* Estrutura de dados Schema.org */}
            <script type="application/ld+json">
                {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Website",
                "headline": 'Home page - Prof. Patrícia Cruz - TCC, Artigo Científico, Projeto de Pesquisa, Relatório e Pôster Científico.',
                "description": 'A Professora Patrícia Cruz atua como Mentora acadêmica há mais de 4 anos. TCC (Trabalho de Conclusão de Curso), Artigo Científico, Projeto de Pesquisa, Relatório, Pôster Científico entre outros trabalhos acadêmicos.',
                "image": 'https://asset.cloudinary.com/ds7cszkkx/11ee1628b8bf7a83b10e520fe14bc034',
                "author": {
                    "@type": "Person",
                    "name": "Prof. Patrícia Cruz "
                },
                "datePublished": "2023-12-04",
                "publisher": {
                    "@type": "Organization",
                    "name": "profapatriciacruz.com.br"
                }
                })}
            </script>
        </Head>
        <Banner/>
        <SectionIntro/>
        <SectionPresentation/>
        <SectionSocialProof/>
      </main>
  );
}
