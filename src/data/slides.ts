import type { Slide } from '../commonTypes/slide';

const basePath = import.meta.env.BASE_URL;

export const slidesData: Slide[] = [
  {
    id: 1,
    imageUrl: `${basePath}images/nature1.jpg`,
    caption: "Хмарочоси на узбережжі"
  },
  {
    id: 2,
    imageUrl: `${basePath}images/nature2.jpg`,
    caption: "Рідкісний вид орла"
  },
  {
    id: 3,
    imageUrl: `${basePath}images/nature3.jpg`,
    caption: "Скелясте узбережжя з неспокійною водою"
  }
];
