import HomeSvg from "@/svg/HomeSvg";
import PeopleLogo from "@/svg/PeopleLogo";
import SettingSvg from "@/svg/SettingSvg";
import ProductIcon from "@/svg/Products";
import TeamIcon from "@/svg/TeamIcon";
import BlogIcon from "@/svg/BlogIcon";
import UserIcon from "@/svg/UserIcon";
import RefundIcon from "@/svg/RefundIcon";
import PdfIcon from "@/svg/PdfIcon";
import OrderIcon from "@/svg/OrderSvg";




interface MenuItem {
  id: number;
  text: string;
  icon: () => JSX.Element;
  link?: string;
  submenu?: SubMenuItem[];
}

interface SubMenuItem {
  text: string;
  link: string;
}

export const menuData: MenuItem[] = [
  {
    id: 1,
    text: "Asosiy",
    icon: HomeSvg,
    link: "/",
  },
  {
    id: 2,
    text: "Blog",
    icon: ProductIcon,
    submenu: [
      {
        text: "Blog",
        link: "/services",
      },
      {
        text: "Blog qo'shish",
        link: "/create-service",
      }, 
    ],
  },
  {
    id: 3,
    text: "Videos",
    icon: BlogIcon,
    submenu: [
      {
        text: "Videos",
        link: "/blogs",
      },
      {
        text: "Videos yaratish",
        link: "/create-blog",
      },
    ],
  },
  // {
  //   id: 4,
  //   text: "Yangiliklar",
  //   icon: PdfIcon,
  //   submenu: [
  //     {
  //       text: "Hamma yangiliklar",
  //       link: "/news",
  //     },
  //     {
  //       text: "Yangiliklar yaratish",
  //       link: "/create-news",
  //     },
  //   ],
  // },
 


  // {
  //   id: 5,
  //   text: "Tourlar",
  //   icon: OrderIcon,
  //   submenu: [
  //     {
  //       text: "Hamma Tourlar",
  //       link: "/sources",
  //     },
  //     {
  //       text: "Tourlar yaratish",
  //       link: "/create-source",
  //     },
  //   ],
  // },

  // {
  //   id: 6,
  //   text: "Ichki Tourlar",
  //   icon: OrderIcon,
  //   submenu: [
  //     {
  //       text: "Hamma Tourlar",
  //       link: "/tours-product",
  //     },
  //     {
  //       text: "Tourlar yaratish",
  //       link: "/create-tours",
  //     },
  //   ],
  // },


  // {
  //   id: 7,
  //   text: "Категория в соответствии с",
  //   icon: BlogIcon,
  //   submenu: [
  //     {
  //       text: "Все категории",
  //       link: "/categories",
  //     },
  //     {
  //       text: "Создать категорию",
  //       link: "/create-categories",
  //     },
  //   ],
  // },
  
  // {
  //   id: 8,
  //   text: "Продукт",
  //   icon: BlogIcon,
  //   submenu: [
  //     {
  //       text: "Все Продукт",
  //       link: "/products",
  //     },
  //     {
  //       text: "Создать Продукт",
  //       link: "/create-products",
  //     },
  //   ],
  // },
 
  
];
