import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import FooterDegin from "../../Footer/FooterDegin";
import Fram from "../../../assets/Img/Fram.png";
import FRPFanBlads from "../../../assets/Img/FRP Fan Blads.png";

function FanBlads() {
  return (
    <>
      <div id="productimgbox">
        <img src={Fram} className="w-100 img-fluid " alt="fram" />
      </div>
      <MDBContainer className="my-4">
        <MDBRow className="mb-3 ">
          <MDBCol id="boxtwo" lg={"12"} md={"12"} sm={"12"}>
            <div id="LetfSideproduct">
              <div>
                <h1 className="text-start text-capitalize my-5" id="title">
                  FRP Fan Blads
                </h1>
              </div>
              <div id="body-product">
                <p>
                  Aerodynamic axial flow FRP supplied by Excellent cooling tower
                  are specifically designed for Cooling Towers and other
                  efficiency critical applications To ensure that the best
                  performance is achieved and the power consumption and noise
                  levels are as low as possible,it is of the most importants
                  that the right fan is chosen Axial fiow fans are delta’s
                  business. With an extensive product range and with a high
                  level of technical support ‘Excellent cooling tower’are
                  specifically designed for cooling towers and other efficiency
                  critical applications.’Excellent cooling tower’energy
                  efficient fan saves upto 30% power as compared to conventional
                  aluminium fans.
                </p>
              </div>

              <div id="imgProduct">
                <img
                  src={FRPFanBlads}
                  className="img-fluid w-100"
                  alt="no-img"
                />
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <FooterDegin />
    </>
  );
}

export default FanBlads;
