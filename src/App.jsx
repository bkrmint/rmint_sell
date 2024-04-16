import Customers from "./sections/Customers"
import Hero from "./sections/Hero"
import Howitworks from "./sections/Howitworks"
import Signup from "./sections/Signup"
import Navbar from "./components/Navbar"
import Footer from "./sections/Footer"
import Success from "./sections/Success"

function App() {

  return (
    <main className="relative">
      <section >
        <Navbar />
      </section>
      <section className="padding-t bg-peach xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding-t padding-b bg-light-peach xl:padding-l wide:padding-r ">
        <Customers />
      </section>
      <section className=" padding bg-peach xl:padding-l wide:padding-r">
        <Howitworks />
      </section>
      <section className=" padding bg-light-peach xl:padding-l wide:padding-r">
        <Success />
      </section>
      <section className=" padding bg-peach xl:padding-l wide:padding-r">
        <Signup />
      </section>
      <section className="padding bg-black xl:padding-l wide:padding-r">
        <Footer />
      </section>
    </main>
    
  )
}

export default App
