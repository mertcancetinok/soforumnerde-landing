import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Faq } from "@/components/Faq";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Neden Biz"
        title="Buraya bir yazı gelecek"
      >
        Buraya bir yazı gelecek. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dignissimos cupiditate beatae illo odit officia placeat amet unde atque asperiores!
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

  
      <SectionTitle preTitle="SSS" title="Sıkça Sorulan Sorular">
        Buraya bir yazı gelecek. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dignissimos cupiditate beatae illo odit officia placeat amet unde atque asperiores!
      </SectionTitle>

      <Faq />
    </Container>
  );
}
