import React from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./admin/admin.css";

import Header from "./user/components/Header";
import Footer from "./user/components/Footer";
import BottomToolbar from "./user/components/BottomToolbar";
import BottomProduct from "./user/components/BottomProduct";
import SearchMenu from "./user/components/SearchMenu";
import EnquiryModal from "./user/components/EnquiryModal";

import Home from "./user/pages/Home";
import About from "./user/pages/About";
import Contact from "./user/pages/Contact";
import Product from "./user/pages/Product";
import LoadingOverlay from "./user/components/LoadingOverlay";

import { EnquiryProvider, useEnquiry } from "./contexts/EnquiryContext";

import Login from "./admin/pages/Login";
import AddProduct from "./admin/pages/AddProduct";
import ProductList from "./admin/pages/ProductList";
import EditProduct from "./admin/pages/EditProduct";
import AddCategory from "./admin/pages/AddCategory";
import CategoryList from "./admin/pages/CategoryList";
import EditCategory from "./admin/pages/EditCategory";
import Logout from "./admin/pages/Logout";
import Layout from "./admin/Components/Layout";
import ProtectedRoute from "./admin/Components/ProtectedRoute";


// component mounted inside BrowserRouter; listens for location changes
// and triggers a short global loading animation
function RouteChangeHandler({ setLoading }) {
  const location = useLocation();

  React.useEffect(() => {
    // always scroll to top when the route changes
    window.scrollTo(0, 0);

    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location, setLoading]);

  return null;
}

function isTokenExpired(token) {
  if (!token) return true;
  const parts = token.split(".");
  if (parts.length !== 3) return true;

  try {
    const payload = JSON.parse(atob(parts[1]));
    if (!payload.exp) return true;
    const now = Math.floor(Date.now() / 1000);
    return now >= payload.exp;
  } catch {
    return true;
  }
}

function AppContent() {
  // global loading flag; pages can toggle it via the setter
  const [loading, setLoading] = React.useState(false);
  const { isEnquiryOpen, closeEnquiry } = useEnquiry();
  const location = useLocation();
  const navigate = useNavigate();
  const prevPath = React.useRef(location.pathname);

  React.useEffect(() => {
    // if the user leaves admin pages, clear token so they must re-login
    if (prevPath.current.startsWith("/admin") && !location.pathname.startsWith("/admin")) {
      localStorage.removeItem("token");
    }

    // if the user enters admin pages, enforce auth
    if (location.pathname.startsWith("/admin") && location.pathname !== "/admin/login") {
      const token = localStorage.getItem("token");
      if (!token || isTokenExpired(token)) {
        localStorage.removeItem("token");
        navigate("/admin/login", { replace: true });
      }
    }

    prevPath.current = location.pathname;
  }, [location, navigate]);

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <RouteChangeHandler setLoading={setLoading} />

      {!isAdminRoute && <Header />}

      <LoadingOverlay visible={loading} />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/product/:slug" element={<Product setLoading={setLoading} />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/admin/login" element={<Login />} />

<Route
  path="/admin/*"
  element={
    <ProtectedRoute>
      <Layout />
    </ProtectedRoute>
  }
>
  <Route index element={<ProductList />} />
  <Route path="dashboard" element={<ProductList />} />

  <Route path="products" element={<ProductList />} />
  <Route path="products/:slug" element={<ProductList />} />
  <Route path="add-product" element={<AddProduct />} />
  <Route path="edit-product/:id" element={<EditProduct />} />
  <Route path="logout" element={<Logout />} />

  <Route path="categories" element={<CategoryList />} />
  <Route path="add-category" element={<AddCategory />} />
  <Route path="edit-category/:id" element={<EditCategory />} />
</Route>
      </Routes>

      {!isAdminRoute && <Footer />}

      {!isAdminRoute && <BottomToolbar />}

      {!isAdminRoute && <BottomProduct />}

      {!isAdminRoute && <SearchMenu />}

      <EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />
    </>
  );
}

function App() {
  return (
    <EnquiryProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </EnquiryProvider>
  );
}

export default App;