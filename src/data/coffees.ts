import TradicionalImage from "../assets/banhmi.png";
import AmericanoImage from "../assets/banhmi.png";
import CremosoImage from "../assets/banhmi.png";
import LatteImage from "../assets/banhmi.png";
import GeladoImage from "../assets/banhmi.png";

import CapuccinoImage from "../assets/banhmi.png";
import MocaccinoImage from "../assets/banhmi.png";
import ChocolateQuenteImage from "../assets/banhmi.png";

import CubanoImage from "../assets/banhmi.png";
import HavaianoImage from "../assets/banhmi.png";
import ArabeImage from "../assets/banhmi.png";
import IrlandesImage from "../assets/banhmi.png";

export const COFFEES = [
  {
    title: "Traditional",
    data: [
      {
        id: 1,
        title: "Bánh mì truyền thống",
        description: "Cà phê truyền thống được pha bằng nước nóng và đậu xay",
        price: 30.000,
        sizes: ["114ml", "140ml", "227ml"],
        type: 1,
        type_label: "Truyền thống",
        image: TradicionalImage,
      },
      {
        id: 2,
        title: "Expresso Americano",
        description: "Cà phê espresso pha loãng, ít đậm đà hơn truyền thống",
        price: 30.000,
        sizes: ["114ml", "140ml", "227ml"],
        type: 1,
        type_label: "Truyền thống",
        image: AmericanoImage,
      },
      {
        id: 3,
        title: "Bánh mì truyền thống",
        description: "Bao gồm thịt, chả, chà bông, ba tê",
        price: 30.000,
        sizes: ["Thịt", "Chả", "Trứng"],
        type: 1,
        type_label: "Truyền thống",
        image: CremosoImage,
      },
      {
        id: 4,
        title: "Latte",
        description: "Espresso với gấp đôi sữa và bọt kem",
        price: 30.000,
        sizes: ["114ml", "140ml", "227ml"],
        type: 1,
        type_label: "Truyền thống",
        image: LatteImage,
      },
      {
        id: 5,
        title: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 30.000,
        sizes: ["114ml", "140ml", "227ml"],
        type: 1,
        type_label: "Truyền thống",
        image: GeladoImage,
      },
    ],
  },
  {
    title: "Doces",
    data: [
      {
        id: 6,
        title: "Capuccino",
        description: "Bebida com canela feita de doses de café, leite e espuma",
        price: 30.000,
        sizes: ["114ml", "140ml", "227ml"],
        type: 2,
        type_label: "Doce",
        image: CapuccinoImage,
      },
      {
        id: 7,
        title: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 30.000,
        sizes: ["114ml", "140ml", "227ml"],
        type: 2,
        type_label: "Doce",
        image: MocaccinoImage,
      },
      {
        id: 8,
        title: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 30.000,
        sizes: ["114ml", "140ml", "227ml"],
        type: 2,
        type_label: "Doce",
        image: ChocolateQuenteImage,
      },
    ],
  },
  {
    title: "Especiais",
    data: [
      {
        id: 9,
        title: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: 30.000,
        sizes: ["114ml", "140ml", "227ml"],
        type: 3,
        type_label: "Especial",
        image: CubanoImage,
      },
      {
        id: 10,
        title: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        price: 30.000,
        sizes: ["114ml", "140ml", "227ml"],
        type: 3,
        type_label: "Especial",
        image: HavaianoImage,
      },
      {
        id: 11,
        title: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: 30.000,
        sizes: ["114ml", "140ml", "227ml"],
        type: 3,
        type_label: "Especial",
        image: ArabeImage,
      },
      {
        id: 12,
        title: "Irlandês",
        description: "Đồ uống được pha chế từ cà phê espresso và đá viên",
        price: 30.000,
        sizes: ["114ml", "140ml", "227ml"],
        type: 3,
        type_label: "Especial",
        image: IrlandesImage,
      },
    ],
  },
];
