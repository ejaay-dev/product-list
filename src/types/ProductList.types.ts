// Interfaces or Props used in src/components/ProductList.tsx
export interface ProductProps {
  id: string
  name: string
  category: string
  price: number
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
  }
}

// Interfaces or Props used in src/components/ProductList.tsx
export interface ProductListProps {
  onAddToCart: (product: {
    productId: string
    productName: string
    productPrice: number
    quantity: number
  }) => void
  onUpdateQuantity: (productName: string, quantity: number) => void
  productCart: {
    productId: string
    productName: string
    productPrice: number
    quantity: number
  }[]
}
