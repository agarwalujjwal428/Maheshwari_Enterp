import "../styles/Aboutus.css";

const Aboutus = () => {
  return (
    <>
      <section className="py-3 py-md-5">
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6">
              <div className="about-left">
                <img
                  className="img-fluid rounded"
                  loading="lazy"
                  src="https://template.hasthemes.com/raees/raees/img/other/about.png"
                  alt="About 1"
                ></img>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="about-right mt-30">
                <h2>
                  Over
                  <span>
                    <img src="https://template.hasthemes.com/raees/raees/img/icon/1.png"></img>
                  </span>
                  years of Experience
                </h2>
                <h4>About Us</h4>
                <p className="about-first-para">
                  Maheshwari Enterprises was established by Mr. Shailesh
                  Maheshwari in the year 1990. In the past three decades the
                  company grew leaps & bounds and is now a well-established firm
                  in the field of construction and waterproofing products.
                  <br />
                  As compared to our competitors we have a major market cover
                  along with a wide range of products under a roof and years
                  long evolving experience in the field. Our products range are
                  from the top-class companies and the leaders in construction
                  line with experience of decades. We are pioneers of such
                  top-notch technologies in Jodhpur and neighbouring areas for
                  more than last 30 years.
                  <br />
                  Our products are used in different stages of construction
                  commonly in foundation, damp proof course (DPC), walls,
                  reinforced cement concrete (RCC), bathrooms, terrace,
                  plastering and finishing works.
                  <div className="about-us-text">
                    "I started the business as a one-man show, handling
                    everything from marketing to management. Over the years, we
                    have expanded our product range and are proud distributors
                    for 8 renowned companies. Today, Maheshwari Enterprises
                    covers around 6 districts, a testament to our commitment to
                    excellence in the construction industry."
                    <div className="founder">-Shailesh Maheshwari</div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Aboutus;
