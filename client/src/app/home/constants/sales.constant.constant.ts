import { SALES } from '../models/sales.interface';

export const CURRENT_SALES: SALES[] = [
  {
    image:
      'https://www.dexigner.com/images/article/25305/Adidas_3D_Runner_01.jpg',
    text: 'New Arrivals',
    saleEnd: new Date().getTime() + 3200000,
    products: [
      {
        name: 'Ultraboost 4.0 DNA shoes',
        price: 219.49,
        image:
          'https://assets.adidas.com/images/w_600,f_auto,q_auto/180ecdd1734e482f88d3ae83017746b8_9366/Ultraboost_1.0_Mississippi_State_White_HQ5883_01_standard.jpg',
      },
      {
        name: 'Ultraboost 4.0 DNA shoes',
        price: 245.19,
        image:
          'https://assets.adidas.com/images/w_600,f_auto,q_auto/5370778f2e99474fbf2fac550092a0b6_9366/Ultraboost_4.0_DNA_Shoes_Grey_FY9319_01_standard.jpg',
      },
      {
        name: 'Ultraboost 4.0 DNA shoes',
        price: 211.99,
        image:
          'https://assets.adidas.com/images/w_600,f_auto,q_auto/5898799b135648bcaf35ae28011c172b_9366/Ultraboost_5_DNA_Running_Lifestyle_Shoes_Bialy_GV8740_01_standard.jpg',
      },
    ],
  },
  {
    image:
      'https://wwd.com/wp-content/uploads/2022/06/Lookbook_016.jpg?crop=0px%2C498px%2C4478px%2C2509px&resize=1000%2C563',
    text: 'Essentials',
    saleEnd: new Date().getTime() + 2000,
    products: [
      {
        name: 'Gray',
        price: 111,
        image:
          'https://ae01.alicdn.com/kf/Sa641936c52b5456e93a0ad728ed99265k.jpg_640x640Q90.jpg_.webp',
      },
      {
        name: 'Black',
        price: 100,
        image:
          'https://lzd-img-global.slatic.net/g/p/93dcb69c828493176164e9a3c40845e5.jpg_720x720q80.jpg_.webp',
      },
      {
        name: 'Yellow',
        price: 111,
        image:
          'https://lzd-img-global.slatic.net/g/p/4635b5a9cf3afadc0f5d4a54324b471c.jpg_720x720q80.jpg_.webp',
      },
    ],
  },
  {
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-running-shoes-1648630488.jpg',
    text: 'Sale For Shoes Up To 40%',
    saleEnd: new Date().getTime() + 42000000,
    products: [
      {
        name: 'Terrex Free Hiker cold.rdy hiking boots',
        price: 280,
        image:
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/56b9a8d1f8dc4ab1a5d0ae6f018ab8bf_9366/Terrex_Free_Hiker_COLD.RDY_Hiking_Boots_Green_GY6757_01_standard.jpg',
      },
      {
        name: 'Ozweego Shoes',
        price: 120.99,
        image:
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/26957f977ecf4119879caa7600ff0f1b_9366/OZWEEGO_Shoes_White_EE6464_01_standard.jpg',
      },
      {
        name: 'Terrex Snowpitch cold.rdy hiking boots',
        price: 340,
        image:
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/411a79d56f1145d4aa3babd6012e29e5_9366/Terrex_Snowpitch_COLD.RDY_Hiking_Shoes_Brown_FV7960_01_standard.jpg',
      },
    ],
  },
  {
    image:
      'https://www.si.com/.image/t_share/MTg0MDk3Mjk5NTUzNTkzMTcz/icee-cc.jpg',
    text: 'Adidas Training',
    saleEnd: new Date().getTime() + 6110000,
    products: [
      {
        name: 'Train Icon',
        price: 45.99,
        image:
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/724e1abfc81f47d2ba23af3400f8014c_9366/Train_Icons_3-Stripes_Training_Pants_Blue_IC5490_01_laydown.jpg',
      },
      {
        name: 'Adicolor',
        price: 45.99,
        image:
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c1722ea5615b400ba8e0ae9000b0e2a5_9366/ADICOLOR_CLASSICS_PRIMEBLUE_SST_TRACK_PANTS_Red_HK7352_01_laydown.jpg',
      },
      {
        name: 'Tiro Pants',
        price: 45.99,
        image:
          'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/2bf51155977740d580f9aefa00b4eec1_9366/Tiro_Pants_Purple_HS1034_01_laydown.jpg',
      },
    ],
  },
];
