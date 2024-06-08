
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import BaseLayout from "./BaseLayout/BaseLayout";
import Category from "./pages/Category";
import SingleProduct from "./pages/SingleProduct";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout/>} >
    
      <Route index element={<Home/>} />
      <Route path="products" element={<Products/>} />
      <Route path="contact-us" element={<Contact/>} />
      <Route path="category" element={<Category/>} />
      <Route path='products/:id' element={<SingleProduct/>} />

    </Route>
  )
);



function App() {
  // const [count, setCount] = useState(0);

 

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
