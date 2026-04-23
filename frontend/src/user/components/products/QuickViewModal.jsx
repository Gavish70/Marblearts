import { useState, useEffect } from "react";

function QuickViewModal({ productId, isOpen, onClose }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && productId) {
      fetchProduct();
    }
  }, [isOpen, productId]);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/products/id/${productId}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      } else {
        console.error("Failed to fetch product");
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  const imageURL = product ? `http://localhost:5000/uploads/productimg/${product.property_img}` : "";

  return (
    <div className={`modal fade modalDemo ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} id={`quick_view${productId}`}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <span className="icon-close" data-bs-dismiss="modal" onClick={onClose}></span>
          </div>
          <div className="wrap">
            <div className="tf-product-media-wrap">
              {loading ? (
                <div>Loading...</div>
              ) : product ? (
                <div className="swiper tf-single-slide">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="item">
                        <img
                          src={imageURL}
                          alt={product.title_name}
                          style={{ width: '100%' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>
              ) : (
                <div>Product not found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickViewModal;
