function ProductControls({ setGrid }) {

  return (

    <div className="tf-shop-control align-items-center">

      <ul className="tf-control-layout d-flex justify-content-center">

        <li
          className="tf-view-layout-switch sw-layout-2"
          onClick={() => setGrid("grid-2")}
        >
          <div className="item">
            <span className="icon icon-grid-2"></span>
          </div>
        </li>

        <li
          className="tf-view-layout-switch sw-layout-3 active"
          onClick={() => setGrid("grid-3")}
        >
          <div className="item">
            <span className="icon icon-grid-3"></span>
          </div>
        </li>

        <li
          className="tf-view-layout-switch sw-layout-4"
          onClick={() => setGrid("grid-4")}
        >
          <div className="item">
            <span className="icon icon-grid-4"></span>
          </div>
        </li>

      </ul>

    </div>

  );

}

export default ProductControls;