import CremosoImage from "../assets/banhmi.png";
import CapuccinoImage from "../assets/banhmi.png";
import CubanoImage from "../assets/banhmi.png";

export const COFFEES_HIGHTLIGHT = [
  {
    id: 3,
    title: "Bánh mì truyền thống",
    description: "Bao gồm thịt, chả, chà bông, ba tê",
    price: 30.000,
    sizes: ["114ml", "140ml", "227ml"],
    type: 1,
    type_label: "Truyền thống",
    image: CremosoImage,
  },
  {
    id: 6,
    title: "Bánh mì chả trứng",
    description: "Bao gồm chả, trứng, ba tê",
    price: 30.000,
    sizes: ["114ml", "140ml", "227ml"],
    type: 2,
    type_label: "Cơ bản",
    image: CapuccinoImage,
  },
  {
    id: 9,
    title: "Cubano",
    description:
      "Cà phê espresso đá với rượu rum, kem và bạc hà",
    price: 30.000,
    sizes: ["114ml", "140ml", "227ml"],
    type: 3,
    type_label: "Đặc biệt",
    image: CubanoImage,
  },
];
