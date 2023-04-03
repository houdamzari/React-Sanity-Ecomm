import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import { client } from './client'
import Homepage from "./components/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";

function App() {
  const fetchdata = async () => {
      const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    const product = products.map(product => product.body.map(body => body.children.map(description => description.text.length !== 0 && console.log(description.text))))
    // console.log(products.body)
  }
  useEffect(() => {
 fetchdata();

  },[])
  return (
    <>
      <Routes>
      <Route element={<Homepage />} path="/">
            <Route path="/" element={<Homepage />} />
            <Route path="/sneakers" element={<ProductsPage />} />
      </Route>
      </Routes>
    </>
  );
}

export default App;
