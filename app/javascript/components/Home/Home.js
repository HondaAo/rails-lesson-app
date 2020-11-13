import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Layout/Header';
import '../Layout/Layout.css'
import Item from './Item';

const Home = () => {
    const [ courses, setCourses ] = useState([]);
    useEffect(()=>{
      Axios.get('http://localhost:3001/contents.json')
      .then(res => {
          setCourses(res.data.data)
          console.log(res.data)
      })
      .catch(err => console.log(err))
    },[])
    return (
        <>
        <Header />
        <div className="top-page">
          <h1>LEARN HOW TO BE WEB DEVELOPER</h1>  
          <p style={{ fontWeight: '200'}}>Learn HTML, CSS, JS, React.js, PHP, Rails on this site</p>
          <button className="top-button">Continue</button>
        </div>
        <div className="featured-lesson">
         <h1>Featured Courses</h1>
         <div className="lessons">
          { courses.length > 0 && courses.map(course => (
              <Item course={course} />
          ))}
         </div>
        </div>
        </>
    )
}

export default Home

