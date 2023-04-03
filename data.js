import { RiShipLine } from 'react-icons/ri';
import { MdSupportAgent } from 'react-icons/md';
import { ImCreditCard } from 'react-icons/im';
import { HiOutlineReceiptPercent } from 'react-icons/hi2';

export const menu = [
  {
    id: '1C1XQoWhrk',
    name: 'Value of the Day',
    url: '/value-of-the-day'
  },
  {
    id: 'Sho2tnr-B5',
    name: 'Top 100 Offers',
    url: '/top-offers'
  },
  {
    id: '5oY7qqg8h1',
    name: 'New Arrivals',
    url: '/new-arrivals',
    submenu: [
      {
        title: 'Cameras',
        url: '/cameras'
      },
      {
        title: 'Consoles',
        url: '/consoles'
      },
      {
        title: 'Smartphones',
        url: '/martphones'
      },
      {
        title: 'Gadgets',
        url: '/gadgets'
      }
    ]
  },
  {
    id: '2q5FyJLJeq',
    name: 'Laptops & Computers',
    url: '/laptops-&-computers',
    submenu: [
      {
        title: 'Xiaomi',
        url: '/xiaomi'
      },
      {
        title: 'Asus',
        url: '/asus'
      },
      {
        title: 'HP',
        url: '/hp'
      },
      {
        title: 'Lenovo',
        url: '/lenovo'
      },
      {
        title: 'Dell',
        url: '/dell'
      },
      {
        title: 'MSI',
        url: '/msi'
      },
      {
        title: 'Acer',
        url: '/acer'
      },
      {
        title: 'Razer',
        url: '/razer'
      },
      {
        title: 'Google',
        url: '/google'
      }
    ]
  },

  {
    id: 'PC8hnmvo29',
    name: 'Cameras & Photography',
    url: '/cameras-&-photography',
    submenu: [
      {
        title: 'Canon',
        url: '/canon'
      },
      {
        title: 'Pentax',
        url: '/pentax'
      },
      {
        title: 'Fujifilm',
        url: '/fujifilm'
      },
      {
        title: 'Kodak',
        url: '/kodak'
      },
      {
        title: 'Leica',
        url: '/leica'
      },
      {
        title: 'Nikon',
        url: '/nikon'
      },
      {
        title: 'Olympus',
        url: '/olympus'
      },
      {
        title: 'Panasonic',
        url: '/panasonic'
      },
      {
        title: 'Sony',
        url: '/sony'
      }
    ]
  },
  {
    id: 'TV0JozbDW7',
    name: 'Smart Phones & Tablets',
    url: '/smartphones-&-tablets',
    submenu: [
      {
        title: 'Apple',
        url: '/apple'
      },
      {
        title: 'Huawei',
        url: '/huawei'
      },
      {
        title: 'OPPO',
        url: '/oppo'
      },
      {
        title: 'Poco',
        url: '/poco'
      },
      {
        title: 'Sumsung',
        url: '/sumsung'
      },
      {
        title: 'Xiaomi',
        url: '/xiaomi'
      },
      {
        title: 'ZTE',
        url: '/zte'
      },
      {
        title: 'Realme',
        url: '/realme'
      },
      {
        title: 'OnePlus',
        url: '/oneplus'
      },
      {
        title: 'Nokia',
        url: '/nokia'
      }
    ]
  },
  {
    id: 'F8wO2CV7Sa',
    name: 'Video Games & Consoles',
    url: '/videogames-&-consoles',
    submenu: [
      {
        title: 'Sony Playstation',
        url: '/playstation'
      },
      {
        title: 'X-BOX Series X',
        url: '/xbox'
      },
      {
        title: 'Nintendo Switch',
        url: '/switch'
      }
    ]
  },
  {
    id: 'aLSiFfFRbf',
    name: 'TV & Audio',
    url: '/tv-&-audio',
    submenu: [
      {
        title: 'Sumsung',
        url: '/samsung'
      },
      {
        title: 'LG',
        url: '/lg'
      },
      {
        title: 'Redme',
        url: '/redme'
      }
    ]
  },
  {
    id: 'nAte0AkIeH',
    name: 'Gadgets',
    url: '/gadgets',
    submenu: [
      {
        title: 'Electric Scooters',
        url: '/scooters'
      },
      { title: 'Thermoses', url: '/thermoses' }
    ]
  },
  {
    id: '-li8h-AUNX',
    name: 'Car Electronic & GPS',
    url: '/car-electronic-&-gps',
    submenu: [
      {
        title: 'Anti-theft systems',
        url: '/anti-theft-systems'
      },
      {
        title: 'Video Recorders',
        url: '/video-recorders'
      },
      {
        title: 'Car monitors',
        url: '/car-monitors'
      },
      {
        title: 'Radar Detectors',
        url: '/radar-detectors'
      },
      {
        title: 'Parking systems',
        url: '/parking-systems'
      }
    ]
  },
  {
    id: '4cjH7Q89Ft',
    name: 'Accesories',
    url: '/accesories'
  }
];

export const heroSlider = [
  {
    id: 'ZH6Zs',
    badge: 'Weekend Discount',
    title: 'Feel - good Shopping',
    subtitle: 'Shop what',
    price: 339.99,
    btn: {
      text: 'Shop Now',
      link: '/'
    },
    bgUrl: '/images/slider-1.jpg'
  },
  {
    id: 'T3nRt',
    badge: 'Weekend Discount',
    title: 'Feel - good Shopping',
    subtitle: 'Shop what',
    price: 339.99,
    btn: {
      text: 'Shop Now',
      link: '/'
    },
    bgUrl: '/images/slider-2.jpg'
  },
  {
    id: '5Vt26',
    badge: 'Weekend Discount',
    title: 'Feel - good Shopping',
    subtitle: 'Shop what',
    price: 339.99,
    btn: {
      text: 'Shop Now',
      link: '/'
    },
    bgUrl: '/images/slider-3.jpg'
  }
];

export const services = [
  {
    icon: RiShipLine,
    title: 'Free Delivery',
    subtitle: 'Free shipping on all order'
  },
  {
    icon: MdSupportAgent,
    title: 'Online Support 24/7',
    subtitle: 'Support online 24 hours a day'
  },
  {
    icon: ImCreditCard,
    title: 'Money Return',
    subtitle: 'Back guarantee under 7 days'
  },
  {
    icon: HiOutlineReceiptPercent,
    title: 'Member Discount',
    subtitle: 'Onevery order over $120.00'
  }
];

export const products = [
  {
    id: '_-YBn',
    title: 'SONY Cyber-shot DSC-RX100 Mark III',
    price: 980,
    discount: 15,
    imgUrl: '/images/products/sony-cyber-shot-dsc-rx100-mark-3.jpg',
    rating: {
      stars: 4,
      votes: 276
    },
    meta: ['bestseller']
  },
  {
    id: 'xn13e',
    title: 'Apple iPhone 14 Pro Max 128GB Space Black',
    price: 1500,
    discount: null,
    imgUrl: '/images/products/apple-iphone-14-pro-max-128gb-space-black.jpg',
    rating: {
      stars: 5,
      votes: 683
    },
    meta: ['bestseller']
  },
  {
    id: 'X8EOR',
    title: 'Sony WH-1000XM5 Black',
    price: 980,
    discount: 15,
    imgUrl: '/images/products/sony-wh-1000xm5.jpg',
    rating: {
      stars: 5,
      votes: 65
    },
    meta: ['bestseller']
  },
  {
    id: '4p8ki',
    title: 'Apple Watch Series 8 GPS 41mm Sport Band',
    price: 500,
    discount: 5,
    imgUrl: '/images/products/apple-watch-series-8-gps-41mm.jpg',
    rating: {
      stars: 3,
      votes: 184
    },
    meta: ['bestseller']
  },
  {
    id: 'xGcUK',
    title: 'Samsung Galaxy Watch 5 Pro 45mm Titanium',
    price: 400,
    discount: 20,
    imgUrl: '/images/products/samsung-galaxy-watch-5-pro-titanium.jpg',
    rating: {
      stars: 4,
      votes: 231
    },
    meta: ['for home', 'bestseller']
  },
  {
    id: 'vX9FV',
    title: 'Microsoft Xbox Elite Wireless Controller Series 2',
    price: 180,
    discount: null,
    imgUrl: '/images/products/microsoft-xbox-elite-wireless-controller-series-2.jpg',
    rating: {
      stars: 5,
      votes: 18
    },
    meta: ['for home']
  },
  {
    id: 'rLJZM',
    title: 'Baseus Blade 100W 20000mAh',
    price: 115,
    discount: null,
    imgUrl: '/images/products/baseus-blade-100w-20000mah.jpg',
    rating: {
      stars: 3,
      votes: 599
    },
    meta: ['for home']
  },
  {
    id: '6O4sj',
    title: 'Royalty Line RL-2100 7.5L Red',
    price: 117,
    discount: 8,
    imgUrl: '/images/products/royalty-line-rl-2100.jpg',
    rating: {
      stars: 5,
      votes: 90
    },
    meta: ['for home']
  },
  {
    id: 'glxYa',
    title: 'RZTK SONIC PRO Black',
    price: 25,
    discount: 3,
    imgUrl: '/images/products/rztk-sonic-pro-black.jpg',
    rating: {
      stars: 5,
      votes: 24
    },
    meta: ['for home']
  },
  {
    id: '7A3_K',
    title: 'Xiaomi Watch S1 Active Moon White',
    price: 162,
    discount: null,
    imgUrl: '/images/products/xiaomi-watch-s1-active.jpg',
    rating: {
      stars: 5,
      votes: 118
    },
    meta: ['for home']
  },
  {
    id: 'BUODu',
    title: '8Bitdo Sn30 Pro+ Bluetooth Gamepad',
    price: 46,
    discount: null,
    imgUrl: '/images/products/8bitdo-sn30-pro-bluetooth.jpg',
    rating: {
      stars: 3,
      votes: 55
    },
    meta: ['for home']
  },
  {
    id: 'APEjh',
    title: 'Acer 12in1 Type C dongle',
    price: 95,
    discount: 30,
    imgUrl: '/images/products/acer-12in1-type-c-dongle.jpg',
    rating: {
      stars: 5,
      votes: 76
    },
    meta: ['for home']
  },
  {
    id: 'QHBNi',
    title: 'Apple iPad Air 10.9" M1 Wi-Fi 64GB Space Gray',
    price: 750,
    discount: null,
    imgUrl: '/images/products/apple-ipad-air-10-m1.jpg',
    rating: {
      stars: 5,
      votes: 200
    },
    meta: ['for home']
  }
];

export const multipleBanner = [
  {
    id: 'Sxm6i',
    title: 'best game',
    subtitle: 'devices',
    price: 89.99,
    url: '/',
    backgroundColor: '#ffcc3a',
    backgroundImage: '/images/banners/banner-1.png'
  },
  {
    id: '0eoju',
    title: 'newest',
    subtitle: 'technic',
    price: 34.99,
    url: '/',
    backgroundColor: '#155aa2',
    backgroundImage: '/images/banners/banner-2.png'
  },
  {
    id: 'sVk8y',
    title: 'audio',
    subtitle: 'systems',
    price: 34.99,
    url: '/',
    backgroundColor: '#ee6aed',
    backgroundImage: '/images/banners/banner-3.png'
  }
];
