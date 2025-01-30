import { SelectedItemProps } from "../types/SelectedProductItem.types"

export const SelectedProductItem = ({
  onCart,
  onRemoveItem,
}: SelectedItemProps) => {
  //
  // Destructure the onCart Props
  const {
    selectedProductId,
    selectedProductName,
    selectedProductPrice,
    selectedProductQuantity,
  } = onCart

  // Compute the selected item price to the number of quantity
  const selectedItemTotal = selectedProductPrice * selectedProductQuantity

  // Format the items total to two decimal places
  const selectedItemFormattedTotal = selectedItemTotal.toFixed(2)

  // // Format the product price to two decimal places
  const selectedProductFormattedPrice = selectedProductPrice.toFixed(2)

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <p className="text-custom-rose-900 font-semibold">
            {selectedProductName}
          </p>
          <div
            onClick={() => {
              // console.log(`Removing item with ID: ${selectedProductId}`)
              onRemoveItem(selectedProductId)
            }}
            className="flex justify-center items-center border-custom-rose-400 border rounded-full h-5 w-5 mt-3 hover:invert"
          >
            <img src="/assets/images/icon-remove-item.svg" alt="Remove Item" />
          </div>
        </div>
        <div className="flex flex-row justify-start items-center gap-4 mb-4">
          <p className="text-custom-red font-semibold">
            {`${selectedProductQuantity}x`}
          </p>
          <p className="text-custom-rose-500 font-normal">
            {`@ $${selectedProductFormattedPrice}`}
          </p>
          <p className="text-custom-rose-500 font-semibold">{`$${selectedItemFormattedTotal}`}</p>
        </div>
        <hr className="border-custom-rose-100" />
      </div>
    </>
  )
}
