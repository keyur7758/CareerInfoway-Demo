import React from 'react'
import './Card.css'
export default function Card(props) {
    return (
        <>
            <div className=" col-lg-4 col-md-6">
                <div className={props.data.class}>
                    <img src={props.data.images}/>
                    <h4>{props.data.title}</h4>
                    <p>{props.data.info}</p>
                </div>
            </div>
        </>
    )
}
