import { SelectedProductItem } from "./SelectedProductItem"
import { SelectedProductCartProps } from "../types/Product"
import { ConfirmedOrder } from "./ConfirmedOrder"
import { useState } from "react"

export const SelectedProductCart = ({
  productCart,
  onRemoveItem,
}: SelectedProductCartProps) => {
  // Order confirmation modal
  const [showConfirmationModal, setShowConfirmationModal] =
    useState<boolean>(false)

  // Computation for the cart total quantity
  const cartTotal = productCart.reduce(
    (length, item) => length + item.quantity,
    0
  )

  // Computation for the orders total
  const ordersTotal = productCart.reduce(
    (total, item) => total + item.productPrice * item.quantity,
    0
  )

  // Format to two decimal places
  const formattedTotal = ordersTotal.toFixed(2)

  // Function to handle the confirm order button
  const handleConfirmOrder = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowConfirmationModal(true)
  }

  return (
    <>
      <div className="flex flex-col justify-center font-redhat bg-white rounded-xl p-6 shadow">
        <div className="mb-6 mt-2">
          <p className="font-bold text-custom-red text-xl ">
            Your Cart ({cartTotal})
          </p>
        </div>
        <div className="flex flex-col mb-10 overflow-y-auto h-40">
          {productCart.map((item) => (
            <SelectedProductItem
              key={item.productId}
              selectedProduct={{
                productId: item.productId,
                productName: item.productName,
                price: item.productPrice,
                quantity: item.quantity,
              }}
              onRemoveItem={onRemoveItem}
            />
          ))}
        </div>
        <div className="flex flex-row justify-between items-center mb-6">
          <p className="text-custom-rose-900">Order Total</p>
          <p className="font-bold text-custom-rose-900 text-2xl">{`$${formattedTotal}`}</p>
        </div>
        <div className="h-15 flex flex-row justify-center items-center gap-2 bg-custom-rose-50 rounded-lg mb-6">
          <img
            src="/assets/images/icon-carbon-neutral.svg"
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
        <button
          onClick={handleConfirmOrder}
          className="h-14 w-full flex flex-row justify-center items-center bg-custom-red rounded-4xl hover:bg-[#962C0C]"
        >
          <span className="text-custom-rose-100 font-medium">
            Confirm Order
          </span>
        </button>
        {showConfirmationModal && (
          <ConfirmedOrder confirmedOrder={productCart} />
        )}
      </div>
    </>
  )
}
