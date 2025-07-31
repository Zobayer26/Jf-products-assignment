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
  },
  {
    id: 2,
    title: "chennai",
    image: chennai,
  },
  {
    id: 3,
    title: "hyderabad",
    image: hydrabad,
  },
  {
    id: 4,
    title: "goa",
    image: goa,
  },
  {
    id: 5,
    title: "Kochi",
    image: kochi,
  },
  {
    id: 6,
    title: "mumbai",
    image: mumbai,
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
