import React from "react";
import "./TopCard.css";
import girlImg from "../../../images/advImg.png";
import ceoImg from "../../../images/CeoImg.png";
import phnImg from "../../../images/call.png";

const TopCard = () => {
  return (
    <>
      <div className="btm">
        <div className="card1">
          <div className="banner">
            <div className="ornl">
              <div className="ornLn"></div>
              <h5>CORPORATE AGENCY</h5>
            </div>
            <h1>Best Agency In The Market ! </h1>
            <p>
              Senectus dictum doloribus senectus laboriosam deserunt molestias
              rhoncus nonummy excepteur rem nostrud, ullamcorper, blanditiis,
              lobortis pede donec quidem aliquip tortor.
            </p>
            <div className="img-btn">
              <div className="ceo-box">
                <img src={ceoImg} alt="" />
                <div className="ceo-name">
                  <h4>George Smith</h4>
                  <p>CEO, Director</p>
                </div>
              </div>
              <button className="lrn">LEARN MORE</button>
            </div>
          </div>
          <div className="pstr">
            <img src={girlImg} alt="" />
            <div className="cnt">
              <div className="det">
                <p>FOR FURTHER INQUIRIES CALL :</p> <h1>(+984) 256 897 225</h1>
                <p className="mtr">
                  Senectus dictum doloribus senectus laboriosam deserunt
                  molestias rhoncus nonummy excepteur remr.
                </p>
              </div>
              <div className="callIcon">
                <img src={phnImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCard;
