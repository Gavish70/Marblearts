import { useState, useEffect } from "react";
import axios from "../../api/axios";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [maincategory, setMaincategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [property_img, setImage] = useState(null);

    useEffect(() => {
  axios.get("/categories")
    .then(res => setCategories(res.data.categories || res.data))
    .catch(err => console.log(err));
}, []);

 const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("title", title);
  formData.append("price", price);
  formData.append("maincategory", maincategory);
  formData.append("property_img", property_img);

  try {
    await axios.post("/products/create", formData, {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data"
      },
    });

    alert("Product added with image");

  } catch (err) {
    console.log(err);
    alert("Error");
  }
};



  return (
    <div className="admin-page">
      <div className="admin-card">
        <h2 className="admin-title">Add Product</h2>
        <p className="admin-subtitle">Enter product details and link it to a main category.</p>

        <form onSubmit={handleSubmit} className="admin-form">
          <label className="admin-label">Product Title</label>
          <input
            type="text"
            placeholder="Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="admin-input"
            required
          />

          <label className="admin-label">Price</label>
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="admin-input"
            required
          />

          <label className="admin-label">Main Category</label>
          <select
            value={maincategory}
            onChange={(e) => setMaincategory(e.target.value)}
            className="admin-select"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.maincategory} ({cat.product_count})
              </option>
            ))}
          </select>

          <label className="admin-label">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="admin-file-input"
            required
          />

          <button type="submit" className="admin-submit-btn">Save Product</button>
        </form>
      </div>
    </div>
  );
}

