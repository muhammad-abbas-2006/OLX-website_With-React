const products = [
  {
    id: 1,
    name: 'Red Embroidered Formal Dress',
    href: '#',
    price: '$85',
    imageSrc: 'https://shehrnaz.com/wp-content/uploads/2021/02/Untitled-1-0015-3E8A0717-7459302-shehrnaz.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Peach Embroidered Lawn Suit',
    href: '#',
    price: '$72',
    imageSrc: 'https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/08082023/hrw06823_1689685074-694876222976.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'White Printed Cotton Kurti',
    href: '#',
    price: '$49',
    imageSrc: 'https://mcprod.aarong.com/media/catalog/product/0/4/0430000121080_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Black Floral Maxi Dress',
    href: '#',
    price: '$65',
    imageSrc: 'https://i.etsystatic.com/17651301/r/il/9a9d5c/1512418548/il_fullxfull.1512418548_dbs1.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Pink Designer Party Dress',
    href: '#',
    price: '$92',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCeNmyLOm65UeQCaNJgTpJttwXAwDgFQX1BEQtHBYDY4wXQ8UzZAJpCeMZc0c-uEXVrTA&usqp=CAU',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 6,
    name: 'Pista Green Embroidered Kameez Set',
    href: '#',
    price: '$79',
    imageSrc: 'https://hoortex.com/cdn/shop/files/Pista_Color_Pakistani_Salwar_Kameez_With_Heavy_Embroidery_Frill_Work_Dupatta_4.jpg?v=1700557929&width=600',
    imageAlt: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
  },
  {
    id: 7,
    name: 'Lilac Embroidered Lawn Suit',
    href: '#',
    price: '$83',
    imageSrc: 'https://umarposhak.pk/cdn/shop/files/Dastoor_Embroidered_Lawn_Collection_2024_By_Farasha_DAINTY_LILAC_4274040b-e0e0-4341-9637-65e29943cbc2.webp?v=1741457495',
    imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
  },
  {
    id: 8,
    name: 'Blue Chiffon Evening Dress',
    href: '#',
    price: '$110',
    imageSrc: 'https://m.media-amazon.com/images/I/71o5sR5AE-L._AC_SL1500_.jpg',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
]

export default function Women() {
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
