import React from 'react'
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import Video1 from "../../assets/Img/Video1.mp4"
import Video2 from "../../assets/Img/Video2.mp4"
import Video3 from "../../assets/Img/Video3.mp4"

function VideoComp() {
  return (
    <MDBRow>
    <MDBCol md="4">
      <video loop controls 
        src={Video1}
        className="img-thumbnail w-100"
        style={{height:"200px", width:"100%"}}
        alt="..."
      />
    </MDBCol>
    <MDBCol md="8">
      <h2>Cooling Tower Water Cooler Machine</h2>
      <p>
      A cooling tower is a specialized heat exchanger in which air and water are brought into direct contact with each other in order to reduce the water's temperature. As this occurs, a small volume of water is evaporated, reducing the temperature of the water being circulated through the tower.
      </p>
    </MDBCol>

    <MDBCol md="4">
      <video loop controls 
        src={Video2}
        className="img-thumbnail w-100"
        style={{height:"200px", width:"100%"}}
        alt="..." 
      />
    </MDBCol>
    <MDBCol md="8">
      <h2>Cooling Tower Chimney</h2>
      <p>
      All cooling towers are designed to remove waste heat from water and transfer it to the atmosphere, but there are a lot of ways to accomplish this task. Cooling towers can be categorized in a number of different ways, because there are so many differences between cooling towers.  For our purposes, we will cover three kinds of cooling towers based on how air and water flow (counterflow, crossflow, and hyperbolic)  and two types based on how the air is moved (mechanical and natural draft).
      </p>
    </MDBCol>

    <MDBCol md="4">
      <video loop controls 
        src={Video3}
        className="img-thumbnail w-100"
        style={{height:"200px", width:"100%"}}
        alt="..."
      />
    </MDBCol>
    <MDBCol md="8">
      <h2>Cooling Tower Water Supply</h2>
      <p>
      The water is pumped to the top of the cooling tower and will than flow down through plastic or wooden shells. This causes drop formation. While flowing down, the water emits heat which mixes with the above air flow, causing it to cool down 10 to 20 ˚C.
Part of the water evaporates, causing it to emit more heat. Water vapor can sometimes be observed over the cooling tower.

Read more: https://www.lenntech.com/processes/disinfection/cooling/cooling-tower-water.htm#ixzz7uhhENoFH
      </p>
    </MDBCol>
  </MDBRow>
  )
}

export default VideoComp
