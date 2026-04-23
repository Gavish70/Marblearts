import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api/axios";

import ProductControls from "../components/products/ProductControls";
import CategorySidebar from "../components/products/CategorySidebar";
import ProductGrid from "../components/products/ProductGrid";
import CategoryDescription from "../components/products/CategoryDescription";
import ProductFAQ from "../components/products/ProductFAQ";

function Product({ setLoading }) {

  const { slug } = useParams();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [grid, setGrid] = useState("grid-3");

  // get products
  useEffect(() => {
    if (setLoading) setLoading(true);

    axios
      .get(`/products/${slug}`)
      .then((res) => {
        const data = res.data.products || res.data;
        setProducts(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.log("Products error:", err);
        setProducts([]);
      })
      .finally(() => {
        if (setLoading) setLoading(false);
      });

  }, [slug, setLoading]);

  // get categories
  useEffect(() => {
    axios
      .get("/categories")
      .then((res) => {
        const data = res.data.categories || res.data;
        setCategories(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.log(err));
  }, []);

  return (

    <section className="flat-spacing-1">

      <div className="container">

        <ProductControls setGrid={setGrid} />

        <div className="tf-row-flex">

          <CategorySidebar categories={categories} />

          <div className="tf-shop-content">

            <ProductGrid products={products} grid={grid} />

          </div>

        </div>

      </div>

      <CategoryDescription description="Category description here" />

      <ProductFAQ faqs={[]} />

    </section>

  );

}

export default Product;