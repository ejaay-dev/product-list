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
  return (
    <>
      <div className="flex flex-col justify-center font-redhat">
        <div className="relative flex flex-col items-center mb-10">
          <img
            src="/public/assets/images/image-creme-brulee-mobile.jpg"
            alt="Crème Brûlée"
            className="rounded-xl"
          />
          <div className="absolute bottom-[-20px] flex flex-row justify-center items-center gap-2 border border-custom-rose-500 w-40 h-10 bg-white rounded-3xl">
            <img
              src="/public/assets/images/icon-add-to-cart.svg"
              alt="Add to Cart"
            />
            <p className="font-medium text-custom-rose-900">Add to Cart</p>
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
