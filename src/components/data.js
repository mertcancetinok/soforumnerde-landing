import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "NEDEN ŞOFÖRÜMNERDE UYGULAMASI?",
  desc: "Amaç Para kazanmaksa bunu Personelinizi doğru yönlendirerek her gün %25 arttıra bilirsiniz.",
  image: benefitOneImg,
  bullets: [
    {
      title: "ŞÖFÖRÜNÜZE UYGUN İŞ PLANLAYIN",
      desc: "Şöförünüzün programa girdiği bilgiler ışığında ona en uygun işi planlayarak  hemsiz hem şöförünüz fazladan ciro yaparsınız.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "MÜŞTERİ MEMNUNİYETİ",
      desc: "Müşterilerinize mahçup olmayın. Bir müşteri sadece bir müşteri değildir. Devamlı hizmet sağlarsanız başka tarafa geçiş yapmayacaktır.Zamanıda Hizmet Müşterilerin en çok istediği şeydir",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "DAHA AZ YOL",
      desc: "Program etkın kullanıldıgında şöförünüzün daha az km yapdıgını fark edeceksiniz",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "ARKANIZA YASLANIN VE EKRANI İZLEYİN",
  desc: "Nerdesin abi? Kaç dakkaya boşsun abi? Paketi aldınmı abi? Yola çıkdınmı abi? Sipariş teslim edildimi abi? Sorularını siz sormanıza gerek yok bütün bu soruları program şöförünüze uygun vakitlerde sorar ve ondan aldığı yanıtları ekranınıza taşır siz sadece izleyin ve ona müşteri, paket , iş ,sipariş ayarlayın.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "PERSONELİNİZİN MOTİVASYONU ARTSIN",
      desc: "Bulunduğu Konuma yakın işler atarsanız aynı çalışma saatlerinde daha fazla ciro yapmak personelinize iyi geelcektir",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "ACEMİ PERSONEL",
      desc: "Personeliniz program içerisindeki sohbet kanalıyla diger personellerden yoltarıfı veya baş ka konularda yarım isteye bilir. Bu sayede işe yeni başlayana işi ögretmek daha kolay olur",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "CİRO TOPLAMAYA SON",
      desc: "İşlerinizi istersenız Porogram içerisindeki mesajlaşma bölümünden atın ve o sizin yerinizi personelinizin cirosunu devamlı toplasın. Ayrıca programımız whtsapada entegreli çalışdıgı için uygulama üzerinde whtsapa kolayca girilip burdan da irtibat kurulabiir",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
