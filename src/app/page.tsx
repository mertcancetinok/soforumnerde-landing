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
      <SectionTitle title="Personelinize Güvenin">
        <div className="flex flex-col gap-3">
        <p>
          Telefonun şarjını su gibi bitiren GPS takibi tabanlı konum programlarının
          yaptığı tek şey, personelinizin bulunduğu konumu size göstermektir.
        </p>
        
        <p>
          Ancak nereye gittiğini, ne zaman iş almaya müsait olduğunu söylemez.
        </p>
        
        <p>
          Ayrıca bu programları kullanırken birçok engelle karşılaşılmaktadır.
          Gerek telefon şirketlerinin uygulamaların GPS takibini kısıtlaması,
          gerekse telefon şarjlarının erken bitmesi gibi sıkıntılar kullanımı zorlaştırmaktadır.
        </p>
        
        <p>
          Şoförüm Nerede uygulaması sayesinde personelinizin telefonu kasmaz,
          şarjını bitirmez, telefon firmalarının engeline takılmadan kolaylıkla kullanılır.
        </p>
        
        <p>
          Çünkü bizim programımızda personel gideceği konumu sisteme girer ve
          tahmini kaç dakika sonra orada olacağını da yazar ve program geri sayıma başlar.
          Siz de bütün personellerinizin hangi semtlere gittiğini, ne kadar zamanda
          müsait olacaklarını tek bir ekrandan görürsünüz.
        </p>
        
        <p>
          Programı ayarlayarak ara sıra personelinizden otomatik durum güncellemesi ister,
          bu sayede her şey güncel kalır.
        </p>
        
        <p>
          Siz de personelinizin tam konumuna uygun işleri ona vererek
          personelinizin motive olmasını ve daha yüksek cirolar yapmasını sağlarsınız.
        </p>
          </div>             
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle preTitle="SSS" title="Sıkça Sorulan Sorular">
      Programımız, arkasındaki ekibiyle günün her saati 7/24 teknik destek ve online rehberlik hizmeti vermektedir. Aklınıza takılan her şeyi anında sorabilirsiniz.
      </SectionTitle>

      <Faq />
    </Container>
  );
}
