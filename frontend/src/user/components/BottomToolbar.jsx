import { useEnquiry } from "../../contexts/EnquiryContext";

function BottomToolbar() {
  const { openEnquiry } = useEnquiry();
  return (

<div className="tf-toolbar-bottom type-1150">

{/* Products */}

<div className="toolbar-item">

<a
href="#toolbarShopmb"
data-bs-toggle="offcanvas"
>

<div className="toolbar-icon">
<i className="icon-shop"></i>
</div>

<div className="toolbar-label">Products</div>

</a>

</div>


{/* Search */}

<div className="toolbar-item">

<a
href="#canvasSearch"
data-bs-toggle="offcanvas"
>

<div className="toolbar-icon">
<i className="icon-search"></i>
</div>

<div className="toolbar-label">Search</div>

</a>

</div>


{/* Enquiry */}

<div className="toolbar-item">

<button
onClick={openEnquiry}
style={{ background: 'none', border: 'none', padding: 0 }}
>

<div className="toolbar-icon">
<i className="bi bi-file-earmark-person"></i>
</div>

<div className="toolbar-label">Enquiry</div>

</button>

</div>


{/* Call */}

<div className="toolbar-item">

<a href="tel:+919827216148">

<div className="toolbar-icon">
<i className="bi bi-telephone-outbound"></i>
</div>

<div className="toolbar-label">Call</div>

</a>

</div>


{/* WhatsApp */}

<div className="toolbar-item">

<a
href="https://wa.me/919827216148?text=Is%20Anyone%20Available%20To%20Chat?"
target="_blank"
>

<div className="toolbar-icon">

<i
className="bi bi-whatsapp"
style={{
backgroundColor: "#00e676",
color: "#fff",
padding: "3px",
borderRadius: "50%"
}}
></i>

</div>

<div className="toolbar-label">Whatsapp</div>

</a>

</div>

</div>

  );
}

export default BottomToolbar;