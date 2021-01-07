import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const Row = (props) => {
    return (
        <div className="rowWrapper">
            <h2 className="rowTitle">props.titleText</h2>
            <p className="rowText">props.paragraphText</p>
            <div className="rowPic">
                <LazyLoadImage
                    effect="blur"
                    alt=""
                    src={props.imagePath}
                    placeholderSrc={props.imagePath}
                    visibleByDefault={true}
                />   
            </div>
        </div>
    )
}