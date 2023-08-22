//Props stands of properties.Props are like function arguments in javascript and attributes in HTML

import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";    
import Social from "./app";
import Sdata from "./Sdata";

console.log(Sdata[0]);

function ncard(val){
   return( 
    <Social
    imgsrc={val.imgsrc}
    title={val.title}
    span={val.span}
    link={val.link}
    />
    );
}

ReactDOM.render(<>
<h1 className="heading_style">Social Platforms</h1>
<footer> © Created by Mani Singh </footer>
{Sdata.map(ncard)}

</>,document.getElementById("social"));
