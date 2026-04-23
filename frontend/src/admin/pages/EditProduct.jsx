import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/axios";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [maincategory, setMaincategory] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [categories, setCategories] = useState([]);

  const token = localStorage.getItem("token");

  // 🔥 Fetch existing data
  useEffect(() => {
    axios.get(`/products/id/${id}`)
      .then(res => {
        const p = res.data;
        setTitle(p.title_name);
        setPrice(p.price);
        setMaincategory(p.maincategory);
        setCurrentImage(p.property_img);
      })
      .catch(err => console.log(err));
  }, [id]);

  // 🔥 Fetch categories
  useEffect(() => {
    axios.get("/categories")
      .then(res => setCategories(res.data.categories || res.data))
      .catch(err => console.log(err));
  }, []);

  // 🔥 Update product
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("maincategory", maincategory);
    if (newImage) {
      formData.append("property_img", newImage);
    }

    try {
      await axios.put(`/products/update/${id}`, formData, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data"
        }
      });

      alert("Product updated");
      navigate("/admin/products");

    } catch (err) {
      console.log(err);
      alert("Update failed");
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h2 className="admin-title">Edit Product</h2>
        <p className="admin-subtitle">Update product details and category assignment.</p>

        <form onSubmit={handleUpdate} className="admin-form">
          <label className="admin-label">Product Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="admin-input"
            required
          />

          <label className="admin-label">Price</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
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
                {cat.maincategory} ({cat.product_count || 0} products)
              </option>
            ))}
          </select>

          <label className="admin-label">Current Image</label>
          {currentImage && (
            <div className="admin-image-preview">
              <img
                src={`http://localhost:5000/uploads/productimg/${currentImage}`}
                alt="Current product"
                className="admin-current-image"
              />
            </div>
          )}

          <label className="admin-label">New Image (optional)</label>
          <input
            type="file"
            onChange={(e) => setNewImage(e.target.files[0])}
            className="admin-file-input"
            accept="image/*"
          />

          <button type="submit" className="admin-submit-btn">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

