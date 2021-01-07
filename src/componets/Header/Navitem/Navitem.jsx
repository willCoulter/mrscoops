import React from 'react';
import {
    NavLink,
} from "react-router-dom";
  
export default function Navitem(props) {
    const isExact = props.isExact;
    if (isExact) {
        return (
            <NavLink activeClassName="nav-item-active" className="nav-item" exact to={props.link}>{props.title}</NavLink>
        );
    }else{
        return (
            <NavLink activeClassName="nav-item-active" className="nav-item" to={props.link}>{props.title}</NavLink>
        );
    }   
}