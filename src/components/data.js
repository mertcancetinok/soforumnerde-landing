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
  title: "Başlık buraya",
  desc: "Buraya bir açıklama yazabilirsiniz. Bu açıklama bir veya iki cümle olabilir.",
  image: benefitOneImg,
  bullets: [
    {
      title: "İlk faydayı buraya yazın",
      desc: "Bu kısımda ürününüzün ilk faydasını yazabilirsiniz. Bu fayda bir veya iki cümle olabilir.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "İkinci faydayı buraya yazın",
      desc: "Bu kısımda ürününüzün ikinci faydasını yazabilirsiniz. Bu fayda bir veya iki cümle olabilir.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Üçüncü faydayı buraya yazın",
      desc: "Bu kısımda ürününüzün üçüncü faydasını yazabilirsiniz. Bu fayda bir veya iki cümle olabilir.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Daha fazla fayda buraya",
  desc: "Buraya bir açıklama yazabilirsiniz. Bu açıklama bir veya iki cümle olabilir.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Dördüncü faydayı buraya yazın",
      desc: "Bu kısımda ürününüzün dördüncü faydasını yazabilirsiniz. Bu fayda bir veya iki cümle olabilir.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Beşinci faydayı buraya yazın",
      desc: "Bu kısımda ürününüzün beşinci faydasını yazabilirsiniz. Bu fayda bir veya iki cümle olabilir.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Altıncı faydayı buraya yazın",
      desc: "Bu kısımda ürününüzün altıncı faydasını yazabilirsiniz. Bu fayda bir veya iki cümle olabilir.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
