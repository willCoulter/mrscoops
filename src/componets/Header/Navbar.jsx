import React from "react";
import Navitem from "./Navitem/Navitem";

class Header extends React.Component {
    render(){
        return (
            <header>
                <div className="logo">
                    <img></img>
                    <h1>Mr.Scoops</h1>
                </div>

                <div className="nav-wrapper">
                    <Navitem link="/" title="Portfolio" isExact="true"/>
                    <Navitem link="/menu/" title="Menu"/>
                    <Navitem link="/about/" title="About"/>
                </div>
            </header>
        );
    }
}
