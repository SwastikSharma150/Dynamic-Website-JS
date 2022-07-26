/*
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier
 *  - title: String, a short name for the product
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs
 * 
 */

window.products = 
[
  // Apparels - Men
  {
    id: "11300",
    title: "Plain Round Neck T-shirt",
    description:
      "Choose among a wide range of selection of Plain T-shirts provided by 'the Apparel store'. These plain round necked T-shirts are available in 7 different colours (subject to availability) all at the same price.",
    price: 1500,
    discontinued: false,
    categories: ["P1", "P2", "P3"]
  },

  {
    id: "11301",
    title: "Plain V Neck T-shirt",
    description:
      "Choose among a wide range of selection of Plain T-shirts provided by 'the Apparel store' which are V-necked. T-shirts are available in 7 different colours (subject to availability) all at the same price.",
    price: 1500,
    discontinued: true,
    categories: ["P1", "P2", "P3"]
  },

  {
    id: "11302",
    title: "T-Shirt Striped",
    description:
      "Casual striped shirt made of premium imported cotton, excellent fitting available in all sizes from small to extra large (subject to availability).",
    price: 1999,
    discontinued: false,
    categories: ["P1"]
  },

  {
    id: "11303",
    title: "Checked Shirt",
    description:
      "Modern checked shirt available in 3 different colour combinations, the shirt provides a smart and casual look with a attractively designed checked pattern.",
    price: 3200,
    discontinued: false,
    categories: ["P1"]
  },

  {
    id: "11304",
    title: "Track Pants",
    description:
      "Comfortable track pants available in 4 dark shades, designed for comfortable running, walking and jogging.",
    price: 3000,
    discontinued: false,
    categories: ["P1"]
  },

  {
    id: "11305",
    title: "Blue Jeans",
    description:
      "One can never go wrong with a pair of classic blue jeans - they simply go along with everything and the Apparel's store brings them at an affordable price.",
    price: 2600,
    discontinued: false,
    categories: ["P1"]
  },

  {
    id: "11306",
    title: "Jogger Pants",
    description:
      "Comfortable jogger pants for men - available in cargo design and are perfect for a casual gym attire.",
    price: 2299,
    discontinued: false,
    categories: ["P1"]
  },

  {
    id: "11307",
    title: "Black Trousers",
    description:
      "A pair of black trousers (currently on sale), made up of fine fabric which will keep you warm and comfortable.",
    price: 2400,
    discontinued: false,
    categories: ["P1"]
  },

  {
    id: "11308",
    title: "Slim-fit grey jeans",
    description:
      "Skinny grey jeans which come with a slim-fit look are now available in sizes ranging from medium to extra large.",
    price: 2899,
    discontinued: false,
    categories: ["P1"]
  },

  {
    id: "11309",
    title: "Classic shorts",
    description:
      "Classic shorts for men available in 4 different colours: red, orange, black and grey.",
    price: 1800,
    discontinued: false,
    categories: ["P1"]
  },

  {
    id: "11310",
    title: "Premium checked shirt",
    description:
      "Checked shirt made from premium fabric imported from the finest traders across the ocean, one can never go wring with this fit which is the finest we have to offer",
    price: 4500,
    discontinued: true,
    categories: ["P1"]
  },

  // Apparels - Women

  {
    id: "11502",
    title: "Indian kurti",
    description:
      "Authentic handmade kurti imported directly from the indian sub-continent at an affordable price (shipping charges extra)",
    price: 3250,
    discontinued: false,
    categories: ["P2"]
  },

  {
    id: "11503",
    title: "Formal shirt",
    description:
      "Formal shirt for women available in 7 different light coloured shades ranging from sizes - small to large",
    price: 2000,
    discontinued: false,
    categories: ["P2"]
  },

  {
    id: "11504",
    title: "Casual Pink T-Shirt",
    description:
      "T-shirt coloured with a light shade of pink with a comfortable fitting for casual wear at an affordable price.",
    price: 1500,
    discontinued: false,
    categories: ["P2"]
  },

  {
    id: "11505",
    title: "Polka dot skirt",
    description:
      "The Apparel store's most in-demand item under the women's category is now back in stock - white polka dots skirt with a fine finishing at the borders.",
    price: 3499,
    discontinued: false,
    categories: ["P2"]
  },

  {
    id: "11506",
    title: "Denim Jacket",
    description:
      "Stylish denim - jean styled sleeveless jacket which is perfect for party wear is available in sizes ranging from - medium to large.",
    price: 2500,
    discontinued: false,
    categories: ["P2"]
  },

  {
    id: "11507",
    title: "Slim Fit Jeans",
    description:
      "Blue slim fit jeans available at an affordable price which provide a casual yet smart look when worn along with a shirt or any matching top.",
    price: 2899,
    discontinued: false,
    categories: ["P2"]
  },

  {
    id: "11508",
    title: "White Silk Top",
    description:
      "Stylish white silk top is now back in stock with sizes available from small to extra large and is now available across all store branches and locations.",
    price: 3000,
    discontinued: false,
    categories: ["P2"]
  },

  {
    id: "11509",
    title: "Casual Shorts",
    description:
      "Casual home-wear shorts for women now available in 7 different colours, made with an elastic band and comfortable fabric",
    price: 1600,
    discontinued: false,
    categories: ["P2"]
  },

  {
    id: "11510",
    title: "Premium Black Slim Fit Jeans",
    description:
      "This product is a mutual collaboration between the Apparels store and the Englishmen stitching, we introduce the finest slim fit jeans with the best material we have to offer with the promise of comfort.",
    price: 4600,
    discontinued: true,
    categories: ["P2"]
  },

  // Apparels - Children

  {
    id: "11702",
    title: "Kids Casual Shirt",
    description:
      "Casual shirt made with comfortable material available in bright colours for kids ranging from ages: 3 to 6",
    price: 1000,
    discontinued: false,
    categories: ["P3"]
  },

  {
    id: "11703",
    title: "Casual Shorts",
    description:
      "Casual shorts made for kids ranging from ages: 8 - 12 for home-wear purposes and is available in 7 different colours (subject to availability).",
    price: 1200,
    discontinued: false,
    categories: ["P3"]
  },

  {
    id: "11704",
    title: "Kids cap",
    description: "Stylish kids sports cap which can go along with any attire.",
    price: 800,
    discontinued: false,
    categories: ["P3"]
  },

  {
    id: "11705",
    title: "Sleeveless T-Shirt",
    description:
      "Comfortable Sleeveless T-shirt for kids which goes well with their summer attire and is available in sizes ranging from small to large.",
    price: 1800,
    discontinued: false,
    categories: ["P3"]
  },

  {
    id: "11706",
    title: "Party-wear Jeans",
    description:
      "Special Party-wear jeans designed for kids ranging from ages: 8 - 12, available in black, grey and dark blue colour.",
    price: 1899,
    discontinued: false,
    categories: ["P3"]
  },

  {
    id: "11707",
    title: "Premium Brown Trousers",
    description:
      "Dark brown trousers made from the most expensive fabric in order to provide kids with a comfortable experience, now available in 3 kids sizes: small, medium and large",
    price: 2899,
    discontinued: false,
    categories: ["P3"]
  },

  {
    id: "11708",
    title: "Pokemon T-Shirt",
    description:
      "Your child's favourite cartoon show designed over light grey coloured shade which brings out a beautifully crafted comfortable t-shirt, made for kids ranging from ages: 12 - 15.",
    price: 1899,
    discontinued: false,
    categories: ["P3"]
  }
];
