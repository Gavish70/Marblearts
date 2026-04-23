import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SearchMenu() {

const [categories,setCategories] = useState([]);

useEffect(()=>{

// temporary categories
setCategories([
 "Marble Temple",
 "Radha Krishna",
 "Ganesh Murti",
 "Hanuman Statue",
 "Durga Maa"
]);

},[]);


// slug generator
const slugify = (text)=> text.toLowerCase().replaceAll(" ","-");


return(

<div className="offcanvas offcanvas-end canvas-search" id="canvasSearch">

<div className="canvas-wrapper">


{/* Header */}

<header className="tf-search-head">

<div className="title fw-5">

<h2 style={{fontSize:"18px"}}>Search our site</h2>

<div className="close">

<span
className="icon-close icon-close-popup"
data-bs-dismiss="offcanvas"
></span>

</div>

</div>


{/* Search Form */}

<div className="tf-search-sticky">

<form className="tf-mini-search-frm">

<fieldset className="text">

<input
type="text"
placeholder="Search"
name="text"
required
/>

</fieldset>

<button type="submit">

<i className="icon-search"></i>

</button>

</form>

</div>

</header>


{/* Body */}

<div className="canvas-body p-0">

<div className="tf-search-content">

<div className="tf-cart-hide-has-results">


{/* Quick Links */}

<div className="tf-col-quicklink">

<div className="tf-search-content-title fw-5">
Quick link
</div>

<ul className="tf-quicklink-list">

<li className="tf-quicklink-item">
<Link to="/">Home</Link>
</li>

<li className="tf-quicklink-item">
<Link to="/about">About Us</Link>
</li>


{/* Product Categories */}

<li className="nav-mb-item nav-ul-mb">

<a
href="#dropdown-menu-three"
className="collapsed mb-menu-link"
data-bs-toggle="collapse"
>

<span>Products</span>

<span className="btn-open-sub" style={{height:"10px"}}></span>

</a>


<div id="dropdown-menu-three" className="collapse">

<ul className="sub-nav-menu">

{categories.map((cat,index)=>{

return(

<li key={index}>

<Link
to={`/product/${slugify(cat)}`}
className="sub-nav-link"
>

<span>{cat}</span>

</Link>

</li>

)

})}

</ul>

</div>

</li>


<li className="tf-quicklink-item">
<Link to="/contact">Contact Us</Link>
</li>

</ul>

</div>


{/* Help Section */}

<div className="tf-col-content">

<div className="tf-search-content-title fw-5">
Need Help ?
</div>

<div className="tf-search-hidden-inner">

<div className="tf-loop-item">

<div className="image">

<img
src="/assets/images/marble-image/fevicon.png"
alt="marbleartsindore"
/>

</div>


<div className="content">

<ul className="mb-info">

<li>
Address: 639/9 Nehru Nagar, Atal Dwar Main Road, Indore, Madhya Pradesh.
</li>

<li>
Email: <b>info@marbleartsindore.com</b>
</li>

<li>
Phone: <b>+91-9827216148</b> <b>+91-8839301016</b>
</li>

</ul>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

)

}

export default SearchMenu;