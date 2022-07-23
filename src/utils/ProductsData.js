const products = [
  {
    id: '1',
    title: 'Cybele Smooth N`Wear Powder Blush Bois De Rose 04 3.7gm',
    price: 70,
    rating: 5,
    specification: [
      'Colour:	Bois De Rose',
      'Brand:	Cybele',
      'Finish type: Natural',
      'Skin tone: All',
      'Item weight:	3.7 Grams',
      'Skin Type: Normal',
      'Made in USA',
      'Material: 100% Nauture',
    ],
    detail: 'Cybele Smooth N`Wear Powder Blush Bois De Rose 04 3.7gm',
    image:
      'https://m.media-amazon.com/images/I/51z0FgsmvhL._AC_UL480_FMwebp_QL65_.jpg',
    type: 'Makeup',
  },

  {
    id: '2',
    title: 'NIVEA Soft Moisturizing Cream Refreshingly Soft Jar 100ml',
    price: 60,
    rating: 4,
    specification: [
      'Special ingredients:	Jojoba Oil',
      'Brand:	NIVEA',
      'Skin type:	All',
      'Skin tone:	All Skin Type',
      'Item weight:	98 Grams',
      'Item volume:	100 Milliliters',
      'Item dimensions: LxWxH',
    ],
    detail:
      'FOR DAILY USE: nourishing and intensive moisturizing formula ideal to be used all over the face, hands and body',

    image:
      'https://m.media-amazon.com/images/I/71mAOJo4jbL._AC_UL480_FMwebp_QL65_.jpg',
    type: 'Skin Care',
  },
  {
    id: '3',
    title:
      'CLEAN & CLEAR, Daily Facial Wash, Morning Energy, Shine Control, 150ml',
    price: 55,
    rating: 3,
    specification: [
      'Formulated with lemongrass and fruit extracts',
      'Oil-free',
      'For shine-free and clear skin all day',
      'Can be used everyday',
    ],
    detail: 'Daily Facial Wash, Morning Energy, Shine Control.',
    image: 'https://m.media-amazon.com/images/I/61ubB2Cx26S._AC_SL1500_.jpg',
    type: 'Face Cleansers',
  },
  {
    id: '4',
    title: "L'Oréal Paris Elvive Total Repair 5 Oil Replacement, 300 ml",
    price: 100,
    rating: 4,
    specification: [
      "Brand:	L'Oréal Paris",
      'Item form:	Oil',
      'Hair type:	Hair Treatment',
      'Liquid volume:	300 Milliliters',
    ],
    detail: 'Type: Hair Treatment',
    image:
      'https://m.media-amazon.com/images/I/61t5KeAJaeL._AC_UL480_FMwebp_QL65_.jpg',
    type: 'Hair Care',
  },
  {
    id: '5',
    title:
      'Dr Rashel Hyaluronic Acid Instant Hydration Primer Serum for Anti Aging & Dark Spots',
    price: 130,
    rating: 5,
    specification: ['Make your skin white', 'Anti aging', 'Dark spot remover'],
    detail:
      'Dr Rashel Hyaluronic Acid Instant Hydration Primer Serum for Anti Aging & Dark Spots.',
    image:
      'https://m.media-amazon.com/images/I/41jxKyM7muS._AC_UL480_FMwebp_QL65_.jpg',
    type: 'Face Care',
  },
  {
    id: '1234',
    title: 'Eva Makeup Remover Collagen For Eyes and Lips',
    price: 25,
    rating: 4,
    specification: [
      'A unique dual action makeup remover that  clears delicate skin of waterproof makeup while conditioning eyelashes and surrounding skin leaving them healthy and hydrated. Natural marine Collagen supports your skin by improving its elasticity.',
    ],
    detail: 'Eva Makeup Remover Collagen For Eyes and Lips.',
    image:
      'https://m.media-amazon.com/images/I/71rmuf6SlGL._AC_UL480_FMwebp_QL65_.jpg',
    type: 'Face Cleansers',
  },
]

const headerItems = [
  'All',
  'Skin Care',
  'Makeup',
  'Face Care',
  'Hair Care',
  'Face Cleansers',
]

export { products, headerItems }