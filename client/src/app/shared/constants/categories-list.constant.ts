import { Category } from '@shared/models';

export const CATEGORIES_LIST: Category[] = [
  {
    label: 'Shoes',
    name: 'shoes',
    icon: 'shoes',
    subcategories: [
      {
        label: 'Sneakers',
        name: 'sneakers',
        icon: 'shoes_sneakers',
      },
      {
        label: 'Winter Shoes',
        name: 'winterShoes',
        icon: 'shoes_winter',
      },
      {
        label: 'Sandals',
        name: 'sandals',
        icon: 'shoes_sandals',
      },
    ],
  },
  {
    label: 'Bags',
    name: 'bags',
    icon: 'bag',
    subcategories: [
      {
        label: 'Handbags',
        name: 'handbags',
        icon: 'bags_handbag',
      },
      {
        label: 'Purses',
        name: 'purses',
        icon: 'bags_purse',
      },
      {
        label: 'Backpacks',
        name: 'backpacks',
        icon: 'bags_backpack',
      },
    ],
  },
  {
    label: 'Belts',
    name: 'belts',
    icon: 'belt',
    subcategories: [
      {
        label: 'Casual',
        name: 'casualBelts',
        icon: 'belts_casual',
      },
      {
        label: 'Leather',
        name: 'leatherBelts',
        icon: 'belts_leather',
      },
      {
        label: 'Braided',
        name: 'braidedBelts',
        icon: 'belts_braided',
      },
    ],
  },
  {
    label: 'Sunglasses',
    name: 'sunglasses',
    icon: 'sunglasses',
    subcategories: [
      {
        label: 'Rounded',
        name: 'roundedSunglasses',
        icon: 'sunglasses_rounded',
      },
      {
        label: 'Aviator',
        name: 'aviatorSunglasses',
        icon: 'sunglasses_aviator',
      },
      {
        label: 'Square',
        name: 'squareSunglasses',
        icon: 'sunglasses_square',
      },
    ],
  },
];
