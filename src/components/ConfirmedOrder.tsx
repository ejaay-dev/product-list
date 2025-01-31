import { ConfirmedOrderProps } from "../types/Product"

export const ConfirmedOrder = ({ confirmedOrder }: ConfirmedOrderProps) => {
  // Compute the total order price
  const orderTotal = confirmedOrder.reduce(
    (total, item) => total + item.productPrice * item.quantity,
    0
  )
  return (
    <>
      <div className="fixed inset-0 flex items-end justify-center bg-custom-black-50 z-50 h-full">
        <div className="flex flex-col justify-center gap-6 bg-white w-100 h-190 rounded-t-xl p-6">
          <div className="flex flex-row mt-4">
            <img
              src="/assets/images/icon-order-confirmed.svg"
              alt="Order Confirmed"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-custom-rose-900 text-4xl font-bold">Order</p>
            <p className="text-custom-rose-900 text-4xl font-bold">Confirmed</p>
            <p className="text-custom-rose-500 text-base font-normal">
              We hope you enjoy your food!
            </p>
          </div>
          <div className="flex flex-col bg-custom-rose-50 rounded-xl p-4 overflow-y-auto">
            {confirmedOrder.map((item) => (
              <div
                key={item.productId}
                className="flex flex-col justify-center items-center"
              >
                <div className="flex flex-row justify-center items-center">
                  <div className="">
                    <img
                      className="rounded-sm"
                      src={item.image.thumbnail}
                      alt={item.productName}
                    />
                  </div>
                  <div className="flex flex-col m-4  w-full">
                    <p className="text-custom-rose-900 text-sm font-medium">
                      {item.productName}
                    </p>
                    <div className="flex flex-row gap-3">
                      <p className="text-custom-red text-sm font-semibold">
                        {item.quantity}x
                      </p>
                      <p className="text-custom-rose-500 text-sm">
                        @ ${item.productPrice.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-custom-rose-900 font-medium text-sm">
                      ${(item.productPrice * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <hr className="border border-custom-rose-100" />
                </div>
              </div>
            ))}
            <div className="flex flex-row justify-between items-center mt-6 mb-6">
              <p className="text-custom-rose-500 text-sm font-medium">
                Order Total
              </p>
              <p className="text-custom-rose-900 text-xl font-semibold">
                ${orderTotal.toFixed(2)}
              </p>
            </div>
          </div>
          <div>
            <button className="h-14 w-full flex flex-row justify-center items-center bg-custom-red rounded-4xl hover:bg-[#962C0C]">
              <span className="text-custom-rose-100 font-medium">
                Start New Order
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
