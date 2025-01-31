// General product interface
export interface ProductProps {
  id: string
  name: string
  category: string
  price: number
  image: ProductImageProps
}

// Product image interface
// Used for ProductProps > image
export interface ProductImageProps {
  thumbnail: string
  mobile: string
  tablet: string
  desktop: string
}

// Cart item interface
// Used across multiple components (ProductListProps, ProductItemProps, SelectedProductCartProps, ConfirmedOrderProps)
export interface CartItemProps {
  productId: string
  productName: string
  productPrice: number
  quantity: number
  image: ProductImageProps
}

// Interfaces or Props for ProductList component (src/components/ProductList.tsx)
export interface ProductListProps {
  onAddToCart: (product: CartItemProps) => void
  onUpdateQuantity: (productName: string, quantity: number) => void
  productCart: CartItemProps[]
}

// Interfaces or Props for ProductItem component (src/components/ProductItem.tsx)
export interface ProductItemProps extends ProductProps {
  onAddToCart: (product: CartItemProps) => void
  onUpdateQuantity: (productName: string, quantity: number) => void
  isInCart: boolean
}

// Interfaces or Props for SelectedProductCart component (src/components/SelectedProductCart.tsx)
export interface SelectedProductCartProps {
  productCart: CartItemProps[]
  onRemoveItem: (productId: string) => void
}

// Interfaces or Props for SelectedProductItem component (src/components/SelectedProductItem.tsx)
export interface SelectedItemProps {
  selectedProduct: {
    productId: string
    productName: string
    quantity: number
    price: number
  }
  onRemoveItem: (productId: string) => void
}

export interface ConfirmedOrderProps {
  confirmedOrder: CartItemProps[]
}
