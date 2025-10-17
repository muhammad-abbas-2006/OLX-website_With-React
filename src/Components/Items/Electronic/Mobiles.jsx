const products = [
  {
    id: 1,
    name: 'iPhone 17 Pro Max',
    href: '#',
    price: '$1,499',
    imageSrc: 'https://shop.switch.com.my/cdn/shop/files/iPhone_17_Pro_Max_Silver_PDP_Image_Position_1_Silver_Colour__MY-EN.jpg?v=1757467933',
    imageAlt: 'iPhone 17 Pro Max Silver.',
  },
  {
    id: 2,
    name: 'iPhone 17 Air',
    href: '#',
    price: '$1,199',
    imageSrc: 'https://gait.com.kw/media/catalog/product/M/G/MG1D4AHA__1.jpg?quality=100&fit=bounds&height=700&width=700',
    imageAlt: 'iPhone 17 Air smartphone.',
  },
  {
    id: 3,
    name: 'iPhone 17 Pro',
    href: '#',
    price: '$1,399',
    imageSrc: 'https://www.istorm.gr/cdn/shop/files/IMG-18066212_m_jpeg_1_d768c161-7319-4805-b90a-c3eb139be854.jpg?v=1757468612',
    imageAlt: 'iPhone 17 Pro smartphone.',
  },
  {
    id: 4,
    name: 'iPhone 16 Pro Max',
    href: '#',
    price: '$1,099',
    imageSrc: 'https://shop.switch.com.my/cdn/shop/files/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1a_Desert_Titanium_Colour__MY-EN.jpg?v=1725951020',
    imageAlt: 'iPhone 16 Pro Max Desert Titanium.',
  },
  {
    id: 5,
    name: 'Samsung Galaxy Z Fold 6',
    href: '#',
    price: '$1,799',
    imageSrc: 'https://images.samsung.com/is/image/samsung/assets/uk/smartphones/galaxy-z-fold6/buy/colour-selection/Color-Selection_Pink_PC.png',
    imageAlt: 'Samsung Galaxy Z Fold 6 Pink.',
  },
  {
    id: 6,
    name: 'Samsung Galaxy A06',
    href: '#',
    price: '$299',
    imageSrc: 'https://qmart.pk/wp-content/uploads/2025/01/Samsung-Galaxy-A06-Qmart-1.jpg',
    imageAlt: 'Samsung Galaxy A06.',
  },
  {
    id: 7,
    name: 'Google Pixel 7 Pro',
    href: '#',
    price: '$799',
    imageSrc: 'https://cellmart.pk/wp-content/uploads/2024/08/pixel-9-pro-xl-cellmart-21.jpg',
    imageAlt: 'Google Pixel 7 Pro smartphone.',
  },
  {
    id: 8,
    name: 'Google Pixel 9 Pro',
    href: '#',
    price: '$999',
    imageSrc: 'https://discountstore.pk/cdn/shop/files/61hg6JiO0qL._AC_SL1500.webp?v=1755774173',
    imageAlt: 'Google Pixel 9 Pro smartphone.',
  },
]

export default function Mobiles() {
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
