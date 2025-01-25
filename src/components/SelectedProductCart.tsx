import { SelectedProductItem } from "./SelectedProductItem"

interface SelectedProductCartProps {
  onCart: {
    productName: string
    productPrice: number
    quantity: number
  }
}

export const SelectedProductCart = ({ onCart }: SelectedProductCartProps) => {
  const { productName, productPrice, quantity } = onCart

  // Compute the order total
  const ordersTotal = productPrice * quantity

  // Format to two decimal places
  const formattedTotal = ordersTotal.toFixed(2)

  return (
    <>
      <div className="flex flex-col justify-center font-redhat bg-white rounded-xl p-6 shadow">
        <div className="mb-6 mt-2">
          <p className="font-bold text-custom-red text-xl ">
            Your Cart ({quantity})
          </p>
        </div>
        <div className="flex flex-col mb-10">
          <SelectedProductItem
            onCart={{
              selectedProductName: productName,
              selectedProductPrice: productPrice,
              selectedProductQuantity: quantity,
            }}
          />
        </div>
        <div className="flex flex-row justify-between items-center mb-6">
          <p className="text-custom-rose-900">Order Total</p>
          <p className="font-bold text-custom-rose-900 text-2xl">{`$${formattedTotal}`}</p>
        </div>
        <div className="h-15 flex flex-row justify-center items-center gap-2 bg-custom-rose-50 rounded-lg mb-6">
          <img
            src="/public/assets/images/icon-carbon-neutral.svg"
            alt="Carbon Neutral Icon"
          />
          <p className="text-custom-rose-900 text-sm">
            This is a{" "}
            <span className="font-semibold text-custom-rose-900">
              carbon-neutral
            </span>{" "}
            delivery
          </p>
        </div>
        <div className="h-14 w-full flex flex-row justify-center items-center bg-custom-red rounded-4xl hover:bg-[#962C0C]">
          <p className="text-custom-rose-100 font-medium">Confirm Order</p>
        </div>
      </div>
    </>
  )
}
