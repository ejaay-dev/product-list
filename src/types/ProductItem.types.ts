// Interfaces or Props used in src/components/ProductItem.tsx
export interface ProductImageProps {
  thumbnail: string
  mobile: string
  tablet: string
  desktop: string
}

// Interfaces or Props used in src/components/ProductItem.tsx
export interface ProductItemProps {
  productId: string
  productName: string
  productCategory: string
  productPrice: number
  productImage: ProductImageProps
  onAddToCart: (product: {
    productId: string
    productName: string
    productPrice: number
    quantity: number
  }) => void
  onUpdateQuantity: (productName: string, quantity: number) => void
  isInCart: boolean
}
