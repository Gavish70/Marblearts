function CategoryDescription({ description }) {

  return (

    <section className="flat-spacing-17 pt_0 pb_0">

      <div className="container">

        <div className="widget-tabs style-has-border">

          <ul className="widget-menu-tab">

            <li className="item-title active">

              <span className="inner">Description</span>

            </li>

          </ul>

          <div className="widget-content-tab">

            <div className="widget-content-inner active">

              <p className="mb_30 font-description">

                {description}

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default CategoryDescription;