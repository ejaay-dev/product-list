import { useEffect, useState } from "react"
import { ProductItem } from "./ProductItem"
import { ProductProps, ProductListProps } from "../types/Product"

export const ProductList = ({
  onAddToCart,
  onUpdateQuantity,
  productCart,
}: ProductListProps) => {
  const [products, setProducts] = useState<ProductProps[]>([])
  const [error, setError] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const url = "https://json-server-deployment-iota.vercel.app/desserts"

  // This block of code is for fetching the products from the json API
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setProducts(data || [])
      } catch (error: any) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <>
      <div className="flex flex-col gap-4 md:w-[600px] lg:w-[700px] xl:w-[900px]">
        <div className="flex flex-row justify-start items-center">
          <h1 className="font-redhat font-semibold text-3xl text-custom-rose-900">
            Desserts
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          {isLoading && <p>Fetching products...</p>}
          {error && <p className="text-red-500">{error}</p>}
          <ul className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4">
            {products.map((product) => {
              const isInCart = productCart.some(
                (item) => item.productId === product.id
              )
              return (
                <li key={product.id} className="mb-4 last:mb-0">
                  <ProductItem
                    id={product.id}
                    image={product.image}
                    category={product.category}
                    name={product.name}
                    price={product.price}
                    onAddToCart={onAddToCart}
                    onUpdateQuantity={onUpdateQuantity}
                    isInCart={isInCart}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
