import axios from "axios";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { useState } from "react";
import Weburls from "../../Redux/ApI/Weburls";
import MButton from "../../utility/MButton";
import MInput from "../../utility/MInput";
import SuccessModel from "../../utility/SuccessModel";
function Subscribe() {
  const [Subscribedata, setSubscribedata] = useState("");
  // console.log("........",Subscribedata)
  const [SuccessLoader, setSuccessLoader] = useState(false);
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("........", Subscribedata);

    axios.post(Weburls.SubPostapi, { ...Subscribedata }).then((res) => {

      setSubscribedata("");

      setSuccessLoader(true)
      document.body.style.overflow = "hidden"
      console.log(res.status);
      setTimeout(() => {
        document.body.style.overflow = "auto"
        setSuccessLoader(false)
      }, 3000);

    }).catch((error) => {
      setSuccessLoader(false)
    })

  };

  return (
    <>
      {/* <MDBContainer>
        <form className="d-flex flex-wrap " onSubmit={HandleSubmit}>
          <MDBRow>
            <MDBCol md={12} sm={12}>
              <MInput
                onChange={(e) => setSubscribedata(e.target.value)}
                name={"Email"}
                type={"email"}
                value={Subscribedata}
                class={"text-info mb-2 p-2 w-100"}
                // class={"w-100 bg-white"}
                placeholder={"Enter your Email"}
                required
              />
            </MDBCol>
            <MDBCol md={12} sm={12}>
              <MButton text={"Subscribe"} class={"mb-2 text-white"} />
            </MDBCol>
          </MDBRow>
          {/* <MInput
            onChange={(e) => setSubscribedata(e.target.value)}
            name={"Email"}
            type={"email"}
            value={Subscribedata}
            class={"text-info p-2 m-1"}
            // class={"w-100 bg-white"}
            placeholder={"Enter your Email"}
          />
          &nbsp; &nbsp; 
         </form> 
      // </MDBContainer> */}
      <form
        action="#"
        className="subscribe-form "
        onSubmit={HandleSubmit}
      >
        {/* <h2 className="text-white mr-4">Subscribe For Updates</h2> */}

        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control rounded-left "
            placeholder="Enter email address"
            onChange={(e) => setSubscribedata(e.target.value)}
            value={Subscribedata}
          />
          <input
            type="submit"
            value="Subscribe"
            className="form-control submit px-3"
          />
        </div>
      </form>
      {SuccessLoader ? <SuccessModel /> : ""}
    </>
  );
}

export default Subscribe;
