const products = [
  {
    id: 1,
    name: 'Ceramic Dinner Set',
    href: '#',
    price: '$120',
    imageSrc: 'https://m.media-amazon.com/images/I/71vqQksJ3IL._AC_SL1500_.jpg',
    imageAlt: 'Elegant white ceramic dinner set with golden rims.',
  },
  {
    id: 2,
    name: 'Stainless Steel Kettle',
    href: '#',
    price: '$45',
    imageSrc: 'https://m.media-amazon.com/images/I/81rhjesz5zL.jpg',
    imageAlt: 'Modern stainless steel kettle with handle and spout.',
  },
  {
    id: 3,
    name: 'Non-Stick Frying Pan',
    href: '#',
    price: '$60',
    imageSrc: 'https://royalhouseware.com/cdn/shop/files/WhatsAppImage2024-07-03at12.20.52PM_2.jpg?v=1719992261',
    imageAlt: 'High-quality non-stick frying pan with soft grip handle.',
  },
  {
    id: 4,
    name: 'Glass Storage Jars Set',
    href: '#',
    price: '$55',
    imageSrc: 'https://img.drz.lazcdn.com/static/pk/p/dae8ca8aeb35c33a5ff7e14997baa740.jpg_720x720q80.jpg',
    imageAlt: 'Transparent glass jars for kitchen storage with wooden lids.',
  },
  {
    id: 5,
    name: 'Marble Cutting Board',
    href: '#',
    price: '$40',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdTkljkDrWR_4cvh_7OaxTuZBN58u65zLXUw&s',
    imageAlt: 'Elegant marble cutting board with smooth surface.',
  },
  {
    id: 6,
    name: 'Wooden Spoon Set',
    href: '#',
    price: '$25',
    imageSrc: 'https://www.claycraftindia.com/cdn/shop/files/IMG_3347.jpg?v=1697082388',
    imageAlt: 'Set of handcrafted wooden spoons for cooking and serving.',
  },
  {
    id: 7,
    name: 'Ceramic Bowl Set',
    href: '#',
    price: '$48',
    imageSrc: 'https://mycept.pk/cdn/shop/products/SpoonRestB_1445x.jpg?v=1646388104',
    imageAlt: 'Set of colorful ceramic bowls perfect for serving meals.',
  },
  {
    id: 8,
    name: 'Kitchen Towel Pack',
    href: '#',
    price: '$20',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsuelKq-M6GoCalU4ykck0CZhbeZ1yovvSVBXzITCheQZy88VWX_8VlN1UwMq0NwA20c&usqp=CAU',
    imageAlt: 'Soft cotton kitchen towels in assorted colors.',
  },
]

export default function Kitchen() {
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
