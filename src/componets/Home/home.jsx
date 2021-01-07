import React from "react"
import Row from "/Row"
import {withRouter, useHistory} from 'react-router-dom'

const Home = () => {
    const history = useHistory()

    return (
        <div className="home"> 
        <div className="bannerWrapper">
            <div className="bannnerImage">
                <img src="" src=""></img>
            </div>
            <div className="bannerText">
                <h1>Mr. Scoops</h1>
                <h2>Ice Cream - Cafe - Sandvich</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quaerat a facere rem deserunt! Doloribus fugiat nesciunt reiciendis neque excepturi, adipisci ipsam id facere culpa sit dolor, eligendi ipsum sint.</p>
            </div>
        </div>

        <div className="homeRows">
            <Row 
                titleText="Coffee"
                paragraphText="Lorem ipsum dolar situm"
                imagePath=""
            />
            <Row
                titleText="Sweets"
                paragraphText="Lorem ipsum dolor simat"
                imagePath=""
            />
            <Row
                titleText="Eats"
                paragraphText="Yum yum yum I love lunch"
                imagePath=""
            />
        </div>

        <div className="times">
            <ul>
                <li>Monday</li>
                <li>Monday</li>
                <li>Monday</li>
                <li>Monday</li>
                <li>Monday</li>
                <li>Monday</li>
                <li>Monday</li>
            </ul>
        </div>

        <div className="location">
            <ul>
                <li></li>
            </ul>
        </div>

        </div>

    )
}