const Test_Item = ({ title, stat, icon }) => {
  return (
    <div className="funfact-single text-center">
      <div className="funfact-img">
        <img src={icon}></img>
        </div>
        <div className="funfact-count text-uppercase">
            <h3>
                <span class="counter">{stat}</span>
            </h3>
            <h5>{title}</h5>
        </div>
    </div>
  );
};

export default Test_Item;
