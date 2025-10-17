const products = [
  {
    id: 1,
    name: 'Crystal Wall Light',
    href: '#',
    price: '$120',
    imageSrc: 'https://image.made-in-china.com/2f0j00CfpUzVugaBcJ/Modern-Crystal-Home-Wall-Lights-Hotel-Corridor-Decoration.webp',
    imageAlt: 'Modern crystal wall light for home and hotel decor.',
  },
  {
    id: 2,
    name: 'Luxury Table Lamp',
    href: '#',
    price: '$95',
    imageSrc: 'https://m.media-amazon.com/images/I/51JatIvaQdL._UF1000,1000_QL80_.jpg',
    imageAlt: 'Elegant bedside table lamp with soft light.',
  },
  {
    id: 3,
    name: 'LED Ceiling Chandelier',
    href: '#',
    price: '$180',
    imageSrc: 'https://m.media-amazon.com/images/I/71JDR3kxzDL._AC_SL1500_.jpg',
    imageAlt: 'Modern LED ceiling chandelier with gold finish.',
  },
  {
    id: 4,
    name: 'Wall Frame Set',
    href: '#',
    price: '$75',
    imageSrc: 'https://whitespastels.com/cdn/shop/products/12.png?v=1665093963',
    imageAlt: 'Artistic wall frame set for living room.',
  },
  {
    id: 5,
    name: 'Wooden Flower Vase',
    href: '#',
    price: '$65',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJXPyT6H8INDvSXIRWXMbp5e391Q1VcAZBw&s',
    imageAlt: 'Handcrafted wooden flower vase.',
  },
  {
    id: 6,
    name: 'LED Mirror Light',
    href: '#',
    price: '$110',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8lim_I1Fk_biVAgS-4g3OLx4Ke6Lqy2rGw&s',
    imageAlt: 'Stylish LED mirror light for bathroom and bedroom.',
  },
  {
    id: 7,
    name: 'Decorative Clock',
    href: '#',
    price: '$85',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRs_7e5rLr9NmBL9pfV2k4n7TKjYfLd5HTng&s',
    imageAlt: 'Luxury decorative wall clock for interior design.',
  },
  {
    id: 8,
    name: 'Cushion Cover Set',
    href: '#',
    price: '$45',
    imageSrc: 'https://m.media-amazon.com/images/I/81QxwHY80ZL._UF1000,1000_QL80_.jpg',
    imageAlt: 'Soft cushion cover set for home decoration.',
  },
]

export default function Decor() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
