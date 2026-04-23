import { useState } from "react";
import axios from "../../api/axios";

export default function AddCategory() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("maincategory", name);
    formData.append("maincategory_img", image);

    try {
      await axios.post("/categories/create", formData, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data"
        }
      });

      alert("Category added");
      setName("");
      setImage(null);

    } catch (err) {
      console.log(err);
      alert("Error");
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h2 className="admin-title">Add Main Category</h2>
        <p className="admin-subtitle">Add a new main category to organize products.</p>

        <form onSubmit={handleSubmit} className="admin-form">
          <label className="admin-label">Category Name</label>
          <input
            type="text"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="admin-input"
            required
          />

          <label className="admin-label">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="admin-file-input"
          />

          <button type="submit" className="admin-submit-btn">Save Category</button>
        </form>
      </div>
    </div>
  );
}

