import Axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../Layout/Footer'
import Header from '../Layout/Header'


const Course = ({ match }) => {
    const id = match.params.id
    const [ course, setCourse ] = useState()
    const [ videos, setVideos ] = useState([])
    useEffect(()=>{
     Axios.get(`http://localhost:3001/content/${id}`)
     .then(res => {
         setCourse(res.data)
     })
     .catch(err => console.log(err))
    },[])
        return (
            <>
            { course && (
            <>
            <Header />
            <div className="course-page">
            <section className="home-section--1">
             <div className="container">
              <div className="row">
                <div className="col col-sm-12 col-md-5">
                    <div className="pt-4 mt-4">
                        <h1>{course.data.title}</h1>
                        <p style={{ fontWeight: '200'}}>{course.data.description}</p>
                    </div>
                    <Link to={`/video/${course.topics[0].id}`} style={{ marginLeft: '0'}} className="link"><button className="button-video">WATCH FIRST VIDEO</button></Link>
                </div>
                <div className="col col-sm-12 col-md-7">
                 <div className="pt-4 mt-4 text-center">
                     <iframe width="560" height="315" src={course.topics[0].video_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                 </div>
                </div>
                <div className="video-list">
                 <h2>Videos, Episodes & Modules</h2>
                 <div className="video-list-cards">
                 { course.topics.map(video => (
                 <div className="video-list-card">
                     <h5>{video.title}</h5>
                     <p>{video.description}</p>
                     <button className="video-button">Available</button>
                 </div>
                 ))}
                 </div>
                </div>
              </div>
             </div>
             <div className="about">
             <div className="container">
              <div className="row">
              <div className="col-sm-12 col-md-8 offset-md-2">
              <h2 style={{ fontWeight: '900'}}>ABOUT</h2>
              <p style={{ marginTop: '50px', fontWeight: '200'}}>Hi, I'm Zayne. I'm a software developer currently based in New York. The main goal of this website is to improve my own React knowledge, experiment with software and website ideas using React + Ruby on Rails, and, most importantly, to share what I learn with you.</p>
              <p style={{ marginTop: '50px', fontWeight: '200'}}>The videos shared on here are mostly just my own experiments with trying to build things and learn using a react + rails stack. Feedback is welcome!</p>
              </div>
             </div>
             </div>
             </div>
            </section >
            </div>
            <Footer />
            </>
            )}
            </>
        )
}
export default Course

