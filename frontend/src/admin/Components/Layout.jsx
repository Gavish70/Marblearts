import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h3>Admin</h3>
        <ul className="admin-nav-list">
          <li className="admin-nav-item">
            <NavLink to="/admin/products" className={({ isActive }) => isActive ? "admin-nav-link active" : "admin-nav-link"}>
              Products List
            </NavLink>
          </li>
          <li className="admin-nav-item">
            <NavLink to="/admin/add-product" className={({ isActive }) => isActive ? "admin-nav-link active" : "admin-nav-link"}>
              Add Product
            </NavLink>
          </li>
          <li className="admin-nav-item">
            <NavLink to="/admin/categories" className={({ isActive }) => isActive ? "admin-nav-link active" : "admin-nav-link"}>
              Categories List
            </NavLink>
          </li>
          <li className="admin-nav-item">
            <NavLink to="/admin/add-category" className={({ isActive }) => isActive ? "admin-nav-link active" : "admin-nav-link"}>
              Add Category
            </NavLink>
          </li>
          <li className="admin-nav-item">
            <NavLink to="/admin/logout" className={({ isActive }) => isActive ? "admin-nav-link active" : "admin-nav-link"}>
              Logout
            </NavLink>
          </li>
        </ul>
      </aside>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}