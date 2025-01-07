import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import PagenotFound404 from "../components/common/PagenotFound404";
import ProductCategories from "../pages/ProductCategories";
import ProductDetails from "../components/Products/ProductDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/ceiling-fans" element={<ProductCategories />} />
      <Route path="/ceiling-fans/:productId" element={<ProductDetails />} />
      <Route path="/*" element={<PagenotFound404 />} />
    </Route>
  )
);

export default router;
