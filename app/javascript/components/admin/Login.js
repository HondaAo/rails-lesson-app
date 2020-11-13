import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import './Admin.css'
import { AdminContext } from './AdminState';

export const Login = ({ history }) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('');
    const { adminInfo, setAdminInfo } = useContext(AdminContext);
    useEffect(()=> {
    setAdminInfo(localStorage.getItem('adminInfo') ? JSON.parse(localStorage.getItem('adminInfo')) : null)
    if(adminInfo){
      history.push('/admin_home')
    }
    console.log(adminInfo)
    },[adminInfo])
    const onSubmit = (e) => {
      e.preventDefault();
      const user = {
          email,
          password
      }
      Axios.post('/login',user)
      .then(res => {
        localStorage.setItem('adminInfo',JSON.stringify(res.data.user))
        alert(res.data.message)
        window.location = '/'
      })
      .catch(err => console.log(err))
    }
    return (
    <div style={{ backgroundColor: "#e9faff",height: '100vh'}}>
        <div className="form_page">
         <div >
         <form onSubmit={onSubmit} className="form_card">
          <h1>Admin Login</h1>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />  
          <input type="password"placeholder="Password" onChange={(e) => setPassword(e.target.value)} />  
          <button type="submit">Login</button>
         </form>
         </div>
        </div>
    </div>
    )
}
