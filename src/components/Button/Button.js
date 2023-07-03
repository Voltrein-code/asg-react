import { useState } from "react"
import { AnchorLink as ScrollableLink } from "react-anchor-link-smooth-scroll";
import rocketImage from "../../media/rocket.svg";
import "./Button.css";

export default function Button(props) {

  const createButton = () => {
    if(props.scrollable) {
      return(
        <ScrollableLink href="#" className={props.style}>{
          props.withRocket && <img className="button__rocket-image" alt="Иконка ракеты" src={rocketImage} /> + " " + props.children 
        } </ScrollableLink>
      )
    } else {
        <button className={props.style} onClick={props.onButtonClick}>{ props.children }</button>
    }
  }
  
  return(
    {createButton}
  )
}