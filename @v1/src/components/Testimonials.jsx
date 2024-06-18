import "../styles/Testimonials.css";
import Test_Item from "./Testimonial-Item";

const Testimonials = () => {
  return (
    <>
      <div className="funfact-area ptb-85 bg-2 bg-overlay-1">
        <div className="container testimonial_container">
          <div className="row">
            <div className="col-12">
              <div className="funfact-wrapper">
                <Test_Item
                  title="Year Established"
                  stat={1990}
                  icon="/assets/images/mile_logo2.png"
                />
                <Test_Item
                  title="PROJECTS DONE"
                  stat={3000}
                  icon="https://template.hasthemes.com/raees/raees/img/funfact/2.png"
                />
                <Test_Item
                  title="HAPPY CLIENTS"
                  stat={5000}
                  icon="https://template.hasthemes.com/raees/raees/img/funfact/3.png"
                />
                <Test_Item
                  title="Districts Covered"
                  stat={6}
                  icon="https://template.hasthemes.com/raees/raees/img/funfact/4.png"
                />
                <Test_Item
                  title="Retail Shops Covered"
                  stat={500}
                  icon="https://template.hasthemes.com/raees/raees/img/funfact/4.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
