import { Link } from "react-router-dom";

function CategorySidebar({ categories }) {

  return (

    <aside className="tf-shop-sidebar wrap-sidebar-mobile">

      <div className="widget-facet wd-categories">

        <div className="facet-title">
          <span>Product categories</span>
          <span className="icon icon-arrow-up"></span>
        </div>

        <ul className="list-categoris mb_36">

          {categories.map((cat) => {

            const slug = cat.maincategory.toLowerCase().replaceAll(" ", "-");

            return (

              <li key={cat.id} className="cate-item">

                <Link to={`/product/${slug}`}>

                  <span>{cat.maincategory}</span>
                  &nbsp;<span>({cat.product_count} <small>Products</small>)</span>

                </Link>

              </li>

            );

          })}

        </ul>

      </div>

    </aside>

  );

}

export default CategorySidebar;