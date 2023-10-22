import "./Facilities.css";

const Facilities = () => {
  return (
    <div className="facilities1">
      <img
        className="headerbackimage-icon"
        alt=""
        src="/headerbackimage@2x.png"
      />
      <div className="basketballback" />
      <div className="basketball1">
        <b className="basketball2">BasketBall</b>
        <div className="outdoor-basketball">
          <p className="the-outdoor-basketball">Outdoor Basketball</p>
        </div>
        <div className="the-outdoor-basketball-container">
          <p className="the-outdoor-basketball">
            The Outdoor basketball court is situated next to the volleyball
            courts and is mainly a hard court made of tar. These are available
            for university students, staff members, and for outsiders as well
            upon request.
          </p>
        </div>
      </div>
      <div className="tenniscourt">
        <div className="tennisback" />
        <div className="university-of-peradeniya2">
          University of Peradeniya Tennis court complex has 03 tennis courts.
          These courts are clay surfaced and well maintained. These are
          available for university students, staff members, and for outsiders as
          well.
        </div>
        <div className="outdoor-tennis-courts">Outdoor Tennis Courts</div>
        <b className="tennis-courts">Tennis Courts</b>
        <img className="tennisimage-icon" alt="" src="/tennisimage@2x.png" />
      </div>
      <img
        className="basketballimage-icon"
        alt=""
        src="/basketballimage@2x.png"
      />
      <div className="header4">
        <div className="available-facilities">Available Facilities</div>
      </div>
      <div className="search">
        <div className="searchinput" />
        <img className="searchicon" alt="" src="/searchicon@2x.png" />
        <input className="search-here" placeholder="Search Here" type="text" />
      </div>
    </div>
  );
};

export default Facilities;
