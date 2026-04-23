import { useState } from "react";
import QuickViewModal from "./QuickViewModal";
import { useEnquiry } from "../../../contexts/EnquiryContext";

function ProductCard({ product }) {

  const [showModal, setShowModal] = useState(false);
  const { openEnquiry } = useEnquiry();

  const imageURL = `http://localhost:5000/uploads/productimg/${product.property_img}`;

  const message =
    `Check out this product:\n` +
    `Name: ${product.title_name}\n` +
    `Size: ${product.size}\n` +
    `Price: ₹${product.price}\n` +
    `${imageURL}`;

  const whatsappMessage = encodeURIComponent(message);

  return (
    <>
      <div className="card-product">

        <div className="card-product-wrapper">

          <a href={imageURL} className="product-img">

            <img
              className="img-product"
              src={imageURL}
              alt={product.alt_tags}
              style={{ height: "348px" }}
            />

            <img
              className="img-hover"
              src={imageURL}
              alt={product.alt_tags}
              style={{ height: "348px" }}
            />

          </a>

          {/* Buttons */}

          <div className="list-product-btn absolute-2">

            <button
              className="box-icon bg_white"
              onClick={() => setShowModal(true)}
            >
              <span className="icon icon-view"></span>
            </button>

            <button
              className="box-icon bg_white bi bi-question-circle-fill"
              onClick={openEnquiry}
            >
              <span className="tooltip">Enquiry now</span>
            </button>

            <a
              href={`https://wa.me/919827216148?text=${whatsappMessage}`}
              target="_blank"
              className="box-icon bg_white bi bi-whatsapp"
              style={{ backgroundColor: "#00e676" }}
            >
              <span className="bi bi-whatsapp" style={{ color: "#fff" }}></span>
            </a>

          </div>

        </div>

        {/* Product Info */}

        <div className="card-product-info">

          <a href="#" className="title link">
            {product.title_name}
          </a>

          <span className="price">
            {product.description}
          </span>

          <span className="price">
            Size: {product.size}
          </span>

          <span className="price">
            Price: ₹{product.price}
          </span>

        </div>

      </div>

      <QuickViewModal
        productId={product.id}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />

    </>
  );
}

export default ProductCard;