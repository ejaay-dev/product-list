import { useEffect, useState } from "react"
import { EmptyCart } from "./components/EmptyCart"
import { ProductList } from "./components/ProductList"
import { SelectedProductCart } from "./components/SelectedProductCart"
import { ProductImageProps } from "./types/Product"

function App() {
  const [productCart, setProductCart] = useState<
    {
      productId: string
      productName: string
      productPrice: number
      quantity: number
      image: ProductImageProps
    }[]
  >([])

  const handleAddToCart = (product: {
    productId: string
    productName: string
    productPrice: number
    quantity: number
    image: ProductImageProps
  }) => {
    // console.log("Adding to cart:", product)
    setProductCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.productName === product.productName
      )
      if (existingProduct) {
        return prevCart.map((item) =>
          item.productName === product.productName
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      } else {
        return [...prevCart, product]
      }
    })
  }

  const handleUpdateQuantity = (productName: string, quantity: number) => {
    setProductCart((prevCart) =>
      prevCart
        .map((item) =>
          item.productName === productName
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  // Function to remove item from the cart
  const handleRemoveItem = (productId: string) => {
    // console.log(`Removing item with ID: ${productId}`)
    setProductCart((prevCart) => {
      // console.log("Current cart:", prevCart)
      const updatedCart = prevCart.filter(
        (item) => item.productId !== productId
      )
      // console.log("Updated Cart:", updatedCart)
      return updatedCart
      // prevCart.filter((item) => item.productId !== productId)}
    })
  }

  // Function to clear the cart after clicking the start new order
  const handleClearCart = () => {
    setProductCart([])
  }

  useEffect(() => {
    console.log("Updated cart items:", productCart)
  }, [productCart])

  return (
    <>
      <main className="w-screen h-screen bg-custom-rose-100 overflow-y-auto">
        <section className="flex flex-col gap-6 items-center justify-center ml-6 mr-6 mt-12 mb-12 lg:flex-row lg:justify-center lg:items-start lg:gap-6">
          <article>
            <ProductList
              onAddToCart={handleAddToCart}
              onUpdateQuantity={handleUpdateQuantity}
              productCart={productCart}
            />
          </article>
          <aside className="w-full md:w-[600px] lg:w-[200px] xl:w-[400px]">
            {productCart.length > 0 ? (
              <SelectedProductCart
                productCart={productCart}
                onRemoveItem={handleRemoveItem}
                onClearCart={handleClearCart}
              />
            ) : (
              <EmptyCart />
            )}
          </aside>
        </section>
      </main>
    </>
  )
}

export default App
