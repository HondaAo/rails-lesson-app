import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AdminHome from './admin/AdminHome'
import AdminState from './admin/AdminState'
import { Login } from './admin/Login'
import About from './Home/About'
import Home from './Home/Home'
import Course from './Home/Jumbotron'
import Lessons from './Home/Lessons'
import Video from './Home/Video'
import Member from './membership/Member'
import Mypage from './mypage/Mypage'
const App = () => {
    return (
        <AdminState>
        <Router>
         {/* <Header /> */}
         <Route path="/" exact component={Home} />
         <Route path="/login" component={Login} />
         <Route path="/video/:id" component={Video} />
         <Route path="/courses/:id" component={Course} />
         <Route path="/admin_home" component={AdminHome} />
         <Route path="/lessons" component={Lessons} />
         <Route path="/membership" component={Member} />
         <Route path="/about" component={Mypage} />
         {/* <Footer /> */}
        </Router>
        </AdminState>
    )
}

export default App
