import React from 'react'
import { NavLink } from 'react-router-dom'


const Cards = (props) => {
    return (
        <div className="col-md-4 col-10  mt-5 d-flex justify-content-around">
            <div className="card ">
                <img src={props.imgsrc} className="card-img-top img-fluid" alt="..." style={{ width: "500px" }} />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">hi</p>
                    <NavLink to="/" className="btn btn-primary">Click Here</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Cards