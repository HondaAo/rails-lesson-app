import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Layout/Header'
import Item from './Item';

const Lessons = () => {
    const [ courses, setCourses ] = useState([]);
    useEffect(()=>{
      Axios.get('/contents.json')
      .then(res => {
          setCourses(res.data.data)
          console.log(res.data)
      })
      .catch(err => console.log(err))
    },[])
    return (
        <>
         <Header />
         <div className="lesson-page">
          <div className="container">
              <div className="row">
              
              { courses.length > 0 && courses.map(course => (
                <Item course={course} />
              ))}
              </div>
          </div>
         </div>   
        </>
    )
}

export default Lessons
