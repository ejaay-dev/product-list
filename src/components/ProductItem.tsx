import { useState } from "react"

interface ProductItemProps {
  productName: string
  productDescription: string
  productPrice: string
}

export const ProductItem = ({
  productName,
  productDescription,
  productPrice,
}: ProductItemProps) => {
  const [isSelectedDessert, setIsSelectedDesssert] = useState<boolean>(false)
  const [selectedProductQuantity, setSelectedProductQuantity] =
    useState<number>(0)

  const handleAddToCart = () => {
    setIsSelectedDesssert(true)
    setSelectedProductQuantity(1)
  }

  const handleIncrement = () => {
    setSelectedProductQuantity(selectedProductQuantity + 1)
  }

  const handleDecrement = () => {
    setSelectedProductQuantity(selectedProductQuantity - 1)
    if (selectedProductQuantity === 1) {
      setIsSelectedDesssert(false)
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center font-redhat">
        <div className="relative flex flex-col items-center mb-10">
          <img
            src="/public/assets/images/image-creme-brulee-mobile.jpg"
            alt="Crème Brûlée"
            className={`rounded-xl ${
              isSelectedDessert ? "border-2 border-custom-red" : ""
            }`}
          />
          <div className="absolute bottom-[-20px]">
            {isSelectedDessert ? (
              <div className="flex flex-row justify-around items-center gap-2 border border-custom-rose-500 w-40 h-10 bg-custom-red rounded-3xl">
                <div onClick={handleDecrement}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    width="16"
                    height="16"
                    className="h-5 w-5 border border-white rounded-full cursor-pointer text-white hover:text-custom-red hover:bg-white"
                  >
                    {/* Horizontal Line */}
                    <path d="M4.5 9h9" />
                  </svg>
                </div>
                <p className="font-normal text-white">
                  {selectedProductQuantity}
                </p>
                <div onClick={handleIncrement}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    width="16"
                    height="16"
                    className="h-5 w-5 border border-white rounded-full cursor-pointer text-white hover:text-custom-red hover:bg-white"
                  >
                    {/* Vertical Line */}
                    <path d="M9 4v10" />
                    {/* Horizontal Line */}
                    <path d="M4 8.5h10" />
                  </svg>
                </div>
              </div>
            ) : (
              <div
                onClick={handleAddToCart}
                className="flex flex-row justify-center items-center gap-2 border border-custom-rose-500 hover:border-custom-red w-40 h-10 bg-white rounded-3xl"
              >
                <img
                  src="/public/assets/images/icon-add-to-cart.svg"
                  alt="Add to Cart"
                />
                <p className="font-medium text-custom-rose-900 hover:text-custom-red">
                  Add to Cart
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-0">
          <p className="text-custom-rose-500">{productName}</p>
          <p className="text-custom-rose-900 font-semibold">
            {productDescription}
          </p>
          <p className="text-custom-red font-semibold">{`$ ${productPrice}`}</p>
        </div>
      </div>
    </>
  )
}
