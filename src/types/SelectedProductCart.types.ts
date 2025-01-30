// Interfaces or Props used in SelectedProductCartProps
export interface CartItemProps {
  productId: string
  productName: string
  productPrice: number
  quantity: number
}

// Interfaces or Props used in src/components/SelectedProductCart.tsx
export interface SelectedProductCartProps {
  productCart: CartItemProps[]
  onRemoveItem: (productId: string) => void
}
