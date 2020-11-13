import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../Layout/Footer'
import Header from '../Layout/Header'
import '../Layout/Layout.css'

const Video = ({ match }) => {
    const id = match.params.id
    const [ video, setVideo ] = useState()
    const [ course, setCourse ] = useState([])
    useEffect(()=>{
     Axios.get(`/topic/${id}`)
     .then(res => {
         setVideo(res.data.data)
     })
     .catch(err => console.log(err))
     if(video){
        Axios.get(`/content/${video.content_id}`)
        .then(res => {
            setCourse(res.data.topics)
        })
        .catch(err => console.log(err))
     }
    },[video])
    return (
        <>
        { video && (
        <>
        <Header />
        <div className="video-page">
         <div className="video-page-left">
             <iframe width="100%" height="550px" src={video.video_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
         </div>
         <div className="video-page-right">
             { course.length > 0 && course.map(thumnail => (
             <div className={ thumnail.id == id ? 'video-sub-card picked' : 'video-sub-card'}>
              <h5>{thumnail.title}</h5>
              <p>{thumnail.description}</p>
              <button><Link to={`/video/${thumnail.id}`} style={{ color: 'black'}}>Watch Video</Link></button>
             </div>
             ))}
             
         </div> 
        </div>
        <div className="video-page-content">
         <div className="container">
          <div className="row">
           <div className="col-sm-12 col-md-8 offset-md-2">
            <h2 style={{ fontWeight: '900'}}>{video.title}</h2>
            <p style={{ fontWeight: '200'}}>In this video, we'll create a brand new rails app from scratch and set it up from the start to use react.js for the view layer. We'll be using webpacker for this app, which will allow us to manage our react front end and our rails back end all within one projects.</p>
            <Link to={`/courses/${video.content_id}`}><button className="go-back-button">{' < '}Go Back</button></Link>
           </div>
          </div>
         </div>
        </div>
        <Footer />
        </>
        )}
        </>
    )
}

export default Video

