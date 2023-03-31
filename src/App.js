import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom';
import Home from './components/home';
import Navigation from './common/navbar';
import ProductDetails from './common/productDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Navigation />} >
     <Route index element={<Home />} />
     <Route path={"/product/:productid"} element={<ProductDetails />} />
   </Route> 
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
