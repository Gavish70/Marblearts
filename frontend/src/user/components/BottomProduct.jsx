import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BottomProduct() {

const [categories,setCategories] = useState([]);

useEffect(()=>{

// temporary categories
setCategories([
 { name:"Marble Temple", image:"/assets/images/marble-image/fevicon.png"},
 { name:"Radha Krishna", image:"/assets/images/marble-image/fevicon.png"},
 { name:"Ganesh Murti", image:"/assets/images/marble-image/fevicon.png"},
 { name:"Hanuman Statue", image:"/assets/images/marble-image/fevicon.png"}
]);

},[]);


// slug generator
const slugify = (text)=> text.toLowerCase().replaceAll(" ","-");


return(

<div
className="offcanvas offcanvas-start canvas-mb toolbar-shop-mobile"
id="toolbarShopmb"
>

<span
className="icon-close icon-close-popup"
data-bs-dismiss="offcanvas"
></span>

<div className="mb-canvas-content">

<div className="mb-body">

<ul className="nav-ul-mb">

<li className="nav-mb-item">

<a
href="#cate-menu-three"
className="tf-category-link has-children collapsed mb-menu-link"
data-bs-toggle="collapse"
>

<div className="image">
<img src="/assets/images/marble-image/fevicon.png" alt="Products"/>
</div>

<span>Products</span>

<span className="btn-open-sub"></span>

</a>


<div id="cate-menu-three" className="collapse list-cate show">

<ul className="sub-nav-menu">

{categories.map((cat,index)=>{

return(

<li key={index}>

<Link
to={`/product/${slugify(cat.name)}`}
className="tf-category-link sub-nav-link"
>

<div className="image">

<img src={cat.image} alt={cat.name}/>

</div>

<span>{cat.name}</span>

<i className="icon icon-arrow1-right"></i>

</Link>

</li>

)

})}

</ul>

</div>

</li>

</ul>

</div>


{/* bottom button */}

<div className="mb-bottom">

<a
href="https://www.google.com/maps/place/Marble+Arts+(Mandir-Murti+Store)"
className="tf-btn btn-line"
target="_blank"
>

Get direction

<i className="icon icon-arrow1-top-left"></i>

</a>

</div>

</div>

</div>

)

}

export default BottomProduct;