import { Link } from "react-router-dom";

function MobileMenu() {

  const categories = [
    "Marble Temple",
    "Radha Krishna",
    "Ganesh Murti",
    "Hanuman Statue"
  ];

  return (

<div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">

<span
  className="icon-close icon-close-popup"
  data-bs-dismiss="offcanvas"
></span>

<div className="mb-canvas-content">

<div className="mb-body">

<ul className="nav-ul-mb">

{/* Home */}

<li className="nav-mb-item">

<Link to="/" className="mb-menu-link">
<span>Home</span>
</Link>

</li>


{/* About */}

<li className="nav-mb-item">

<Link to="/about" className="mb-menu-link">
<span>About Us</span>
</Link>

</li>


{/* Products */}

<li className="nav-mb-item">

<a
  href="#dropdown-menu-three"
  className="mb-menu-link"
  data-bs-toggle="collapse"
>

<span>Products</span>

<span className="btn-open-sub"></span>

</a>

<div id="dropdown-menu-three" className="collapse">

<ul className="sub-nav-menu">

{categories.map((cat,index)=>{

const slug = cat.toLowerCase().replaceAll(" ","-")

return (

<li key={index}>

<Link
  to={`/product/${slug}`}
  className="sub-nav-link"
>

<span>{cat}</span>

<i className="icon icon-arrow1-right"></i>

</Link>

</li>

)

})}

</ul>

</div>

</li>


{/* Contact */}

<li className="nav-mb-item">

<Link to="/contact" className="mb-menu-link">

<span>Contact Us</span>

</Link>

</li>

</ul>


{/* Extra Info */}

<div className="mb-other-content">

<div className="mb-info">

<li>
Address: 639/9 Nehru Nagar, Indore
</li>

<li>
Email: info@marbleartsindore.com
</li>

<li>
Phone: +91-9827216148
</li>

</div>

</div>

</div>

</div>

</div>

  );
}

export default MobileMenu;