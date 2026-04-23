import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function CategoryList() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 20
  });
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const fetchCategories = async (page = 1, limit = pagination.itemsPerPage) => {
    setLoading(true);
    try {
      const res = await axios.get(`/categories?page=${page}&limit=${limit}`);
      setCategories(res.data.categories || res.data);
      setPagination({
        ...res.data.pagination,
        itemsPerPage: limit
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const slugify = (text) =>
    text
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this category?")) return;

    try {
      await axios.delete(`/categories/delete/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Deleted successfully");
      fetchCategories(pagination.currentPage); // refresh current page
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= pagination.totalPages) {
      fetchCategories(page, pagination.itemsPerPage);
    }
  };

  const handleRowsPerPageChange = (event) => {
    const limit = parseInt(event.target.value, 10);
    setPagination((prev) => ({
      ...prev,
      itemsPerPage: limit,
      currentPage: 1
    }));
    fetchCategories(1, limit);
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

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h2 className="admin-title">Category List</h2>
        <p className="admin-subtitle">Browse and manage your main categories.</p>

        <div className="admin-filter-row">
          <div className="admin-page-size-row">
            <label htmlFor="categoryRowsPerPage" className="admin-filter-label">
              Rows per page:
            </label>
            <select
              id="categoryRowsPerPage"
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
                <th>Name</th>
                <th>Image</th>
                <th>Products</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="admin-no-data">Loading...</td>
                </tr>
              ) : categories.length === 0 ? (
                <tr>
                  <td colSpan="5" className="admin-no-data">No categories found.</td>
                </tr>
              ) : (
                categories.map((c, index) => (
                  <tr key={c.id}>
                    <td>{(pagination.currentPage - 1) * pagination.itemsPerPage + index + 1}</td>
                    <td>{c.maincategory}</td>
                    <td>
                      <img
                        src={`http://localhost:5000/uploads/categoryimg/${c.maincategory_img}`}
                        alt={c.maincategory}
                        className="admin-thumb"
                      />
                    </td>
                    <td>{c.product_count}</td>
                    <td>
                      <button className="admin-btn" onClick={() => navigate(`/admin/edit-category/${c.id}`)}>
                        Edit
                      </button>
                      <button className="admin-btn admin-delete-btn" onClick={() => handleDelete(c.id)}>
                        Delete
                      </button>
                      <button className="admin-btn" onClick={() => navigate(`/admin/products/${slugify(c.maincategory)}`)}>
                        Products
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
              Showing {(pagination.currentPage - 1) * pagination.itemsPerPage + 1} - {Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems)} of {pagination.totalItems} categories
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


