import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import axios from "../../api/axios";
import { useEnquiry } from "../../contexts/EnquiryContext";

function Header() {

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


  // convert category name → slug
  const slugify = (text) => text.toLowerCase().replaceAll(" ", "-");

  const { openEnquiry } = useEnquiry();

  return (

    <>

{/* Announcement Bar */}

<div className="announcement-bar bg_primary not-hover">

<div className="wrap-announcement-bar">

<div className="box-sw-announcement-bar speed-1">

<div className="announcement-bar-item">
<p>BRING DIVINE BLESSINGS HOME WITH OUR EXQUISITE GOD STATUES.</p>
</div>

<div className="announcement-bar-item">
<p>GRACE YOUR SPACE WITH DIVINE GOD STATUES</p>
</div>

<div className="announcement-bar-item">
<p>INVITE BLESSINGS WITH OUR SACRED GOD STATUE</p>
</div>

<div className="announcement-bar-item">
<p>ELEVATE YOUR HOME WITH HOLY GOD SCULPTURES</p>
</div>

<div className="announcement-bar-item">
<p>EMBRACE SPIRITUALITY WITH EXQUISITE GOD STATUES</p>
</div>

</div>

</div>

<span className="icon-close close-announcement-bar"></span>

</div>


{/* Header */}

<header id="header" className="header-default header-style-2 box-shadowh">

<div className="main-header line">

<div className="container-full px_15 lg-px_10">

<div className="row wrapper-header align-items-center">


{/* Mobile Menu Button */}

<div className="col-md-4 col-3 tf-lg-hidden">

<a
href="#mobileMenu"
data-bs-toggle="offcanvas"
aria-controls="mobileMenu"
>

☰

</a>

</div>


{/* Contact */}

<div className="col-xl-4 tf-md-hidden">

<div className="d-flex gap-30 fw-5 contant-f">

<span>

<a href="mailto:info@marbleartsindore.com">

<i className="bi bi-envelope"></i> info@marbleartsindore.com

</a>

</span>

<a href="tel:+919827216148">

<i className="bi bi-telephone"></i>

<span>+91-9827216148</span>

</a>

</div>

</div>


{/* Logo */}

<div className="col-xl-4 col-md-4 col-8 text-center">

<Link to="/" className="logo-header">

<img
src="/assets/images/marble-image/Marble_Arts_logo.png"
alt="logo"
className="logo"
/>

</Link>

</div>


{/* Social Icons */}

<div className="col-xl-4 col-md-4 col-1">

<ul className="tf-top-bar_item tf-social-icon d-flex gap-10 nav-icon justify-content-end align-items-center new_socialm">

<li>

<a href="https://www.facebook.com/MarbleArtsIndore/" target="_blank" className="box-icon w_28 round social-facebook bg_line facebook">

<i className="icon fs-12 icon-fb"></i>

</a>

</li>

<li>

<a href="http://api.whatsapp.com/send?phone=+919827216148" target="_blank" className="box-icon w_28 round social-whatsapp bg_line whatsapp-hover">

<i className="icon fs-12 icon-whatsapp"></i>

</a>

</li>

<li>

<a href="https://www.instagram.com/marblearts_indore/" target="_blank" className="box-icon w_28 round social-instagram bg_line instagram">

<i className="icon fs-12 icon-instagram"></i>

</a>

</li>

<li>

<a href="https://www.youtube.com/@MarbleArtsIndore" target="_blank" className="box-icon w_28 round social-instagram bg_line instagram">

<i className="icon fs-12 icon-youtube"></i>

</a>

</li>

</ul>

</div>

</div>

</div>

</div>


{/* Navigation */}

<div className="header-bottom line tf-md-hidden">

<div className="container-full px_15 lg-px_40">

<div className="wrapper-header d-flex justify-content-center align-items-center">

<nav className="box-navigation text-center">

<ul className="box-nav-ul d-flex align-items-center justify-content-center gap-30">


{/* Home */}

<li className="menu-item">

<Link to="/" className="item-link uppercase">

HOME

</Link>

</li>


{/* About */}

<li className="menu-item">

<Link to="/about" className="item-link uppercase">

ABOUT US

</Link>

</li>


{/* Products */}

<li className="menu-item">

<a href="#" className="item-link">

PRODUCTS <i className="icon icon-arrow-down"></i>

</a>

<div className="sub-menu mega-menu">

<div className="container">

<div className="row">

{categories.map((cat) => (

<div key={cat.id} className="col-lg-3">

<div className="mega-menu-item">

<ul className="menu-list">

<li>

<Link
to={`/product/${slugify(cat.maincategory)}`}
className="menu-link-text link"
>

{cat.maincategory}

</Link>

</li>

</ul>

</div>

</div>

))}

</div>

</div>

</div>

</li>


{/* Contact */}

<li className="menu-item">

<Link to="/contact" className="item-link uppercase">

CONTACT US

</Link>

</li>


{/* Enquiry */}

<li className="menu-item">

<button onClick={openEnquiry} className="item-link uppercase" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>

ENQUIRY NOW

</button>

</li>


</ul>

</nav>

</div>

</div>

</div>

</header>


{/* Mobile Menu */}

<MobileMenu />

</>

  );
}

export default Header;