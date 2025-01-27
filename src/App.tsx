import { EmptyCart } from "./components/EmptyCart"
import { PageLabel } from "./components/PageLabel"
import { ProductList } from "./components/ProductList"

function App() {
  return (
    <>
      <main className="w-screen h-screen bg-custom-rose-100 flex flex-col">
        <section>
          <PageLabel pageLabel="Desserts" />
        </section>
        <section>
          <EmptyCart />
        </section>
        <section className="flex-1 overflow-y-auto">
          <ProductList />
        </section>
      </main>
    </>
  )
}

export default App
