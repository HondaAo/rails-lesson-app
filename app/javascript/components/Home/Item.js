import React from 'react'
import { Link } from 'react-router-dom'
import '../Layout/Layout.css'

const Item = ({ course }) => {
    return (
        <Link to={`/courses/${course.id}`} className="card">
            <img src={course.image_url} alt="" />
            <div className="card-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="card-buttom">
                    <p>By Ao Honda</p>
                    <strong>FREE</strong>
                </div>
            </div>
        </Link>
    )
}

export default Item
