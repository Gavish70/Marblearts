import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { Link } from "react-router-dom";

function CategorySection() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    axios
      .get("/api/categories")
      .then((res) => {
        const data = res.data.categories || res.data;
        setCategories(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (

    <section className="flat-spacing-2">

      <div className="container">

        <div className="row">

          {categories.map((cat) => {

            const slug = cat.maincategory.toLowerCase().replaceAll(" ", "-");

            const imageURL =
              `http://localhost:5000/uploads/categoryimg/${cat.maincategory_img}`;

            return (
              
              <div className="col-lg-3 col-md-4 col-6 mb-5" key={cat.id}>

                <div className="category-card">

                  <Link to={`/product/${slug}`}>

                    <img
                      src={imageURL}
                      alt={cat.maincategory}
                      style={{ width: "100%", borderRadius: "10px" }}
                      className="mb-3"
                    />

                    <p style={{fontSize: "16px"}}>{cat.maincategory}</p>

                    <p style={{fontSize: "14px", color: "#999"}}>({cat.product_count} Products)</p>

                  </Link>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );
}

export default CategorySection;