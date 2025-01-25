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
          <ProductList />
        </section>
      </main>
    </>
  )
}

export default App
