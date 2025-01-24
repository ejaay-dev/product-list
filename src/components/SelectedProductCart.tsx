export const SelectedProductCart = () => {
  return (
    <>
      <div className="flex flex-col justify-center font-redhat bg-white m-6 pb-10 rounded-xl">
        <div className="m-6">
          <p className="font-bold text-custom-red text-xl ">Your Cart ({})</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/public/assets/images/illustration-empty-cart.svg"
            alt="Empty Cart"
          />
          <p className="text-xs text-custom-rose-500 font-semibold ml-6 mr-6 mt-4">
            Your added items will appear here
          </p>
        </div>
      </div>
    </>
  )
}
