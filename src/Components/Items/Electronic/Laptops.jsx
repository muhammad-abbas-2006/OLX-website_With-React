const products = [
  {
    id: 1,
    name: 'HP EliteBook 840 G9',
    href: '#',
    price: '$950',
    imageSrc: 'https://laptops.az/Uploads/bb7814b8-6487-4018-9f32-850928f8538b.png',
    imageAlt: 'HP EliteBook 840 G9 Laptop',
  },
  {
    id: 2,
    name: 'HP Spectre 13 x360',
    href: '#',
    price: '$1,099',
    imageSrc: 'https://technuggets.biz/wp-content/uploads/2019/11/Tech-Nuggets-HP-Spectre-13-AP0013dx-laptop.jpg',
    imageAlt: 'HP Spectre 13 convertible laptop.',
  },
  {
    id: 3,
    name: 'Lenovo IdeaPad Slim 3',
    href: '#',
    price: '$620',
    imageSrc: 'https://technox.pk/wp-content/uploads/2025/08/lenovo-ideapad-slim-3-Techno-X-Laptops-Technox.pk_-300x300.webp',
    imageAlt: 'Lenovo IdeaPad Slim 3 Laptop.',
  },
  {
    id: 4,
    name: 'Lenovo IdeaPad Slim 5',
    href: '#',
    price: '$780',
    imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2024/2/388901261/US/PY/RB/4815520/lenovo-ideapad-slim-5-500x500.jpg',
    imageAlt: 'Lenovo IdeaPad Slim 5 Laptop.',
  },
  {
    id: 5,
    name: 'Asus VivoBook X1504',
    href: '#',
    price: '$699',
    imageSrc: 'https://static.webx.pk/files/78721/Images/rsw-600,h-600-78721-2191501-090924080557362.jpg',
    imageAlt: 'Asus VivoBook X1504 silver laptop.',
  },
  {
    id: 6,
    name: 'Samsung Galaxy Book 5 Pro 360',
    href: '#',
    price: '$1,299',
    imageSrc: 'https://images.samsung.com/is/image/samsung/assets/us/galaxybooks/01182025/GB-PCD-Discover-FT12-FeatureColumnCarousel-GB5Pro360-M-V3.jpg?$720_N_JPG$',
    imageAlt: 'Samsung Galaxy Book 5 Pro 360 laptop.',
  },
  {
    id: 7,
    name: 'Dell XPS 15',
    href: '#',
    price: '$1,450',
    imageSrc: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell-premium/da16250/media-gallery/laptop-dell-da16250t-sl-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1015&qlt=100,1&resMode=sharp2&size=1015,804&chrss=full',
    imageAlt: 'Dell XPS 15 premium laptop.',
  },
  {
    id: 8,
    name: 'Acer Aspire 5',
    href: '#',
    price: '$550',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNjUq-7M0uuvX1atWE8y9Jg29UgaBHUEKm7w&s',
    imageAlt: 'Acer Aspire 5 slim laptop.',
  },
]

export default function Laptops() {
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
