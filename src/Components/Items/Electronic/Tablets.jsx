const products = [
  {
    id: 1,
    name: 'Samsung Galaxy A15',
    href: '#',
    price: '$165',
    imageSrc: 'https://myshop.pk/pub/media/catalog/product/cache/badc1d10053babad93ba2ef2941284a4/s/a/samsung_myshop-pk-1_8.jpg',
    imageAlt: 'Samsung Galaxy A15 smartphone image.',
  },
  {
    id: 2,
    name: 'Apple iPad Air 5',
    href: '#',
    price: '$550',
    imageSrc: 'https://www.interdiscount.ch/static-shops/products/260/dd8dfa2fc65f33d946f4a62dd1cc21de38ec.jpg',
    imageAlt: 'Apple iPad Air 5 tablet image.',
  },
  {
    id: 3,
    name: 'Lenovo Tab M10',
    href: '#',
    price: '$220',
    imageSrc: 'https://myshop.pk/pub/media/catalog/product/cache/badc1d10053babad93ba2ef2941284a4/l/e/lenovo_myshop-pk-1_4_1.jpg',
    imageAlt: 'Lenovo Tab M10 image.',
  },
  {
    id: 4,
    name: 'Xiaomi Pad 6',
    href: '#',
    price: '$310',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-V-SMHfTgfecLKtLgyRS8cGENMcPMOrkkH1SNFAzR-lveqIB1-1CzKfyHOJhHepidlg&usqp=CAU',
    imageAlt: 'Xiaomi Pad 6 with stylus.',
  },
  {
    id: 5,
    name: 'Huawei MatePad 11',
    href: '#',
    price: '$385',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn8KVi9tAscM36dEmoiWGSJG7OsEh9TvYOiQ&s',
    imageAlt: 'Huawei MatePad 11 image.',
  },
  {
    id: 6,
    name: 'Samsung Galaxy Tab A9',
    href: '#',
    price: '$205',
    imageSrc: 'https://images.priceoye.pk/samsung-galaxy-tab-a9-x110-pakistan-priceoye-gqv6u-500x500.webp',
    imageAlt: 'Samsung Galaxy Tab A9 image.',
  },
  {
    id: 7,
    name: 'Samsung Galaxy Tab S6 Lite',
    href: '#',
    price: '$340',
    imageSrc: 'https://images.priceoye.pk/samsung-galaxy-tab-s6-lite-10-4-inches-p610-pakistan-priceoye-8g3u9.jpg',
    imageAlt: 'Samsung Galaxy Tab S6 Lite image.',
  },
  {
    id: 8,
    name: 'Realme Pad X',
    href: '#',
    price: '$245',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUjUQbiD2FS6LO23vxyV-VvysffPf49HOkWFNyuvpEuprmqj9JYGPv319_LZWJ5kuwrjk&usqp=CAU',
    imageAlt: 'Realme Pad X tablet image.',
  },
]

export default function Tablets() {
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
