var beautyProducts = {
  // ----------------------------- Skin Care -----------------------------
  skinCare: {
    brands: {
      vaseline: {
        lotion: {
          products: {
            product1: {
              name: "Vaseline Intensive Care Lotion",
              src: "https://assets.unileversolutions.com/v1/33710715.png",
              volume: "100ml",
              price: 100,
              description:
                "Deep moisturizing lotion suitable for dry and normal skin.",
            },
          },
        },
      },
      nivea: {
        lotion: {
          products: {
            product1: {
              name: "Nivea Soft Moisturizing Cream",
              src: "https://img.nivea.com/-/media/miscellaneous/media-center-items/0/1/9/1231c094c83d46b0afd2689a75b32fdd-web_1010x1180_transparent_png.png",
              volume: "100ml",
              price: 150,
              description:
                "Lightweight moisturizing cream perfect for everyday use.",
            },
          },
        },
      },
    },
  },

  // ----------------------------- Hair Care -----------------------------
  hairCare: {
    brands: {
      sunsilk: {
        shampoo: {
          products: {
            product1: {
              name: "Sunsilk Pink Shampoo",
              src: "https://assets.unileversolutions.com/v1/sunsilk-pink.png",
              volume: "180ml",
              price: 250,
              description: "Smooth and manageable shampoo for everyday use.",
            },
          },
        },
      },

      pantene: {
        shampoo: {
          products: {
            product1: {
              name: "Pantene Smooth & Strong Shampoo",
              src: "https://i.postimg.cc/3rQgKg07/pantene.png",
              volume: "200ml",
              price: 300,
              description: "Strengthens hair and reduces breakage.",
            },
          },
        },
        conditioner: {
          products: {
            product1: {
              name: "Pantene Pro-V Conditioner",
              src: "https://i.postimg.cc/fTVQ4cdf/pantene-conditioner.png",
              volume: "180ml",
              price: 280,
              description: "Deep conditioner for smooth and silky hair.",
            },
          },
        },
      },
    },
  },

  // ----------------------------- Makeup -----------------------------
  makeup: {
    brands: {
      maybelline: {
        lipstick: {
          products: {
            product1: {
              name: "Maybelline SuperStay Matte Ink",
              src: "https://i.postimg.cc/FH4fJPWV/maybelline-lipstick.png",
              price: 1700,
              description: "Long-lasting matte lipstick with bold pigment.",
            },
          },
        },
        foundation: {
          products: {
            product1: {
              name: "Fit Me Foundation",
              src: "https://i.postimg.cc/0yWg6CQq/fitme.png",
              price: 1600,
              description: "Natural matte foundation with buildable coverage.",
            },
          },
        },
      },

      hudabeauty: {
        palette: {
          products: {
            product1: {
              name: "Huda Beauty Rose Gold Palette",
              src: "https://i.postimg.cc/Jzps7LWc/huda-palette.png",
              price: 8500,
              description: "Highly pigmented eyeshadow palette with 18 shades.",
            },
          },
        },
      },
    },
  },

  // ----------------------------- Nail Art -----------------------------
  nailArt: {
    brands: {
      rivaj: {
        nailPolish: {
          products: {
            product1: {
              name: "Rivaj Nail Polish – Ruby Red",
              src: "https://i.postimg.cc/dtLbDD7m/nailpolish.png",
              price: 250,
              description: "Long-lasting glossy nail color.",
            },
          },
        },
      },

      goldenRose: {
        nailPolish: {
          products: {
            product1: {
              name: "Golden Rose Matte Nail Lacquer",
              src: "https://i.postimg.cc/7Zs8HNmR/goldenrose.png",
              price: 350,
              description: "Matte finish nail polish with rich color.",
            },
          },
        },
      },
    },
  },

  // ----------------------------- Fragrances -----------------------------
  fragrances: {
    brands: {
      axe: {
        bodySpray: {
          products: {
            product1: {
              name: "Axe Dark Temptation Body Spray",
              src: "https://i.postimg.cc/L6m4wbtb/axe.png",
              price: 450,
              description: "Warm chocolate-inspired masculine fragrance.",
            },
          },
        },
      },

      fogg: {
        perfume: {
          products: {
            product1: {
              name: "Fogg Master Oak Perfume",
              src: "https://i.postimg.cc/J0xJfXpD/fogg.png",
              price: 750,
              description: "Strong long-lasting woody fragrance.",
            },
          },
        },
      },
    },
  },
};

console.log(beautyProducts.skinCare["Vaseline Products"]);
var user = "vaseline";
// for (key in beautyProducts) {

// console.log(beautyProducts.skinCare["Vaseline Products"].lotion);
//     // console.log(key.skinCare["Vaseline Products"]);
// }
for (products in beautyProducts) {
  console.log(products);
  for (brands in beautyProducts[products]) {
    console.log(brands);
    for (items in beautyProducts[products][brands]) {
      console.log(beautyProducts[products][brands]);
    }
  }
}
