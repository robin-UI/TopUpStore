
import './App.css'
import Category from './Components/Category/Category'
import Footers from './Components/Footer/Footers'
import Navbar from './Components/Navbar'
import ProductSection from './Components/ProductSection/ProductSection'
import TopCarousel from './Components/TopCarousel/TopCarousel'

function App() {


  return (
    <>
      <Navbar/>
      <TopCarousel/>
      <ProductSection/>
      <Category/>
      <Footers/>
    </>
  )
}

export default App
