import { ConfirmedOrderProps } from "../types/Product"

export const ConfirmedOrder = ({
  confirmedOrder,
  onCloseConfirmModal,
  onClearCart,
}: ConfirmedOrderProps) => {
  // Compute the total order price
  const orderTotal = confirmedOrder.reduce(
    (total, item) => total + item.productPrice * item.quantity,
    0
  )

  const handleStartNewOrder = () => {
    onClearCart()
    onCloseConfirmModal()
  }
  return (
    <>
      <div className="fixed inset-0 flex items-end justify-center bg-custom-black-50 z-50 h-full md:items-center">
        <div className="flex flex-col justify-center gap-6 p-6 bg-white w-full h-160 rounded-t-xl md:h-120 md:gap-4 md:rounded-lg md:w-90 ">
          <div className="flex flex-row md:h-8 md:w-8">
            <img
              src="/assets/images/icon-order-confirmed.svg"
              alt="Order Confirmed"
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-1">
            <div className="flex flex-col gap-2 md:flex-row">
              <p className="text-custom-rose-900 text-4xl font-bold md:font-bold md:text-2xl">
                Order
              </p>
              <p className="text-custom-rose-900 text-4xl font-bold md:font-bold md:text-2xl">
                Confirmed
              </p>
            </div>
            <p className="text-custom-rose-500 text-base font-normal md:text-xs">
              We hope you enjoy your food!
            </p>
          </div>
          <div className="flex flex-col bg-custom-rose-50 rounded-xl pt-2 pl-4 pr-4 overflow-y-auto shadow-xs">
            {confirmedOrder.map((item) => (
              <div
                key={item.productId}
                className="flex flex-col justify-center items-center"
              >
                <div className="flex flex-row w-full md:gap-1">
                  <div className="md:w-16 md:h-16 flex flex-row items-center">
                    <img
                      className="rounded-sm"
                      src={item.image.thumbnail}
                      alt={item.productName}
                    />
                  </div>
                  <div className="flex flex-col gap-1 mt-4 mb-4 ml-2 mr-2 w-full md:m-2 md:mt-3">
                    <p className="text-custom-rose-900 text-xs font-medium">
                      {item.productName}
                    </p>
                    <div className="flex flex-row gap-3">
                      <p className="text-custom-red text-xs font-semibold">
                        {item.quantity}x
                      </p>
                      <p className="text-custom-rose-500 text-xs">
                        @ ${item.productPrice.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <p className="text-custom-rose-900 font-medium text-sm md:text-xs">
                      ${(item.productPrice * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <hr className="border border-custom-rose-100" />
                </div>
              </div>
            ))}
            <div className="flex flex-row justify-between items-center mt-4 mb-4">
              <p className="text-custom-rose-500 text-sm font-medium md:text-xs">
                Order Total
              </p>
              <p className="text-custom-rose-900 text-xl font-semibold md:text-base">
                ${orderTotal.toFixed(2)}
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={handleStartNewOrder}
              className="h-10 md:h-8 w-full flex flex-row justify-center items-center bg-custom-red rounded-4xl hover:bg-[#962C0C]"
            >
              <span className="text-custom-rose-100 font-normal text-sm md:text-xs">
                Start New Order
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
