import { IProduct } from "@/interfaces/types";

const productsToPreLoad: IProduct[] = [
  {
    id: 1,
    name: "iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:"https://www.pngall.com/wp-content/uploads/5/iPhone-11-PNG-Image.png",
    categoryId: 1,
    stock: 10,
  },
  {
    id: 2,
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://www.dropbox.com/scl/fi/k7uktbt5nshly0pa497um/IMG_9400.PNG?rlkey=4cz0lkhf1t5uckieent66irgw&st=v3v85o5z&raw=1",
    categoryId: 2,
    stock: 10,
  },
  {
    id: 3,
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://www.dropbox.com/scl/fi/dmjhrvt89lr6q8409mn2t/IMG_9389.PNG?rlkey=q2ak8vl1x4h7jvxswq8yhnyby&st=20sgo7it&raw=1",
    categoryId: 3,
    stock: 10,
  },
  {
    id: 4,
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image: 
      "https://www.dropbox.com/scl/fi/niar6ameuld1etec8e84h/IMG_9396.PNG?rlkey=90zybesrxqri7i79lp1r3a7za&st=83lewwdg&raw=1",
    categoryId: 4,
    stock: 10,
  },
  {
    id: 5,
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://www.dropbox.com/scl/fi/2r66ta94sw9ak87uky5z6/IMG_9398.PNG?rlkey=t14sf7qmy7y501clyg560nspy&st=g0evrwir&raw=1",      categoryId: 5,
    stock: 10,
  },
  {
    id: 6,
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
    "https://www.apple.com/v/homepod-mini/j/images/overview/hero_homepod_white__fbci8wwv3oi2_large.png",
    categoryId: 6,
    stock: 10,
  },
  ];

  export default productsToPreLoad