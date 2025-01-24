import { PageLabel } from "./components/PageLabel"
import { Product } from "./components/Product"
import { SelectedProductCart } from "./components/SelectedProductCart"

function App() {
  return (
    <>
      <main className="w-screen h-screen bg-custom-rose-100 flex flex-col">
        <section>
          <PageLabel pageLabel="Desserts" />
        </section>
        <section>
          <Product />
        </section>
        <section>
          <SelectedProductCart />
        </section>
      </main>
    </>
  )
}

export default App
