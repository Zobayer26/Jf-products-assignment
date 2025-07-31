import ProductImage_1 from "../assets/Agri_product_1.png";
import ProductImage_2 from "../assets/Agri_product_2.png";
import ProductImage_3 from "../assets/Agri_product_3.png";
import ProductImage_4 from "../assets/Agri_product_4.png";

import LandScapeImage_1 from "../assets/LandScape_1.png";
import LandScapeImage_2 from "../assets/LandScape_2.png";
import LandScapeImage_3 from "../assets/LandScape_3.png";
import LandScapeImage_4 from "../assets/LandScape_4.png";

import chennai from "../assets/chennai.png";
import coimbatore from "../assets/Coimbatore.png";
import goa from "../assets/goa.png";
import hydrabad from "../assets/hydrabad.png";
import kochi from "../assets/kochi.png";
import mumbai from "../assets/mumbai.png";

import BannerImg_1 from "../assets/banner_img_1.png";
import BannerImg_2 from "../assets/Banner_img_2.png";

const AgriProductData = [
  {
    id: 1,
    imageSrc: ProductImage_1,
    title: "JF Barbed Wire- 270 GSM",
    price: "₹4,995.00",
  },
  {
    id: 2,
    imageSrc: ProductImage_2,
    title: "FGC RustFree Fencing Poles",
    price: "₹499.00 – ₹1,589.00",
  },
  {
    id: 3,
    imageSrc: ProductImage_3,
    title: "GI Poultry Mesh",
    price: "₹1,260.00 – ₹10,750.00",
  },
  {
    id: 4,
    imageSrc: ProductImage_4,
    title: "JF Bluelink Mesh",
    price: "₹3,067.50 – ₹6,362.50",
  },
  {
    id: 5,
    imageSrc: ProductImage_1,
    title: "JF Barbed Wire- 270 GSM",
    price: "₹4,995.00",
  },
];

const LandScapeData = [
  {
    id: 1,
    imageSrc: LandScapeImage_1,
    title: "Antiqo Fence",
    price: "₹10,024.00 – ₹14,984.82",
  },
  {
    id: 2,
    imageSrc: LandScapeImage_2,
    title: "JF Australian Trellis",
    price: "₹6,962.00",
  },
  {
    id: 3,
    imageSrc: LandScapeImage_3,
    title: "JF Polyhex Mesh",
    price: "₹4,050.00 – ₹10,770.00",
  },
  {
    id: 4,
    imageSrc: LandScapeImage_4,
    title: "JF Privezy Grass Wall",
    price: "₹1,646.10 – ₹18,284.10",
  },
];

const navLinks = [
  {
    id: 1,
    title: "home",
    link: "",
  },
  {
    id: 2,
    title: "Shop",
    link: "",
  },
  {
    id: 3,
    title: "Our Story",
    link: "",
  },
  {
    id: 4,
    title: "Blogs",
    link: "",
  },
  {
    id: 5,
    title: "Contact",
    link: "",
  },
];
const quickLinks = [
  {
    id: 1,
    title: "FAQs",
    link: "",
  },
  {
    id: 2,
    title: "Terms & Conditions",
    link: "",
  },
  {
    id: 3,
    title: "Privacy Policy",
    link: "",
  },
  {
    id: 4,
    title: "Shipping Policy",
    link: "",
  },
  {
    id: 5,
    title: "My Account",
    link: "",
  },
];

const branchData = [
  {
    id: 1,
    title: "Coimbatore",
    image: coimbatore,
    location: `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3888
    .5238538579842!2d77.57606256170953!3d12.938295587321313!2m3!1f0!2f0!
    3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJRR%20Towers%20%20%20%20%20%20%20%
    20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%
    20%20%20(2nd%20Floor)%2C%20Pattalamma%20Temple%20Rd%2C%20Basavangudi%2
    C%20Bangalore%2C%20560004!5e0!3m2!1sen!2sbd!4v1753963710169!5m2!1sen!2sbd`,
  },
  {
    id: 2,
    title: "chennai",
    image: chennai,
    location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756
    .13152768556!2d80.04352163670585!3d13.047473102149144!2m3!1f0!2f0!3f0!3m2
    !1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2s
    Chennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sbd!4v1753966432493!5m2!1sen!2sbd`,
  },
  {
    id: 3,
    title: "hyderabad",
    image: hydrabad,
    location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647
    .3424061043!2d78.2428942338!3d17.41228073759502!2m3!1f0!2f0!3f0!3m2!1i1
    024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHy
    derabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sbd!4v1753966680213!5m2!1sen!2sbd`,
  },
  {
    id: 4,
    title: "goa",
    image: goa,
    location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492481.2374300151!2d73.38188982947725!3d15.
    348859665531796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!
    2sGoa%2C%20India!5e0!3m2!1sen!2sbd!4v1753966867095!5m2!1sen!2sbd`,
  },
  {
    id: 5,
    title: "Kochi",
    image: kochi,
    location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251479.49760686725!2d76.13696842810714!3d9
    .986499898714902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!
    2sKochi%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sbd!4v1753966942458!5m2!1sen!2sbd`,
  },
  {
    id: 6,
    title: "mumbai",
    image: mumbai,
    location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.70220553136!2d72.71379001915177!3d19.
    0824819106581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!
    2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sbd!4v1753967012824!5m2!1sen!2sbd`,
  },
];
const images = [
  {
    id: 1,
    image: BannerImg_1,
    title: "JF Privezy Grass Wall",
    details: "The perfect Blend of Greenery",
  },
  {
    id: 2,
    image: BannerImg_2,
    title: "JF Privezy Grass Wall",
    details: "Where aesthetics meet durability",
  },
  {
    id: 3,
    image: BannerImg_1,
    title: "JF Australian Trellis",
    details: "Where aesthetics meet durability",
  },
];

export {
  AgriProductData,
  branchData,
  images,
  LandScapeData,
  navLinks,
  quickLinks,
};
