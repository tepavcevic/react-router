import "./App.css";
import Layout from "./routes/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Index";
import About from "./routes/about/Index";
import Contact from "./routes/contact/Index";
import Products from "./routes/products/Index";
import NotFound from "./routes/not-found/Index";

function App() {

  return (
    <div className="App">
     <header>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
     </header>
    </div>
  )
}

export default App
