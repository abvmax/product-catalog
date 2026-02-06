import appleBYZImg from "./assets/img/S852.png";
import appleEarPods1Img from "./assets/img/earpods1.png";
import appleEarPods2Img from "./assets/img/earpods2.png";
import appleAirPodsImg from "./assets/img/airpods.png";
import gerlaxImg from "./assets/img/gerlax.png";
import borofoneImg from "./assets/img/borofone.png";

export interface CatalogDataItem {
  id: number;
  title: string;
  price: number;
  discount?: number;
  rate: number;
  img: string;
  type: "wired" | "wireless";
  description?: string;
}

export interface CatalogData {
  id: number;
  title: string;
  type: "wired" | "wireless";
  items: CatalogDataItem[];
}

export type CatalogArr = CatalogData[];

export const catalogData: CatalogArr = [
  {
    id: 1,
    title: "Наушники",
    type: "wired",
    items: [
      {
        id: 1,
        title: "Apple BYZ S852I",
        price: 2927,
        discount: 0.2,
        rate: 4.7,
        img: appleBYZImg,
        type: "wired",
        description:
          "Проводные наушники с высоким качеством звука. Идеальны для повседневного использования.",
      },
      {
        id: 2,
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        img: appleEarPods1Img,
        type: "wired",
        description:
          "Классические проводные наушники от Apple с удобной посадкой.",
      },
      {
        id: 3,
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        img: appleEarPods2Img,
        type: "wired",
        description: "Еще одна модель популярных наушников от Apple.",
      },
      {
        id: 4,
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
        img: appleBYZImg,
        type: "wired",
        description:
          "Проводные наушники с высоким качеством звука. Идеальны для повседневного использования.",
      },
      {
        id: 5,
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        img: appleEarPods1Img,
        type: "wired",
        description:
          "Классические проводные наушники от Apple с удобной посадкой.",
      },
      {
        id: 6,
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        img: appleEarPods2Img,
        type: "wired",
        description: "Еще одна модель популярных наушников от Apple.",
      },
    ],
  },
  {
    id: 2,
    title: "Беспроводные наушники",
    type: "wireless",
    items: [
      {
        id: 7,
        title: "Apple AirPods",
        price: 9527,
        rate: 4.7,
        img: appleAirPodsImg,
        type: "wireless",
        description:
          "Беспроводные наушники нового поколения с активным шумоподавлением.",
      },
      {
        id: 8,
        title: "GERLAX GH-04",
        price: 6527,
        rate: 4.7,
        img: gerlaxImg,
        type: "wireless",
        description:
          "Надежные беспроводные наушники с длительным временем работы.",
      },
      {
        id: 9,
        title: "BOROFONE BO4",
        price: 7527,
        rate: 4.7,
        img: borofoneImg,
        type: "wireless",
        description:
          "Стильные наушники с качественным звуком и удобным управлением.",
      },
    ],
  },
];
