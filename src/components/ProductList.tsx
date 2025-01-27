import { useEffect, useState } from "react"
import { ProductItem } from "./ProductItem"

interface Product {
  id: string
  name: string
  category: string
  price: number
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
  }
}

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const url = "http://localhost:3030/desserts"

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
      <div className="m-6">
        {isLoading && <p>Fetching products...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <ProductItem
                productImage={product.image}
                productCategory={product.category}
                productName={product.name}
                productPrice={product.price}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
