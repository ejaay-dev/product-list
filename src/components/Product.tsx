import { ProductItem } from "./ProductItem"

export const Product = () => {
  return (
    <>
      <div className="m-6">
        <ProductItem
          productName="Crème Brûlée"
          productDescription="Vanilla Bean Crème Brûlée"
          productPrice="7.00"
        />
      </div>
    </>
  )
}
