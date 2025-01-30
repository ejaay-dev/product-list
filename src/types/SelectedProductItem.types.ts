// Interfaces or Props used in src/components/SelectedProductItem.tsx
export interface SelectedItemProps {
  onCart: {
    selectedProductId: string
    selectedProductName: string
    selectedProductQuantity: number
    selectedProductPrice: number
  }
  onRemoveItem: (productId: string) => void
}
