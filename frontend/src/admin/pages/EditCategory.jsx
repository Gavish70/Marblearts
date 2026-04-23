import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/axios";

export default function EditCategory() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [currentImage, setCurrentImage] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`/categories/id/${id}`)
      .then((res) => {
        const c = res.data;
        setName(c.maincategory);
        setCurrentImage(c.maincategory_img);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `/categories/update/${id}`,
        {
          maincategory: name,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      alert("Category updated");
      navigate("/admin/categories");
    } catch (err) {
      console.log(err);
      alert("Update failed");
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h2 className="admin-title">Edit Category</h2>
        <p className="admin-subtitle">Modify category name and image.</p>

        <form onSubmit={handleUpdate} className="admin-form">
          <label className="admin-label">Category Name</label>
          <input
            type="text"
            placeholder="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="admin-input"
            required
          />

          {currentImage && (
            <div>
              <label className="admin-label">Current Image</label>
              <img
                src={`http://localhost:5000/uploads/categoryimg/${currentImage}`}
                alt={name}
                className="admin-thumb"
              />
            </div>
          )}

          <label className="admin-label">New Image (optional)</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="admin-file-input"
          />

          <button type="submit" className="admin-submit-btn">
            Save Category
          </button>
        </form>
      </div>
    </div>
  );
}
