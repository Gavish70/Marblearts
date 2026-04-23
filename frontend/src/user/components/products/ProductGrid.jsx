import ProductCard from "./ProductCard";

function ProductGrid({ products, grid = "grid-3" }) {

  return (

    <div className="grid-layout wrapper-shop" data-grid={grid}>

      {products.map((product) => (

        <ProductCard
          key={product.id}
          product={product}
        />

      ))}

    </div>

  );

}

export default ProductGrid;