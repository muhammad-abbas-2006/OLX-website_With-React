const products = [
  {
    id: 1,
    name: 'White Cotton Silk Pathani Suit',
    href: '#',
    price: '$55',
    imageSrc: 'https://www.mashalcouture.com/cdn/shop/files/extraordinary_white_plain_cotton_silk_matching_father_son_pathani_suit__1649071222fs_6687_wht_3_8cb8b058-eaad-449e-9830-3ae94dbe44a4.jpg?v=1698068052',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Blue Boys Shalwar Kameez',
    href: '#',
    price: '$42',
    imageSrc: 'https://ca.junaidjamshed.com/cdn/shop/files/40221-1_1_854f47a7-4a6c-4cb3-828e-fd3fd84079d0_2048x.jpg?v=1755945723',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Charcoal Grey 3-Piece Suit',
    href: '#',
    price: '$65',
    imageSrc: 'https://www.muraqshman.com/cdn/shop/products/all-charcoal-grey-3pc-set-938881.jpg?v=1689240495&width=1314',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Kids 3-Piece Shalwar Kameez with Waistcoat',
    href: '#',
    price: '$58',
    imageSrc: 'https://sanaullastore.com/cdn/shop/files/stylish-garments-kids-3-piece-shalwar-kameez-waistcoat-suit-k-3261_1.jpg?v=1756489735&width=1080',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Beige Shalwar Kameez',
    href: '#',
    price: '$49',
    imageSrc: 'https://au.junaidjamshed.com/cdn/shop/files/24-1951_1_2048x.jpg?v=1755439775',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 6,
    name: 'Olive Green Kids Kurta',
    href: '#',
    price: '$39',
    imageSrc: 'https://ca.junaidjamshed.com/cdn/shop/files/25-1714_2_2048x.jpg?v=1755500000',
    imageAlt: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
  },
  {
    id: 7,
    name: 'Black Formal Kurta',
    href: '#',
    price: '$44',
    imageSrc: 'https://www.isloou.com/cdn/shop/products/43043_1.jpg?v=1674622848',
    imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
  },
  {
    id: 8,
    name: 'Printed T-Shirt for Boys',
    href: '#',
    price: '$25',
    imageSrc: 'https://cdn.shopify.com/s/files/1/2337/7003/files/media_image-42203a088273432e85a2c4ceef8671b9_4392f2f9-2e5c-4d6e-9f6e-7af2681b60de.jpg?v=1757943061&width=300',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
]

export default function Kids() {
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
