function ProductFAQ({ faqs }) {

  return (

    <section className="flat-spacing-11">

      <div className="container">

        <h5 className="mb_24">Frequently Asked Questions</h5>

        <div className="flat-accordion style-default">

          {faqs.map((faq, index) => (

            <div key={index} className="flat-toggle">

              <div className="toggle-title">

                {faq.question}

              </div>

              <div className="toggle-content">

                <p>{faq.answer}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default ProductFAQ;  