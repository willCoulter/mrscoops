import React from "react";
import Navitem from "./Navitem/Navitem";

class Header extends React.Component {
    render(){
        return (
            <header>
                <div className="title">
                    <h1>Mr.Scoops</h1>
                </div>
                <div className="logo">
                    <img></img>
                </div>
                <div className="nav-wrapper">
                    <Navitem link="/" title="Portfolio" isExact="true"/>
                    <Navitem link="/coffee" title="Coffee"/>
                    <Navitem link="/sweets" title="Menu"/>
                    <Navitem link="/eats" title="Eats"/>
                    <Navitem link="/about" title="About"/>
                </div>
            </header>
        );
    }
}
