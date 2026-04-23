import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { useNavigate, useParams } from "react-router-dom";

function slugify(text) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export default function ProductList() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(slug || "");
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 20
  });
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const fetchCategories = async () => {
    try {
      const res = await axios.get("/categories");
      setCategories(res.data.categories || res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProducts = async (slugValue = "", page = 1, limit = pagination.itemsPerPage) => {
    setLoading(true);
    try {
      const url = slugValue ? `/products/${slugValue}?page=${page}&limit=${limit}` : `/products?page=${page}&limit=${limit}`;
      const res = await axios.get(url);
      setProducts(res.data.products || res.data);
      if (res.data.pagination) {
        setPagination({
          ...res.data.pagination,
          itemsPerPage: limit
        });
      } else {
        setPagination({
          currentPage: 1,
          totalPages: 1,
          totalItems: (res.data.products || res.data).length,
          itemsPerPage: limit
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);

    if (value) {
      navigate(`/admin/products/${value}`);
    } else {
      navigate(`/admin/products`);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await axios.delete(`/products/delete/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Deleted successfully");
      fetchProducts(selectedCategory, pagination.currentPage, pagination.itemsPerPage);
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= pagination.totalPages) {
      fetchProducts(selectedCategory, page, pagination.itemsPerPage);
    }
  };

  const handleRowsPerPageChange = (event) => {
    const newLimit = parseInt(event.target.value, 10);
    setPagination((prev) => ({
      ...prev,
      itemsPerPage: newLimit,
      currentPage: 1
    }));
    fetchProducts(selectedCategory, 1, newLimit);
  };

  const getPageButtons = () => {
    const { currentPage, totalPages } = pagination;
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i += 1) pages.push(i);
      return pages;
    }

    pages.push(1);
    const left = Math.max(2, currentPage - 1);
    const right = Math.min(totalPages - 1, currentPage + 1);

    if (left > 2) pages.push("left-ellipsis");
    for (let page = left; page <= right; page += 1) pages.push(page);
    if (right < totalPages - 1) pages.push("right-ellipsis");
    pages.push(totalPages);

    return pages;
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    setSelectedCategory(slug || "");
    fetchProducts(slug || "", 1); // Reset to page 1 when category changes
  }, [slug]);

  return (
    <div className="admin-page">
      <div className="admin-card">
        <div className="admin-top-row">
          <h2 className="admin-title">Product List</h2>
          <p className="admin-subtitle">All products by main category in one table.</p>
        </div>

        <div className="admin-filter-row">
          <div>
            <label htmlFor="categoryFilter" className="admin-filter-label">
              Filter by Category:
            </label>
            <select
              id="categoryFilter"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="admin-select"
            >
              <option value="">All Categories</option>
              {categories.map((c) => (
                <option key={c.id} value={slugify(c.maincategory)}>
                  {c.maincategory}
                </option>
              ))}
            </select>
          </div>

          <div className="admin-page-size-row">
            <label htmlFor="rowsPerPage" className="admin-filter-label">
              Rows per page:
            </label>
            <select
              id="rowsPerPage"
              value={pagination.itemsPerPage}
              onChange={handleRowsPerPageChange}
              className="admin-select"
            >
              {[20, 100, 250, 500, 1000].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="admin-no-data">Loading...</td>
                </tr>
              ) : products.length === 0 ? (
                <tr>
                  <td colSpan="6" className="admin-no-data">No products found.</td>
                </tr>
              ) : (
                products.map((p, index) => (
                  <tr key={p.id}>
                    <td>{(pagination.currentPage - 1) * pagination.itemsPerPage + index + 1}</td>
                    <td>{p.title_name}</td>
                    <td>{p.price}</td>
                    <td>{p.maincategory}</td>
                    <td>
                      <img
                        src={`http://localhost:5000/uploads/productimg/${p.property_img}`}
                        alt={p.title_name}
                        className="admin-thumb"
                      />
                    </td>
                    <td>
                      <button className="admin-btn" onClick={() => navigate(`/admin/edit-product/${p.id}`)}>
                        Edit
                      </button>
                      <button
                        className="admin-btn admin-delete-btn"
                        onClick={() => handleDelete(p.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {pagination.totalPages > 1 && (
          <>
            <div className="admin-pagination-info">
              Showing {(pagination.currentPage - 1) * pagination.itemsPerPage + 1} - {Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems)} of {pagination.totalItems} products
            </div>
            <div className="admin-pagination">
              <button
                className={`admin-page-btn ${pagination.currentPage === 1 ? "admin-disabled-btn" : ""}`}
                onClick={() => handlePageChange(pagination.currentPage - 1)}
                disabled={pagination.currentPage === 1}
              >
                Previous
              </button>

              {getPageButtons().map((page, index) =>
                typeof page === "string" ? (
                  <span key={`${page}-${index}`} className="admin-ellipsis">
                    …
                  </span>
                ) : (
                  <button
                    key={page}
                    className={`admin-page-btn ${page === pagination.currentPage ? "admin-active-page" : ""}`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                className={`admin-page-btn ${pagination.currentPage === pagination.totalPages ? "admin-disabled-btn" : ""}`}
                onClick={() => handlePageChange(pagination.currentPage + 1)}
                disabled={pagination.currentPage === pagination.totalPages}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

