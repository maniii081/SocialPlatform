import React from "react";
import "./index.css";

function Social(props){
  // console.log(props)
  return(
    <>
    <div className='cards'>
      <div className='card'>
        <img src={props.imgsrc} alt="Reload page" className="card_img"/>
        <div className='card_info'>
        <h3 className='card_title'>{props.title}</h3>
          <span className='card_category'>{props.span}</span>
          <br/>
          <a href={props.link} rel="noreferrer" target="_blank">
            <button className="but">Visit</button>
          </a>
        </div>
      </div>
      </div> 
    </>
  )
}
export default Social;