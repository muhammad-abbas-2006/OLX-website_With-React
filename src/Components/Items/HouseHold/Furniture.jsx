const products = [
  {
    id: 1,
    name: 'Royal King Bed',
    href: '#',
    price: '$950',
    imageSrc: 'https://modeneseinteriors.com/uploads/2022/07/her-royal-majesty-bed.jpg',
    imageAlt: 'Luxury royal king-size bed with elegant headboard design.',
  },
  {
    id: 2,
    name: 'Classic Sofa Set',
    href: '#',
    price: '$780',
    imageSrc: 'https://m.media-amazon.com/images/I/81PlWn2jZGL._AC_SL1500_.jpg',
    imageAlt: 'Premium soft fabric sofa set for living room.',
  },
  {
    id: 3,
    name: 'Modern Dining Table',
    href: '#',
    price: '$620',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4LD5eyNipzfwq5-2GMNAnM94dcyN-eS0MnSsH_WpCc_m5e9vSKuo7aGFM_omIuC-nSSs&usqp=CAU',
    imageAlt: 'Elegant modern dining table with six chairs.',
  },
  {
    id: 4,
    name: 'Wooden Study Desk',
    href: '#',
    price: '$340',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxHtyfjd0rn4LpOHmAT9jyXDZnjm3CMmpGg&s',
    imageAlt: 'Classic wooden study desk with drawers.',
  },
  {
    id: 5,
    name: 'Luxury Sofa Chair',
    href: '#',
    price: '$410',
    imageSrc: 'https://pffurnitures.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-3.02.42-AM-1-e1737971082385.jpeg',
    imageAlt: 'Comfortable luxury sofa chair for home and office.',
  },
  {
    id: 6,
    name: 'Office Work Table',
    href: '#',
    price: '$295',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmf5vzn-RLAOFLPUdHjGQI_iDKTPEo44A8w&s',
    imageAlt: 'Wood and steel office work table with storage.',
  },
  {
    id: 7,
    name: 'Wooden Wardrobe',
    href: '#',
    price: '$680',
    imageSrc: 'https://m.media-amazon.com/images/I/71LSlxny0NL._UF894,1000_QL80_.jpg',
    imageAlt: 'Large wooden wardrobe with sliding doors.',
  },
  {
    id: 8,
    name: 'Modern Coffee Table',
    href: '#',
    price: '$270',
    imageSrc: 'https://habitt.com/cdn/shop/files/10_998bb8af-d38d-42eb-aa9b-c22cc9451d71.jpg?v=1752472446',
    imageAlt: 'Modern design coffee table for living room.',
  },
]

export default function Furniture() {
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
