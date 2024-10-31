import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

const navigate= useNavigate();

const {userId} = useParams();

    const [user,setUser] = useState({
        name:'',
        email:'',
        contact:''
    })

    const {name,email,contact} = user

    const onInputChange = (e)=>{
       setUser({...user,[e.target.name]:e.target.value})
    }


useEffect(()=>{
    loadUser();
},[])


    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${userId}`,user);
        navigate("/")
    }

    const loadUser = async() =>{
        const result = await axios.get(`http://localhost:8080/user/${userId}`);
        setUser(result.data)
    }
    

  return (
    <div className='container'>

<div className='row'>
<div className='col-md-6 offset-md-3 border rounded p-4 mt-3 shadow'>
    <h2 className='text-center mb-4'>Edit User</h2>
    <form onSubmit={(e)=>onSubmit(e)}>
        <div className='mb-3'>
    <label htmlFor='Name' className='form-label'>Name</label>
<input type={"text"} className='form-control' placeholder='Enter your Name' name='name' value={name} onChange={(e)=>onInputChange(e)}></input>

</div>
<div className='mb-3'>
    <label htmlFor='email' className='form-label'>Email</label>
<input type={"text"} className='form-control' placeholder='Enter your Email' name='email' value={email} onChange={(e)=>onInputChange(e)}></input>

</div>
<div className='mb-3'>
    <label htmlFor='contact' className='form-label'>contact</label>
<input type={"text"} className='form-control' placeholder='Enter your Number' name='contact' value={contact} onChange={(e)=>onInputChange(e)}></input>

</div>

<button type='submit' className='btn btn-outline-primary m-3'>Submit</button>
<Link  className='btn btn-outline-danger m-3' to="/">Cancel</Link>
</form>

</div>


</div>


    </div>
  )
}
