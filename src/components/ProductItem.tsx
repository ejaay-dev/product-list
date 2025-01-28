import { useState } from "react"
// import { EmptyCart } from "./EmptyCart"
// import { SelectedProductCart } from "./SelectedProductCart"

interface ProductImage {
  thumbnail: string
  mobile: string
  tablet: string
  desktop: string
}

interface ProductItemProps {
  productName: string
  productCategory: string
  productPrice: number
  productImage: ProductImage
  onAddToCart: (product: {
    productName: string
    productPrice: number
    quantity: number
  }) => void
  onUpdateQuantity: (productName: string, quantity: number) => void
}

export const ProductItem = ({
  productName,
  productCategory,
  productPrice,
  productImage,
  onAddToCart,
  onUpdateQuantity,
}: ProductItemProps) => {
  const [isSelectedDessert, setIsSelectedDessert] = useState<boolean>(false)
  const [selectedProductQuantity, setSelectedProductQuantity] =
    useState<number>(0)

  const getImageByScreenSize = (image: ProductImage) => {
    const screenWidth = window.innerWidth
    if (screenWidth < 768) return image.mobile
    if (screenWidth < 1024) return image.tablet
    if (screenWidth >= 1024) return image.desktop
  }

  const imageSrc = getImageByScreenSize(productImage)

  // Derived the onCart object based on product name, price, and quantity
  // The state onCart is no longer in a separate state, this reduce unnecessary updates and re-renders
  // const onCart = {
  //   productName,
  //   productPrice,
  //   quantity: selectedProductQuantity,
  // }

  const handleAddToCart = () => {
    setIsSelectedDessert(true)
    setSelectedProductQuantity(1)
    onAddToCart({ productName, productPrice, quantity: 1 })
    // console.log(`Selected Product: ${productName}`)
    // console.log({ productName, productCategory, productPrice, imageSrc })
  }

  const handleIncrement = () => {
    setSelectedProductQuantity((prevQuantity) => {
      onUpdateQuantity(productName, 1)
      return prevQuantity + 1
    })
  }

  const handleDecrement = () => {
    setSelectedProductQuantity((prevQuantity) => {
      if (prevQuantity - 1 === 0) setIsSelectedDessert(false)
      onUpdateQuantity(productName, -1)
      return prevQuantity - 1
    })
  }

  const formattedProductPrice = productPrice.toFixed(2)

  return (
    <>
      <div
        className={`flex flex-col justify-center font-redhat bg-white rounded-xl p-4 ${
          isSelectedDessert ? "border-2 border-custom-red" : ""
        }`}
      >
        <div className="relative flex flex-col items-center mb-10">
          <img
            src={imageSrc}
            alt={`${productName} image`}
            className="rounded-xl"
          />
          <div className="absolute bottom-[-20px]">
            {isSelectedDessert ? (
              <div className="flex flex-row justify-around items-center gap-2 border border-custom-rose-500 w-40 h-10 bg-custom-red rounded-3xl">
                <div onClick={handleDecrement}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
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
                    strokeWidth="2"
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
                  src="/assets/images/icon-add-to-cart.svg"
                  alt="Add to Cart"
                />
                <p className="font-medium text-custom-rose-900 hover:text-custom-red">
                  Add to Cart
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center items-start">
          <p className="text-custom-rose-500">{productCategory}</p>
          <p className="text-custom-rose-900 font-semibold">{productName}</p>
          <p className="text-custom-red font-semibold">{`$ ${formattedProductPrice}`}</p>
        </div>
      </div>
    </>
  )
}
