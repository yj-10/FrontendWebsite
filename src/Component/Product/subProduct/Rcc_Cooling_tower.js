import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import FooterDegin from "../../Footer/FooterDegin";
import Fram from "../../../assets/Img/Fram.png";
import RccCoolingTower from "../../../assets/Img/Rcc Cooling Tower.png";

function Rcc_Cooling_tower() {
  return (
    <>
      {" "}
      <div id="productimgbox">
      <img src={Fram} className="w-100 img-fluid " alt="fram" />
      </div>
      <MDBContainer className="my-4">
        <MDBRow className="mb-3 ">
          <MDBCol id="boxtwo" lg={"12"} md={"12"} sm={"12"}>
            <div id="LetfSideproduct">
              <div>
                <h1 id="title" className="text-start my-5 text-capitalize ">
                  Rcc Cooling tower{" "}
                </h1>
              </div>
              <div id="body-product">
                <p>
                  We manufacture Natural Draft , Induced Draft Cross Flow /
                  Counter Flow type, Treated Timber Cooling towers in single
                  cell / Multi cell construction. There is no capacity
                  limitation in multicell design. We have designed and supplied
                  multi-cell tower of 9000 m3/hr capacity, each cell having 2250
                  m3/hr circulating water and 15Â°C range at 4Â°C approach.<br/><br/>
                  Mechanical draft towers have either direct driven or gear
                  driven fan depends upon the capacity of each cell. Normally
                  small capacity towers (Aprx. Single cell capacity upto 200
                  m3/hr and DT 15Â°C ) are direct driven and higher capacity
                  towers are gear driven. We also manufacture single stripping
                  special purpose cooling tower for DT upto 50Â°C.
                </p>
              </div>

              <div id="imgProduct">
                <img
                  src={RccCoolingTower}
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

export default Rcc_Cooling_tower;
