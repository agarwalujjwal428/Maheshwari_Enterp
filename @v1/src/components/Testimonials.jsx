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
                  title="CUP OF COFFEE"
                  stat={450}
                  icon="https://template.hasthemes.com/raees/raees/img/funfact/1.png"
                />
                <Test_Item
                  title="PROJECTS DONE"
                  stat={250}
                  icon="https://template.hasthemes.com/raees/raees/img/funfact/2.png"
                />
                <Test_Item
                  title="HAPPY CLIENTS"
                  stat={200}
                  icon="https://template.hasthemes.com/raees/raees/img/funfact/3.png"
                />
                <Test_Item
                  title="OUR BRANCHES"
                  stat={85}
                  icon="https://template.hasthemes.com/raees/raees/img/funfact/4.png"
                />
                <Test_Item
                  title="AWARDS WIN"
                  stat={99}
                  icon="https://template.hasthemes.com/raees/raees/img/funfact/5.png"
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
