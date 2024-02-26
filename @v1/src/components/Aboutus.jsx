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
                  Established in 1990 by Mr. Shailesh Maheshwari, Maheshwari
                  Enterprises has become a leading name in the construction and
                  waterproofing products industry over the past three decades.
                  With a remarkable growth trajectory, we stand as a
                  well-established firm with a broad market presence and an
                  extensive range of top-quality products, all under one roof.
                  Our expertise in the field, spanning 30 years, sets us apart
                  from competitors, making us pioneers in introducing
                  cutting-edge technologies in Jodhpur and neighboring areas.
                  <div className="about-us-text">
                    "I started the business as a one-man show, handling
                    everything from marketing to management. Over the years, we
                    have expanded our product range and are proud distributors
                    for 8 renowned companies. Today, Maheshwari Enterprises
                    covers around 7 districts, a testament to our commitment to
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
